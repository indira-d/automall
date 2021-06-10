
import React, { Component } from 'react'
import CarD1 from '../../assets/13662.jpg'
import CarD2  from '../../assets/2022-kia-k8-sedan.jpg'
import CarD3 from '../../assets/kia.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
       
        carCatalogue: [

                 { id: 1, Brand: 'Audi', model: 'Audi Q1', img: ['/assets/audi-rs720-1.jpg'], price: 25000, description: 'универсал' },
                 { id: 2, Brand: 'Audi', model: 'Audi Q2', img: ['/assets/audi-rs720-1.jpg'], price: 15000, description: ' ceдан' },
                 { id: 3, Brand: 'Audi', model: 'Audi Q3', img: ['/assets/audi-rs720-1.jpg'], price: 20000, description: 'кроссовер' },
                 { id: 4, Brand: 'Audi', model: 'Audi Q4', img: ['/assets/audi-rs720-1.jpg'], price: 35000, description: 'универсал' },
                 { id: 5, Brand: 'Audi', model: 'Audi Q5', img: ['/assets/audi-rs720-1.jpg'], price: 30000, description: 'седан' },
                 { id: 6, Brand: 'Audi', model: 'Audi Q6', img: ['/assets/audi-rs720-1.jpg'], price: 18000, description: 'кроссовер' },
                 { id: 7, Brand: 'Audi', model: 'Audi Q7', img: ['/assets/audi-rs720-1.jpg'], price: 25000, description: 'седан' },
                 { id: 8, Brand: 'Audi', model: 'Audi Q8', img: ['/assets/audi-rs720-1.jpg'], price: 20000, description: 'седан' },
         
                { id: 9, Brand: 'Lexus', model: ' Lexus RX', img: ['/assets/ls.jpg', ], price: 25000, description: 'универсал' },
                { id: 10, Brand: 'Lexus', model: 'Lexus ES 350',img: ['/assets/LEXUSES350-1.jpg', '/assets/LEXUSES350-2.jpg', '/assets/LEXUSES350-3.jpg', '/assets/LEXUSES350-4.jpg'], price: 15000, description: ' ceдан' },
                { id: 11, Brand: 'Lexus', model: 'Lexus LX', img: ['/assets/ls.jpg'], price: 20000, description: 'кроссовер' },
                { id: 12, Brand: 'Lexus', model: 'Lexus IS',img: ['/assets/ls.jpg'], price: 35000, description: 'универсал' },
                { id: 13, Brand: 'Lexus',model: 'Lexus ES', img: ['/assets/ls.jpg'], price: 30000, description: 'седан' },
                { id: 14, Brand: 'Lexus', model: 'Lexus LS', img: ['/assets/ls.jpg'], price: 18000, description: 'кроссовер' },
                { id: 15, Brand: 'Lexus', model: 'Lexus NX', img: ['/assets/ls.jpg'], price: 25000, description: 'седан' },
                { id: 16, Brand: 'Lexus', model: 'LexusRC', img: ['/assets/ls.jpg'], price: 20000, description: 'седан' },
     
                 { id: 17, Brand: 'KIA', model: 'Niro', img: ['/assets/kia.jpg'], price: 25000, description: 'универсал' },
                 { id: 18, Brand: 'KIA', model: 'Sorento', img: ['/assets/kia.jpg'], price: 15000, description: ' ceдан' },
                 { id: 19, Brand: 'KIA', model: 'Sportage', img: ['/assets/kia.jpg'], price: 20000, description: 'кроссовер' },
                 { id: 20, Brand: 'KIA',  model: 'Seltos', img: ['/assets/kia.jpg'], price: 35000, description: 'универсал' },
                 { id: 21, Brand: 'KIA', model: 'Telluride', img: ['/assets/kia.jpg'], price: 30000, description: 'седан' },
                 { id: 22, Brand: 'KIA', model: 'Soul', img: ['/assets/kia.jpg'], price: 18000, description: 'кроссовер' },
                 { id: 23, Brand: 'KIA', model: 'RIO', img: ['/assets/kia.jpg'], price: 25000, description: 'седан' },
                 { id: 24, Brand: 'KIA', model: 'K5', img: ['/assets/kia.jpg'], price: 20000, description: 'седан' },
     
                 { id: 25, Brand: 'Toyota',  model: 'Toyota Camry', img: ['/assets/Toyota_camry.jpg', '/assets/toyota_camry_back.jpg', '/assets/toyota-camry-salon.jpg'], price: 'от 2 909 000 сом', description: '2.5л', year: 2021 },
                 { id: 26, Brand: 'Toyota', model: 'Toyota Corolla', img: ['/assets/toyota_corolla_red.jpg', '/assets/toyota_corolla_back2.jpg', '/assets/toyota_corolla_red_front.jpg'], price: 'от 2 519 000 с', description: '1.6л', year: 2021 },
                 { id: 27, Brand: 'Toyota', model: 'Toyota RAV4', img: ['/assets/toyota-rav4.jpg'], price: 'от 3 147 000 с', description: '2.0л', year: 2021 },
                 { id: 28, Brand: 'Toyota', model: 'Toyota CH-R', img: ['/assets/toyota_chr.jpg'], price: 'от 3 147 000 с', description: '2.0л', year: 2021 },
                 { id: 29, Brand: 'Toyota', model: 'Toyota Prado', img: ['/assets/toyota_prado.jpg'], price: 'от 4 843 000 с', description: '2.7л', year: 2021 },
                 { id: 30, Brand: 'Toyota', model: 'Toyota Highlander', img: ['/assets/2020-toyota-highlander.jpg'], price: 'от 4 843 000 с', description: '2.7л', year: 2021 },
  
                 { id: 31, Brand: 'BMV', model: 'BMV X1', img: ['/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg'], price: 25000, description: 'универсал' },
                 { id: 32, Brand: 'BMV', model: 'BMV X2', img: ['/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg'], price: 15000, description: ' ceдан' },
                 { id: 33, Brand: 'BMV', model: 'BMV X3', img: ['/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg'], price: 20000, description: 'кроссовер' },
                 { id: 34, Brand: 'BMV', model: 'BMV X4', img: ['/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg'], price: 35000, description: 'универсал' },
                 { id: 35, Brand: 'BMV', model: 'BMV X5', img: ['/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg'], price: 30000, description: 'седан' },
                 { id: 36, Brand: 'BMV', model: 'BMV X6', img: ['/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg'], price: 18000, description: 'кроссовер' },
                 { id: 37, Brand: 'BMV', model: 'BMV X7', img: ['/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg'], price: 25000, description: 'седан' },
                 { id: 38, Brand: 'BMV', model: 'BMV X', img: ['/assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg'], price: 20000, description: 'седан' },
     
                 { id: 39, Brand: 'Shevrolet', model: 'Trax', img: ['/assets/shevrolet.jpg'], price: 25000, description: 'универсал' },
                 { id: 40, Brand: 'Shevrolet', model: 'EQUINOX', img: ['/assets/shevrolet.jpg'], price: 15000, description: ' ceдан' },
                 { id: 41, Brand: 'Shevrolet', model: 'BLAZER', img: ['/assets/shevrolet.jpg'], price: 20000, description: 'кроссовер' },
                 { id: 42, Brand: 'Shevrolet', model: 'Malibu', img: ['/assets/shevrolet.jpg'], price: 35000, description: 'универсал' },
                 { id: 43, Brand: 'Shevrolet', model: 'Spark', img: ['/assets/shevrolet.jpg'], price: 30000, description: 'седан' },
                 { id: 44, Brand: 'Shevrolet', model: 'Travers', img: ['/assets/shevrolet.jpg'], price: 18000, description: 'кроссовер' },
                 { id: 45, Brand: 'Shevrolet', model: 'Trailbarizer', img: ['/assets/shevrolet.jpg'], price: 25000, description: 'седан' },
                 { id: 46, Brand: 'Shevrolet', model: 'Tahoe', img: ['/assets/shevrolet.jpg'], price: 20000, description: 'седан' },
       
                { id: 47, Brand: 'oldCars',  model: 'Toyota Camry', img: ['/assets/Toyota_camry.jpg'], price: 'от 2 909 000 с', description: '2.5л', year: 2021 },
                { id: 48, Brand: 'oldCars', model: 'Toyota Corolla', img: ['/assets/toyota_corolla_red.jpg'], price: 'от 2 519 000 с', description: '1.6л', year: 2021 },
                { id: 49, Brand: 'oldCars', model: 'Toyota RAV4', img: ['/assets/toyota-rav4.jpg'], price: 'от 3 147 000 с', description: '2.0л', year: 2021 },
                { id: 50, Brand: 'oldCars', model: 'Toyota CH-R', img: ['/assets/toyota_chr.jpg'], price: 'от 3 147 000 с', description: '2.0л', year: 2021 },
                { id: 51, Brand: 'oldCars', model: 'Toyota Prado', img: ['/assets/toyota_prado.jpg'], price: 'от 4 843 000 с', description: '2.7л', year: 2021 },
                
            ]
     }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        
    }
    
    

    render() {

        let params = this.props.match.params.id
        let carInfo = this.state.carCatalogue.filter(function(car){
            return car.id === Number(params)
        })

      return (
            <div className='carDetails'>
                <Menu />
            <div style={{display: 'flex'}}>
                <Sidebar cars={this.state.carCatalogue}/>

                <div className='carDetailsContainer'>
                   
                         { carInfo.map(function(car){
                                return (
                                    <div style={{display: 'flex'}}>
                                        <div className='carWrapper'> 
                                             <Carousel autoPlay={false} stopOnHover={true} >  
                                                    <div>
                                                        <img src={car.img[0]} />
                                                    </div>
                                                    <div>
                                                        <img src={car.img[1]}/> 
                                                    </div>
                                                    <div>
                                                        <img src={car.img[2]} /> 
                                                    </div>
                                                    <div>
                                                        <img src={car.img[2]} /> 
                                                    </div> 
                                                </Carousel>
                                        </div>
                                    <div className='carDiscription'>
                                        <h1 style={{textAlign: 'center'}}>{car.model}</h1>
                                        <h2 style={{textAlign: 'center'}}> {car.price}</h2>
                                        <div className='carFeature'> 
                                                <div>Объем двигателя:</div>    
                                                <div><strong>{car.description}</strong></div>
                                        </div>
                                        <div className='carFeature'> 
                                                <div> Трансмиссия:</div>    
                                                <div><strong>Автомат</strong></div>
                                        </div>
                                        <div className='carFeature'> 
                                                <div>Год выпуска</div>    
                                                <div><strong>{car.year}</strong></div>
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
                                                <div><strong>Черная кожа</strong></div>
                                        </div>
                                        <div className='carFeature'> 
                                                <div>VIN</div>    
                                                <div><strong>*******K10S184812</strong></div>
                                        </div>
                                       
                                   </div>
                                 </div>
                                )
                             })
                           }




                    
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
                           62 литра
                        </div>
                    </div>
                    <div className='carInfoItem'>
                        <div className='carInfoHeader'>
                        Объем двигателя
                        </div>
                        <div className='carInfoText'>
                           2.5 литра 
                        </div>
                    </div>
                    <div className='carInfoItem'>
                        <div className='carInfoHeader'>
                        Разгон 
                        </div>
                        <div className='carInfoText'>
                        0-100 км/ч за 9,5 сек
                        </div>
                    </div>
                    <div className='carInfoItem'>
                        <div className='carInfoHeader'>
                        Максимальная скорость
                        </div>
                        <div className='carInfoText'>
                        185 км/ч
                        </div>
                    </div>
                    <div className='carInfoItem'>
                        <div className='carInfoHeader'>
                        Мощность 1
                        </div>
                        <div className='carInfoText'>
                        184  л.с.
                        </div>
                    </div>
                    <div className='carInfoItem'>
                        <div className='carInfoHeader'>
                        Дорожный просвет 
                        </div>
                        <div className='carInfoText'>
                        182 мм
                        </div>
                    </div>
                    <div className='carInfoItem'>
                        <div className='carInfoHeader'>
                        Гарантия
                        </div>
                        <div className='carInfoText'>
                        3 года  или 100 000 км 
                        </div>
                    </div>
                    <div className='carInfoItem'>
                        <div className='carInfoHeader'>
                        Тип привода 
                        </div>
                        <div className='carInfoText'>
                        AWD
                        </div>
                    </div>
                    <div className='carInfoItem'>
                        <div className='carInfoHeader'>
                      Объем багажника  466 л
                        </div>
                        <div className='carInfoText'>
                        466 л
                        </div>
                    </div>
                    <div className='carInfoItem'>
                        <div className='carInfoHeader'>
                        Расход топлива 
                        </div>
                        <div className='carInfoText'>
                        13.5 л/100км
                        </div>
                    </div>
                </div>
                </div>
                

                <Credit />
            <Footer/>
        </div>
        )
    }
}
