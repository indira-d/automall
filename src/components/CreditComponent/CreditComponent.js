import React from 'react';
import Credit from '../Credit/Credit';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import creditImg from '../../assets/creditbanner.jpg'
import './CreditComponent.css'
import creditHalykImg from '../../assets/автокредит.jpg'

function CreditComponent(props) {
    return (
        <div>
            <Menu />
            <div className='about-credit'>
                <div>
                    <img src={creditImg} style={{width:'100%'}} />
                </div>
             

                 <h1 style={{textAlign:'center'}}> Автокредитование</h1>
              <div className='halykWrapper'>
                 
               
                <div className='halyk'>
                        <div>
                        Мечтаете об автомобиле? Зачем ждать? компания "AUTOMALL"  предлагает приблизить момент покупки автомобиля, и приобрести понравивший автомобиль через ОАО «Халык Банк Кыргызстан» по льготным условиям!
                        </div>
                    <div>

                Более подробную информацию предоставят наши специалисты Отдела продаж.

                Звоните и приходите к нам в дилерский центр.
                <strong><div> 0 (552) 22-88-84; </div>
                    <div>0 (551) 11-88-83
                   </div> </strong>
                </div>
                </div>
                <div>
                    <img src={creditHalykImg} className='halykImg'/>
                </div>
                </div>
                </div>
            <Credit />
            <Footer />
        </div>
    );
}

export default CreditComponent;