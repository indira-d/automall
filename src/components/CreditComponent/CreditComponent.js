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
            <div>
                <div>
                    <img src={creditImg} style={{width:'100%'}} />
                </div>
                <div className='credit'>

                
              <div className='halykWrapper'>
               
               <div>
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

                {/* <div>
                    <h3>Условия кредитования:</h3>
                    <div>✔Срок кредита до 5 лет</div>
                    <div>✔Сумма кредита от 1000$(эквивалент в сомах) до 100 000 $ (эквивалент в сомах)</div>
                    <div>✔Ставка в год - 12%</div>

                    <h3>Минимальный перечень документов:</h3>
                    <div>• Заявление</div>
                    <div>• Паспорт заявителя</div>
                    <div>• Документы, подтверждающие доходы Заявителя</div>
                    <div>Рассмотрение кредитной заявки – 3 рабочих дня.</div>
                </div> */}
                </div>
                </div>

            </div>
            <Credit />
            <Footer />
        </div>
    );
}

export default CreditComponent;