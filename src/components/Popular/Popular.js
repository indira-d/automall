import React from 'react';
import pImg1 from '../../assets/13662.jpg'
import pImg2 from '../../assets/5cb0a31353c7113e012c92de.jpeg'
import pImg3 from '../../assets/f317c15cc9b19e268569e591c2bc6fbe.jpg'
import pImg4 from '../../assets/KBB-Best-Buys-Gear-Patrol-lead-full.jpg'
import './Popular.css'
import {Link} from 'react-router-dom'

function Popular(props) {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Автомобили с пробегом </h1>
            <div className='text'>
            Мультибрендовый автосалон AutoMall предлагает широкий модельный ряд коммерческих и 
легковых автомобилей.у нас вы можете найти то что вам больше подходит В шоу-руме 
представлены знаменитые автомобильные бренды
            </div>
        <div className='popularContainer'>


            {props.oldCars.map(car => {
                return  <Link to={'/carDetails/' + car.id}  className='popularItem'>
                <div className='popularImg'>
                    <img src ={pImg1} className='pImg' />
                </div>
                <div className='popularDiscription'>
                    <h3 className='pHeader'>
                            Audi 
                    </h3>
                    <div className='pPrice'>
                            $25 000
                    </div>
                    <div className='pText'>
                        fjfkjbkfjkbj
                    </div>
                </div>
            </Link>
            }) 
           
        }
            
            </div>
     
        </div>
    );
}

export default Popular;