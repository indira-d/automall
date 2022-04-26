import React, { useState, useEffect} from 'react'
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Menu from '../Menu/Menu';
import './Models.css'
import Footer from '../Footer/Footer';
import Sidebar from '../SIdeBar/Sidebar';
import Credit from '../Credit/Credit';

export const Models = (props) => {

     const [carCatalogue, setCarCatalogue] = useState([])
     const [activeBrand, setActiveBrand] = useState('')
     let ls = JSON.parse(window.localStorage.getItem('carlist'))
     const [defaultModel, setDefaultModel] = useState()
     let params = Number(props.match.params.id)

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get('http://159.223.67.241/api/cars/').then(res => { 
            window.localStorage.setItem('carlist', JSON.stringify(res.data))
            const initialModel = res.data.filter(el => el.id === Number(props.match.params.id))[0].brand  
            setDefaultModel(initialModel)
        }).catch(err => {
            console.log(err)
        })
    }, [])


   const activeBrandChangeHanler = (e) =>{
           setActiveBrand(e)
    }

     useEffect(() => {
         
           let selectedModel = ls.filter(x => x.id === Number(props.match.params.id))
           setCarCatalogue(selectedModel) 

    }, [props.match.params.id, defaultModel])


      useEffect(() => {
        let lsdata = ls.filter(x => x.brand === activeBrand)[0]
        if(lsdata){
             setCarCatalogue([lsdata])
        }
    }, [activeBrand])

	return (
	  <div className='detailsWrapper'>
            <Menu />
            <div className='block'>
            <Sidebar cars={ls}
                    params={params}
                    activeBrand={activeBrandChangeHanler}
                        />
            
				 <div className='modelsContainer'>
                        {
                      
                            carCatalogue.map(it => (
                                    <div style={{display: 'flex'}}>
                                        <div className='Carousel'> 
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
                                        <div className='carDescription'>
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
                                            Объем багажника
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
                                )
                            }
	                   </div>
                       
	            </div>

                <div className='creditWrapper'>
                           <Credit />
                       </div>
                       <Footer />
                        
	    </div>
 	)

                        }
   

