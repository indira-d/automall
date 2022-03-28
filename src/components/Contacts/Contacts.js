import React from 'react';
import Menu from '../Menu/Menu';
import './Contacts.css'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice'; 

import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import AlarmIcon from '@material-ui/icons/Alarm';
import AlarmOffIcon from '@material-ui/icons/AlarmOff';



function Contacts(props) {
    return (
        <div >
            <Menu />
            <div>
                <iframe style={{width: '100%', height: '400px', loading: 'lazy'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.8626362669393!2d72.80412315080908!3d40.56671057924668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bda961888c4c65%3A0xa5a40bb283232068!2zMjcsIDEg0YPQu9C40YbQsCDQmtCw0YHRi9C80LHQtdC60L7QstCwLCBPc2g!5e0!3m2!1sen!2skg!4v1623148618037!5m2!1sen!2skg"></iframe>
            </div>
           <div  className='text'>


            <div className='workHours'>
               <h2>График работы: </h2>
                 <div className='contactsItem'>
                    <div><AlarmIcon /></div>
                    <div style={{width: '150px'}}>Время работы: </div>
                    <div style={{width: '150px'}}> <strong>с 09.00 до 18.00</strong></div>
                </div>
                <div className='contactsItem'>
                    <div><AlarmOffIcon /></div>
                    <div >Без выходных </div>
                  

                </div>
                <div className='contactsItem'>
                    <div><PauseCircleOutlineIcon /></div>
                    <div style={{width: '150px'}}>Без перерыва  </div>
     
                </div>
            </div>
            


          
            <div className='contactsInfo'>
                <h2>Контакты:</h2>
                <div className='contactsItem'>
                    <div><LocationOnIcon /></div>
                    <div style={{width: '100px'}}>Адрес:  </div>
                    <div style={{width: '300px'}}> <strong>Ош, ул. Касымбекова, 27/1</strong></div>
               </div>
                <div className='contactsItem'>
                    <div><LocalPhoneIcon /></div>
                    <div style={{width: '100px'}}>Телефон:  </div>
                    <div style={{width: '300px'}}> <strong>0(551) 11-88-83  0(771) 11-88-83  0(705) 11-88-83</strong></div>

                </div>
                <div className='contactsItem'>
                    <div><LocalPostOfficeIcon /></div>
                    <div style={{width: '100px'}}>Email:  </div>
                    <div style={{width: '300px'}}> <strong>info@automall.kg</strong></div>
                </div>
                </div>
            </div>
            </div>
    );
}

export default Contacts;