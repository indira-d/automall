import React from 'react';
import './Footer.css'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';

function Footer(props) {
    return (
        <div className='footer'>

            <div className='footerItem'>
                <div className='footerImg'>
                    <LocationOnIcon />
                </div>
                <div className='footerText'>
                    <h3>Адрес</h3>
                    <div className='footerData'>Ош, ул. Касымбекова, 27/1</div>

                </div>
            </div>  

               <div className='footerItem'>
                <div className='footerImg'>
                    <LocalPhoneIcon/>
                </div>
                <div className='footerText'>
                    <h3>Телефон</h3>
                    <div className='footerData'>0551-11-88-83 0771-11-88-83 0705-11-88-83</div>

                </div>
            </div>  

               <div className='footerItem'>
                <div className='footerImg'>
                    <LocalPostOfficeIcon />
                </div>
                <div className='footerText'>
                    <h3>Email</h3>
                    <div className='footerData'>info@automall.kg</div>

                </div>
            </div>       
        </div>
    );
}

export default Footer;