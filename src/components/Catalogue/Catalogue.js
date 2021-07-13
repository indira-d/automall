import React, { Component } from 'react'
import './Catalogue.css'
import Car1 from '../../assets/audi-rs720-1.jpg'
import Car2 from '../../assets/ls.jpg'
import Car3 from '../../assets/kia.jpg'
import Car4 from '../../assets/toyota.jpg'
import Car5 from '../../assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg'
import Car6 from '../../assets/shevrolet.jpg'
import {Link} from 'react-router-dom'
import CarDetails from '../CarDetails/CarDetails'




export default class Catalogue extends Component {
    state={
        showAudi: true,
        showLexus: false,
        showKia: false,
        showBMV: false,
        showToyota: false,
        showShevrolet: false,

        activeModel: 'Audi'
    }


    


    componentDidUpdate(prevProps) {
     
        if (this.props.showCar !== prevProps.showCar) {

        if     (this.props.showCar === 'Audi')   { this.setState({showAudi: true, showBMV: false, showLexus: false, showKia: false, showToyota: false, showShevrolet: false})}
        else if(this.props.showCar=== 'Lexus')   { this.setState({showAudi: false, showBMV: false, showLexus: true, showKia: false, showToyota: false, showShevrolet: false})}
        else if(this.props.showCar === 'KIA')    { this.setState({showAudi: false, showBMV: false, showLexus: false, showKia: true, showToyota: false, showShevrolet: false})}
        else if(this.props.showCar === 'BMV')    { this.setState({showAudi: false, showBMV: true, showLexus: false, showKia: false, showToyota: false, showShevrolet: false})}
        else if(this.props.showCar === 'Toyota') { this.setState({showAudi: false, showBMV: false, showLexus: false, showKia: false, showToyota: true, showShevrolet: false})}
        else if(this.props.showCar === 'Shevrolet'){ this.setState({showAudi: false, showBMV: false, showLexus: false, showKia: false, showToyota: false, showShevrolet: true})}
         
        }

      

    }

    render() {


        let activeCarModel = this.props.cars.filter(e => e.Brand == this.state.activeModel)

    
        return (
            <div className='catalogueWrapper'>
                <h1 style={{textAlign: 'center'}}>Каталог</h1>

                <div className='catalogueMenu'>
                    <button className={this.state.showAudi  ? 'active' : 'cItem'} onClick={() => this.setState({showAudi: true, showBMV: false, showLexus: false, showKia: false, showToyota: false, showShevrolet: false, activeModel: 'Audi'})}>Audi</button>
                    <button className={this.state.showLexus  ? 'active' : 'cItem'} onClick={() => this.setState({showAudi: false, showBMV: false, showLexus: true, showKia: false, showToyota: false, showShevrolet: false, activeModel: 'Lexus'})}>Lexus</button>
                    <button className={this.state.showKia  ? 'active' : 'cItem'} onClick={() => this.setState({showAudi: false, showBMV: false, showLexus: false, showKia: true, showToyota: false, showShevrolet: false, activeModel: 'KIA'})}>Kia</button>
                    <button className={this.state.showToyota ? 'active' : 'cItem'}onClick={() => this.setState({showAudi: false, showBMV: false, showLexus: false, showKia: false, showToyota: true, showShevrolet: false, activeModel: 'Toyota'})}>Toyota</button>
                    <button className={this.state.showBMV  ? 'active' : 'cItem'} onClick={() => this.setState({showAudi: false, showBMV: true, showLexus: false, showKia: false, showToyota: false, showShevrolet: false, activeModel: 'BMV'})}>BMV</button>
                    <button className={this.state.showShevrolet ? 'active' : 'cItem'} onClick={() => this.setState({showAudi: false, showBMV: false, showLexus: false, showKia: false, showToyota: false, showShevrolet: true, activeModel: 'Shevrolet'})}>Shevrolet</button>
                </div>

                <div className='carsGallery' >


                    {
                        activeCarModel.map(function(car, index){
                            return  <Link to={'/carDetails/' + car.id} className='carLink' style={{ textDecoration: 'none' }}  >
                            <div className='catalogueItem'> 
                                <div className='imgContainer'>
                                    <img src={car.img} className='catalogueImg'/>
                                </div>
                                <div className='carText'>
                                    <h4>{car.model}</h4>
                                    <div className='carPrice' style={{textAlign: 'left', margin: '5px 5px 5px 0px'}}> От {car.price} сомов</div>
                                    {/* <div className='carDescription'>год выпуска: {car.year}  г.в.</div>
                                    <div className='carDescription'> объем двигателя: {car.description}</div>  */}
                                </div>
                        </div>
                    </Link>
                        })
                    }
                </div>
             </div>
        )
    }
}
