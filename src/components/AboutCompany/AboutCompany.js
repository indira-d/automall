import React from 'react';
import Menu from '../Menu/Menu';
import Banner from '../../assets/banner.jpg'
import './AboutCompany.css'
import Footer from '../Footer/Footer';
import saveMany  from '../../assets/SaveMoneyforCar-1457649384-1.jpg'
import service from '../../assets/service.jpg'
import warranty from '../../assets/GettyImages-861063644-copy.jpg'
import stares from '../../assets/шины.jpg'
import BuildIcon from '@material-ui/icons/Build';

function AboutCompany(props) {
    return (
        <div>
            <Menu />
            <div>
                <img src={Banner}  className='bannerImg'/>
                <div className='bannerText'> AUTOMALL COMPANY</div>
            </div>
            <div className='AboutUsDescription'>
                <div>
                Компания "AUTOMALL" начинает свою историю с 2004 года. Компания успешно работает и развивает свои продукты и услуги по комплексному обслуживанию автомобилей на рынке Кыргызстана.
                </div>
      
                <h2 style={{margin: '50px'}}>Миссия компании:</h2>
                <div >
                {/* <div>
                    <img src={warranty} className='aboutImg'/>
                </div> */}
                <div>
                Мы передовая команда профессионалов, нацеленная на удовлетворение потребностей наших друзей и партнеров, качественными автомобилями и сервисом, достойных их.
                </div>
                <div>
                Мы рады сообщить всем нашим постоянным и новым Клиентам, что с 27 апреля 2012 г. наша компания стала официальным дилером компании TOYOTA Motor Corporation в Кыргызстане.
                </div>
                <div style={{margin: '20px 10px '}}>
                Мы предлагаем не просто сервис и ремонт ваших автомобилей, мы предлагаем нашим Клиентам систему 3S: Sales, Service и Spares.
                </div>
                <div style={{display: 'flex'}}>
                <div  className='s' >
                    <img src={saveMany}  className='aboutImg'/>
                    <div>
                        <strong>Sales</strong> - продажа новых автомобилей от разных производителей</div>
                </div>

                <div className='s'  >
                    <img src={service} className='aboutImg'/>
                <div>
                <strong>Service</strong> - качественный сервис на профессиональном оборудовании
                </div>
                </div> 
                <div className='s' >
                    <img src={stares} className='aboutImg'/>           
                <div><strong>Spares</strong> - реализация оригинальных запасных частей, аксессуаров, масел и жидкостей</div>
                 </div>
              </div>
              
                </div>
                <div>
                В дополнение к нашему пакету по сервису мы предлагаем гибкие условия оплаты, дополнительные скидки на услуги и предоставление необходимой отчетности для Вашего удобства.
                </div>
                <div>Мы предлагаем нашим Клиентам следующий пакет услуг</div>
                <h2>Услуги, сервис:</h2>
                <div>✔ диагностика и ремонт ходовой части</div>
                <div>✔ диагностика и ремонт АКПП</div>
                <div>✔ диагностика и ремонт двигателя</div>
                <div>✔ диагностика и ремонт электрооборудования</div>
                <div>✔ диагностика и ремонт развала-схождения</div>
                <div>✔ ремонт глушителей по технологии CARLSSON</div>
                <div>✔ чистка форсунок системой WYNNS</div>
                <div>✔ диагностика, ремонт и обслуживание авто-кондиционеров</div>
                <div>✔ монтаж шин, балансировка, прокат дисков</div>
                <div>✔ услуги токарного цеха</div>
                <div>✔ контроль и замена всех видов специальных жидкостей и автомасел возможностью промывки систем</div>

        
        </div>
        <Footer />
        </div>
    );
}

export default AboutCompany;