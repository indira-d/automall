import React from 'react';
import offerImg1 from '../../assets/offerr1.jpg'
import offerImg2 from '../../assets/offer2.jpg'
import offerImg3 from '../../assets/offer3.jpg'
import './Offers.css'

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
                        <img className='offerImg' src={offerImg1}  />
                    </div>
                    <div className='offerDiscription'>
                        <h3>Current offer</h3>
                        Авто и спецтехника по выгодным условиям лизинга от банка
                        <div>
                            <button className='offerBtn'> See offer</button>
                        </div>
                    </div>
                </div>

              

                <div className='offer'>
                    <div className='imgWrap'>
                         <img className='offerImg' src={offerImg2}  />
                    </div>
                    <div className='offerDiscription'>
                        <h3>Current offer</h3>
                        Авто и спецтехника по выгодным условиям лизинга от банка
                        <div>
                            <button className='offerBtn'> See offer</button>
                        </div>
                    </div>
                </div>

                <div className='offer'>
                    <div className='imgWrap'>
                        <img className='offerImg' src={offerImg3}  />
                    </div>
                    <div className='offerDiscription'>
                        <h3>Current offer</h3>
                        Авто и спецтехника по выгодным условиям лизинга от банка
                        <div>
                            <button className='offerBtn'> See offer</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Offers;