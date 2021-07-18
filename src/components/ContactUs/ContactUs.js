import React from 'react';
import './ContactUs.css'

function ContactUs(props) {
    return (

        <div className='CUwrapper'>  
            <h1 style={{textAlign: 'center', padding: '30px'}}>НАПИШИТЕ НАМ</h1>
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
            
        
        </div>
    );
}

export default ContactUs;