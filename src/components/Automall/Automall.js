import React from 'react';
import CarouselComponent from '../carousel/Carousel';
import Catalogue from '../Catalogue/Catalogue';
import ContactUs from '../ContactUs/ContactUs';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Offers from '../Offers/Offers';
import Popular from '../Popular/Popular';
import axios from 'axios';

class Automall extends React.Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef() 
        this.scrollTo = this.scrollTo.bind(this)

     this.state = {
        showCarCatalogue: '',
        carCatalogue: []
     }
    }


    componentDidMount(){
        axios.get('http://localhost:8000/api/cars/')
    
         .then(res => {
        const carCatalogue = res.data;

        this.setState({ carCatalogue});
      })
      .catch(err => console.log('err',err)) 
      
    }

    scrollTo () {
       window.scrollTo({ behavior: 'smooth', top: 3280})
    }

    

    render(){
        let oldCars = this.state.carCatalogue.filter(elem => elem.Brand == 'oldCars')

        
        return (
            <div>
                <Menu 
                    ref={this.myRef}
                    showCar={this.state.showCarCatalogue}
                    cars={this.state.carCatalogue}
                    scrollTo ={this.scrollTo.bind(this)}
                />
                <CarouselComponent />
                <Catalogue 
                    showCar={this.state.showCarCatalogue}
                    cars={this.state.carCatalogue}
                    />
                <Offers />
                <Features />
                <Popular oldCars={oldCars} />
                <ContactUs 
                    scrollTo ={this.scrollTo.bind(this)}
                    ref={this.myRef}
                />
                <Footer />
            </div>
        );
    }
}

export default Automall;

