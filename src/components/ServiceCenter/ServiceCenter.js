import React from 'react';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import './ServiceSenter.css'
import serviceBanner from '../../assets/Service-Banner-Revised.jpg'

function ServiceCenter(props) {
	return (
		
			
			<div className='service-center'>

			<Menu />

			
			<img src={serviceBanner} className='bannerImg'/>
            
			<h1 style={{textAlign: 'center', padding: '30px'}}>ЗАКАЖИТЕ СЕРВИСНОЕ ОБСЛУЖИВАНИЕ ВАШЕГО АВТОМОБИЛЯ</h1>
        <div className='ContactUsContainer'>
         
            <div className='wrapper'>
                <div className='form'>
                    <div>
                    Фамилия Имя
                    </div>
                    <div className='formInput'>
                        <input placeholder='Name and Surname' type='text' className='inptForm' />
                    </div>
                </div>
                <div className='form'>
                    Электронная почта
                    <div className='formInput'>
                        <input placeholder='Email' type='text' className='inptForm' />
                    </div>
                </div>
                <div className='form'>
                    Телефон
                    <div className='formInput'>
                        <input placeholder='Phone number' type='text' className='inptForm'/>
                    </div>
                </div>
            </div>
            </div>
            <div className='taText'>Напишите сообщение</div>
            <div className='cuTextarea'>
              <textarea placeholder='Text a message...' className='ta' />
              
            </div>
            <div>
            <button className='contactUsBtn'>Отправить</button>
            </div>
			
			<Footer/>
			
		</div>
	);
}

export default ServiceCenter;