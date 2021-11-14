
import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
import Menu from '../Menu/Menu';
import './CarDetails.css'
import Footer from '../Footer/Footer';
import Catalogue from '../Catalogue/Catalogue';
import Sidebar from '../SIdeBar/Sidebar';
import Credit from '../Credit/Credit';


export default class CarDetails extends Component {
    constructor(props){
        super(props)

    this.state={
        carCatalogue: []
     }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('http://localhost:8000/api/cars/').then(res => {
           
            this.setState({carCatalogue: res.data})
            console.log('resdata', res.data)
            this.setState({carCatalogue: res.data})
        }).catch(err => {
            console.log(err)
        })
    }

    activeBrand(e){
       console.log('activeBrand', e)
    }
    

    render() {

        let params = this.props.match.params.id
    

      return (
            <div className='carDetails'>
                <Menu />
                <div style={{display: 'flex'}}>
                    <Sidebar cars={this.state.carCatalogue}
                            params={params}
                            activeBrand={this.activeBrand.bind(this)}
                    />
                    <div className='carDetailsContainer'>
                        {
                            this.state.carCatalogue.filter(el => el.id === Number(params))
                            .map(function(it){
                                return(
                                <div>
                                    <div style={{display: 'flex'}}>
                                        <div className='carWrapper'> 
                                            <Carousel autoPlay={false} stopOnHover={true} >  
                                                    <div>
                                                        <img src={it.image_one} />
                                                    </div>
                                                    <div>
                                                        <img src={it.image_two}/> 
                                                    </div>
                                                    <div>
                                                        <img src={it.image_three} /> 
                                                    </div>
                                                    <div>
                                                        <img src={it.image_four} /> 
                                                    </div> 
                                            </Carousel>
                                        </div>
                                        <div className='carDiscription'>
                                            <div>
                                                   <h1 style={{textAlign: 'center'}}>{it.title}</h1>
                                                    <h2 style={{textAlign: 'center'}}> {it.price}</h2>

                                                    <div className='carFeature'> 
                                                            <div>Объем двигателя:</div>    
                                                            <div><strong>{it.motor_volume}</strong></div>
                                                    </div>
                                                    <div className='carFeature'> 
                                                            <div> Трансмиссия:</div>    
                                                            <div><strong>Автомат</strong></div>
                                                    </div>
                                                    <div className='carFeature'> 
                                                            <div>Год выпуска</div>    
                                                            <div><strong>{it.release_date}</strong></div>
                                                    </div>
                                                    <div className='carFeature'> 
                                                            <div>Цвета:</div>  
                                                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                                                    <div className='carColor1'></div>  
                                                                    <div className='carColor2'></div>  
                                                                    <div className='carColor3'></div> 
                                                                </div>
                                                        </div>
                                                    <div className='carFeature'> 
                                                            <div> Обивка</div>    
                                                            <div><strong>{it.upholstery}</strong></div>
                                                    </div>
                                                    <div className='carFeature'> 
                                                            <div>VIN</div>    
                                                            <div><strong>{it.vin_code}</strong></div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className='carInfoWrapper'>
                                        <h2>Общие характеристики</h2>
                                        <div className='carInfo'>
                                            <div className='carInfoItem'>
                                                <div className='carInfoHeader'>
                                                Объем топливного бака
                                                </div>
                                                <div className='carInfoText'>
                                                {it.fuel_volume}
                                                </div>
                                            </div>
                                            <div className='carInfoItem'>
                                                <div className='carInfoHeader'>
                                                Объем двигателя
                                                </div>
                                                <div className='carInfoText'>
                                                {it.motor_volume}
                                                </div>
                                            </div>
                                            <div className='carInfoItem'>
                                                <div className='carInfoHeader'>
                                                Разгон 
                                                </div>
                                                <div className='carInfoText'>
                                                {it.acceleration}
                                                </div>
                                            </div>
                                            <div className='carInfoItem'>
                                                <div className='carInfoHeader'>
                                                Максимальная скорость
                                                </div>
                                                <div className='carInfoText'>
                                                {it.max_speed}
                                                </div>
                                            </div>
                                            <div className='carInfoItem'>
                                                <div className='carInfoHeader'>
                                                Мощность 1
                                                </div>
                                                <div className='carInfoText'>
                                               {it.power}
                                                </div>
                                            </div>
                                            <div className='carInfoItem'>
                                                <div className='carInfoHeader'>
                                                Дорожный просвет 
                                                </div>
                                                <div className='carInfoText'>
                                                {it.lights}
                                                </div>
                                            </div>
                                            <div className='carInfoItem'>
                                                <div className='carInfoHeader'>
                                                Гарантия
                                                </div>
                                                <div className='carInfoText'>
                                               {it.guarantee}
                                                </div>
                                            </div>
                                            <div className='carInfoItem'>
                                                <div className='carInfoHeader'>
                                                Тип привода 
                                                </div>
                                                <div className='carInfoText'>
                                                {it.drive_type}
                                                </div>
                                            </div>
                                            <div className='carInfoItem'>
                                                <div className='carInfoHeader'>
                                            Объем багажника  466 л
                                                </div>
                                                <div className='carInfoText'>
                                               {it.trunk_volume}
                                                </div>
                                            </div>
                                            <div className='carInfoItem'>
                                                <div className='carInfoHeader'>
                                                Расход топлива 
                                                </div>
                                                <div className='carInfoText'>
                                                {it.consumption}
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    </div>
                                )
                            })
                        }  
                </div>
            </div>
            <Credit />
            <Footer />
        </div>
        
      
        )
    }
}