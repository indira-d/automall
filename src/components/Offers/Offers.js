import React from 'react';
import offerImg1 from '../../assets/offerr1.jpg'
import offerImg2 from '../../assets/offer2.jpg'
import offerImg3 from '../../assets/offer3.jpg'
import './Offers.css'
import warrantyImg from '../../assets/toyota-warranty.jpg'
import offer2Img from '../../assets/offer2Img.jpg'
import oldCarsImg from '../../assets/oldCarsImg.jpg'
import { Link } from 'react-router-dom';

function Offers(props) {
    return (
        <div className='oWrapper'>
           
            <h1 style={{textAlign: 'center', displa: 'block', margin: '20px'}}>Акции и специальные предложения</h1>
            <div className='text'>
            Мультибрендовый автосалон AutoMall предлагает широкий модельный ряд коммерческих и 
легковых автомобилей.у нас вы можете найти то что вам больше подходит В шоу-руме 
представлены знаменитые автомобильные бренды
            </div>
           
            <div className='offersContainer'>

            <div className='offer'>
                    <div className='imgWrap'>
                        <img className='offerImg' src={warrantyImg}  />
                    </div>
                    <div className='offerDiscription'>
                        <h3>Страхование авто</h3>
                        <p>Авто и спецтехника по выгодным условиям лизинга от банка</p>
                        <Link to='/offer1' style={{textDecoration: 'none'}}>
                            <button className='offerBtn' > See offer</button>
                        </Link>
                    </div>
                </div>

              

                <div className='offer'>
                    <div className='imgWrap'>
                         <img className='offerImg' src={offer2Img}  />
                    </div>
                    <div className='offerDiscription'>
                        <h3>Current offer</h3>
                        Авто и спецтехника по выгодным условиям лизинга от банка
                        <Link to='/offer2' style={{textDecoration: 'none'}}>
                            <button className='offerBtn'> See offer</button>
                        </Link>
                    </div>
                </div>

                <div className='offer'>
                    <div className='imgWrap'>
                        <img className='offerImg' src={oldCarsImg}  />
                    </div>
                    <div className='offerDiscription'>
                        <h3>Current offer</h3>
                        Авто и спецтехника по выгодным условиям лизинга от банка
                        <Link to='/offer3' style={{textDecoration: 'none'}}>
                            <button className='offerBtn'> See offer</button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Offers;