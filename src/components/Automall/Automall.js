import React, { useRef } from 'react';
import CarouselComponent from '../carousel/Carousel';
import Catalogue from '../Catalogue/Catalogue';
import ContactUs from '../ContactUs/ContactUs';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Offers from '../Offers/Offers';
import Popular from '../Popular/Popular';
import toyotaCamry from'../../assets/Toyota_camry.jpg'
import CarDetails from '../CarDetails/CarDetails';

// import Car1 from '../../assets/audi-rs720-1.jpg'
// import Car2 from '../../assets/ls.jpg'
// import Car3 from '../../assets/kia.jpg'
// import Car4 from '../../assets/toyota.jpg'
// import Car5 from '../../assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg'
// import Car6 from '../../assets/shevrolet.jpg'



class Automall extends React.Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef() 
        this.scrollTo = this.scrollTo.bind(this)




     this.state={
        showCarCatalogue: '',
        carCatalogue: [
 

             { id: 1, Brand: 'Audi', model: 'Audi Q1', img: '/assets/audi-rs720-1.jpg', price: 25000, description: 'универсал' },
             { id: 2, Brand: 'Audi', model: 'Audi Q2', img: '/assets/audi-rs720-1.jpg', price: 15000, description: ' ceдан' },
             { id: 3, Brand: 'Audi', model: 'Audi Q3', img: '/assets/audi-rs720-1.jpg', price: 20000, description: 'кроссовер' },
             { id: 4, Brand: 'Audi', model: 'Audi Q4', img: '/assets/audi-rs720-1.jpg', price: 35000, description: 'универсал' },
             { id: 5, Brand: 'Audi', model: 'Audi Q5', img: '/assets/audi-rs720-1.jpg', price: 30000, description: 'седан' },
             { id: 6, Brand: 'Audi', model: 'Audi Q6', img: '/assets/audi-rs720-1.jpg', price: 18000, description: 'кроссовер' },
             { id: 7, Brand: 'Audi', model: 'Audi Q7', img: '/assets/audi-rs720-1.jpg', price: 25000, description: 'седан' },
             { id: 8, Brand: 'Audi', model: 'Audi Q8', img: '/assets/audi-rs720-1.jpg', price: 20000, description: 'седан' },
   
            { id: 9, Brand: 'Lexus', model: 'RX', img: '/assets/ls.jpg', price: 25000, description: 'универсал' },
            { id: 10, Brand: 'Lexus', model: 'GX',img: '/assets/ls.jpg', price: 15000, description: ' ceдан' },
            { id: 11, Brand: 'Lexus', model: 'LX', img: '/assets/ls.jpg', price: 20000, description: 'кроссовер' },
            { id: 12, Brand: 'Lexus', model: 'IS',img: '/assets/ls.jpg', price: 35000, description: 'универсал' },
            { id: 13, Brand: 'Lexus',model: 'ES', img: '/assets/ls.jpg', price: 30000, description: 'седан' },
            { id: 14, Brand: 'Lexus', model: 'LS', img: '/assets/ls.jpg', price: 18000, description: 'кроссовер' },
            { id: 15, Brand: 'Lexus', model: 'NX', img: '/assets/ls.jpg', price: 25000, description: 'седан' },
            { id: 16, Brand: 'Lexus', model: 'RC', img: '/assets/ls.jpg', price: 20000, description: 'седан' },
       
             { id: 17, Brand: 'KIA', model: 'Niro', img: '/assets/kia.jpg', price: 25000, description: 'универсал' },
             { id: 18, Brand: 'KIA', model: 'Sorento', img: '/assets/kia.jpg', price: 15000, description: ' ceдан' },
             { id: 19, Brand: 'KIA', model: 'Sportage', img: '/assets/kia.jpg', price: 20000, description: 'кроссовер' },
             { id: 20, Brand: 'KIA',  model: 'Seltos', img: '/assets/kia.jpg', price: 35000, description: 'универсал' },
             { id: 21, Brand: 'KIA', model: 'Telluride', img: '/assets/kia.jpg', price: 30000, description: 'седан' },
             { id: 22, Brand: 'KIA', model: 'Soul', img: '/assets/kia.jpg', price: 18000, description: 'кроссовер' },
             { id: 23, Brand: 'KIA', model: 'RIO', img: '/assets/kia.jpg', price: 25000, description: 'седан' },
             { id: 24, Brand: 'KIA', model: 'K5', img: '/assets/kia.jpg', price: 20000, description: 'седан' },
      
             { id: 25, Brand: 'Toyota',  model: 'Toyota Camry', img: '/assets/Toyota_camry.jpg', price: 'от 2 909 000 с', description: '2.5л', year: 2021 },
             { id: 26, Brand: 'Toyota', model: 'Toyota Corolla', img: '/assets/toyota_corolla_red.jpg', price: 'от 2 519 000 с', description: '1.6л', year: 2021 },
             { id: 27, Brand: 'Toyota', model: 'Toyota RAV4', img: '/assets/toyota-rav4.jpg', price: 'от 3 147 000 с', description: '2.0л', year: 2021 },
             { id: 28, Brand: 'Toyota', model: 'Toyota CH-R', img: '/assets/toyota_chr.jpg', price: 'от 3 147 000 с', description: '2.0л', year: 2021 },
             { id: 29, Brand: 'Toyota', model: 'Toyota Prado', img: '/assets/toyota_prado.jpg', price: 'от 4 843 000 с', description: '2.7л', year: 2021 },
             { id: 30, Brand: 'Toyota', model: 'Toyota Highlander', img: '/assets/2020-toyota-highlander.jpg', price: 'от 4 843 000 с', description: '2.7л', year: 2021 },


             { id: 31, Brand: 'BMV', model: 'BMV X1', img: '/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg', price: 25000, description: 'универсал' },
             { id: 32, Brand: 'BMV', model: 'BMV X2', img: '/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg', price: 15000, description: ' ceдан' },
             { id: 33, Brand: 'BMV', model: 'BMV X3', img: '/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg', price: 20000, description: 'кроссовер' },
             { id: 34, Brand: 'BMV', model: 'BMV X4', img: '/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg', price: 35000, description: 'универсал' },
             { id: 35, Brand: 'BMV', model: 'BMV X5', img: '/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg', price: 30000, description: 'седан' },
             { id: 36, Brand: 'BMV', model: 'BMV X6', img: '/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg', price: 18000, description: 'кроссовер' },
             { id: 37, Brand: 'BMV', model: 'BMV X7', img: '/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg', price: 25000, description: 'седан' },
             { id: 38, Brand: 'BMV', model: 'BMV X', img: '/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg', price: 20000, description: 'седан' },
   
             { id: 39, Brand: 'Shevrolet', model: 'Trax', img: '/assets/shevrolet.jpg', price: 25000, description: 'универсал' },
             { id: 40, Brand: 'Shevrolet', model: 'EQUINOX', img: '/assets/shevrolet.jpg', price: 15000, description: ' ceдан' },
             { id: 41, Brand: 'Shevrolet', model: 'BLAZER', img: '/assets/shevrolet.jpg', price: 20000, description: 'кроссовер' },
             { id: 42, Brand: 'Shevrolet', model: 'Malibu', img: '/assets/shevrolet.jpg', price: 35000, description: 'универсал' },
             { id: 43, Brand: 'Shevrolet', model: 'Spark', img: '/assets/shevrolet.jpg', price: 30000, description: 'седан' },
             { id: 44, Brand: 'Shevrolet', model: 'Travers', img: '/assets/shevrolet.jpg', price: 18000, description: 'кроссовер' },
             { id: 45, Brand: 'Shevrolet', model: 'Trailbarizer', img: '/assets/shevrolet.jpg', price: 25000, description: 'седан' },
             { id: 46, Brand: 'Shevrolet', model: 'Tahoe', img: '/assets/shevrolet.jpg', price: 20000, description: 'седан' },
   
            { id: 47, Brand: 'oldCars',  model: 'Toyota Camry', img: '/assets/Toyota_camry.jpg', price: 'от 2 909 000 с', description: '2.5л', year: 2021 },
            { id: 48, Brand: 'oldCars', model: 'Toyota Corolla', img: '/assets/toyota_corolla_red.jpg', price: 'от 2 519 000 с', description: '1.6л', year: 2021 },
            { id: 49, Brand: 'oldCars', model: 'Toyota RAV4', img: '/assets/toyota-rav4.jpg', price: 'от 3 147 000 с', description: '2.0л', year: 2021 },
            { id: 50, Brand: 'oldCars', model: 'Toyota CH-R', img: '/assets/toyota_chr.jpg', price: 'от 3 147 000 с', description: '2.0л', year: 2021 },
            { id: 51, Brand: 'oldCars', model: 'Toyota Prado', img: '/assets/toyota_prado.jpg', price: 'от 4 843 000 с', description: '2.7л', year: 2021 },
            
        ]
     }
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
                //scrollToCatalogue={this.scrollToCatalogue.bind(this)}
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
                {/* <CarDetails /> */}
            
             
            
            </div>
        );
    }
}

export default Automall;

