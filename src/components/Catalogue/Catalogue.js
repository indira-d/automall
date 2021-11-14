import React, { Component } from 'react'
import axios from 'axios'
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
        car: {},
        showAudi: false,
        showLexus: true,
        showKia: false,
        showBMV: false,
        showToyota: false,
        showShevrolet: false,
        activeModel: 'LEXUS'
    }


    render() {
        return (
            <div className='catalogueWrapper'>
                <h1 style={{textAlign: 'center'}}>Каталог</h1>

                <div className='catalogueMenu'>
                    <button className={this.state.showLexus  ? 'active' : 'cItem'} onClick={() => this.setState({showAudi: false, showBMW: false, showLexus: true, showKIA: false, showToyota: false, showShevrolet: false, activeModel: 'LEXUS'})}>Lexus</button>
                    <button className={this.state.showKIA  ? 'active' : 'cItem'} onClick={() => this.setState({showAudi: false, showBMW: false, showLexus: false, showKIA: true, showToyota: false, showShevrolet: false, activeModel: 'KIA'})}>Kia</button>
                    <button className={this.state.showToyota ? 'active' : 'cItem'}onClick={() => this.setState({showAudi: false, showBMW: false, showLexus: false, showKIA: false, showToyota: true, showShevrolet: false, activeModel: 'TOYOTA'})}>Toyota</button>
                    <button className={this.state.showBMV  ? 'active' : 'cItem'} onClick={() => this.setState({showAudi: false, showBMW: true, showLexus: false, showKIA: false, showToyota: false, showShevrolet: false, activeModel: 'BMW'})}>BMW</button>
                    <button className={this.state.showShevrolet ? 'active' : 'cItem'} onClick={() => this.setState({showAudi: false, showBMW: false, showLexus: false, showKIA: false, showToyota: false, showShevrolet: true, activeModel: 'СHEVROLET'})}>Shevrolet</button>
                    <button className={this.state.showAudi  ? 'active' : 'cItem'} onClick={() => this.setState({showAudi: true, showBMW: false, showLexus: false, showKIA: false, showToyota: false, showShevrolet: false, activeModel: 'Audi'})}>Audi</button>                
                </div>

                <div className='carsGallery' >
                    {
                        this.props.cars.filter(el => el.brand == this.state.activeModel)
                        .map(function(car, index){
                            return  <Link to={'/carDetails/' + car.id} className='carLink' style={{ textDecoration: 'none' }}  >
                            <div className='catalogueItem'> 
                                <div className='imgContainer'>
                                    <img src={car.image_one} className='catalogueImg'/>     
                                </div>
                                <div className='carText'>
                                    <h4>{car.title}</h4>
                                    <div className='carPrice' style={{textAlign: 'left', margin: '5px 5px 5px 0px'}}> От {car.price} сомов</div>
                                    <div className='carPrice' style={{textAlign: 'left', margin: '2px 5px 5px 0px'}}> {car.slogan}</div>
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
