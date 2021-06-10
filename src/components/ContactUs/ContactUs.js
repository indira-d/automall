import React from 'react';
import './ContactUs.css'

function ContactUs(props) {
    return (

        <div className='CUwrapper'>  
            <h1 style={{textAlign: 'center', padding: '30px'}}>Contact Us</h1>
        <div className='ContactUsContainer'>
         
            <div className='wrapper'>
                <div className='form'>
                    <div>
                    Name and Surname
                    </div>
                    <div className='formInput'>
                        <input placeholder='Name and Surname' type='text' className='inptForm' />
                    </div>
                </div>
                <div className='form'>
                    Email
                    <div className='formInput'>
                        <input placeholder='email' type='text' className='inptForm' />
                    </div>
                </div>
                <div className='form'>
                    Phone number
                    <div className='formInput'>
                        <input placeholder='phone Number' type='text' className='inptForm'/>
                    </div>
                </div>
            </div>
            </div>
            <div className='taText'>Message text</div>
            <div className='cuTextarea'>
              <textarea placeholder='Text a message...' className='ta' />
              
            </div>
            <div>
            <button className='contactUsBtn'>Send</button>
            </div>
            
        
        </div>
    );
}

export default ContactUs;