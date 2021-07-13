import React from 'react';
import Footer from '../../Footer/Footer';
import Menu from '../../Menu/Menu';
import carWarranty from '../../../assets/toyota-warranty.jpg'
import './Offer1.css'

function Offer1(props) {
	return (
		<div>
			<Menu />
			<div>
				<img src={carWarranty} className='offer1Img'/>
			</div>
			<h1 style={{textAlign: 'center', margin: '50px'}}>TOYOTA СТРАХОВАНИЕ</h1>

			<div className='offer1-desc'>
				 <div>TOYOTA СТРАХОВАНИЕ -
ЭТО ОЧЕНЬ ЛЕГКО И ПРОСТО, МЫ ВСЕ СДЕЛАЕМ ЗА ВАС.👌</div>

				<div>
					<p>Если вы повредили свой автомобиль, Тойота Центр Бишкек берет на себя решение всех страховых случаев.</p>

<p>Вам не нужно приезжать в страховую компанию — мы сделаем это за вас.</p>
<p>Компетентные сотрудники сами подготовят документы, организуют получение выплат и ремонт Вашего автомобиля.

<p>👉Вы забираете автомобиль уже готовым к эксплуатации.</p>

</p>

	<p>
Выбирайте страховой продукт, заключайте договор страхования и ваш автомобиль уже будет под надежной защитой.</p>
<p>Получить подробную консультацию вы можете по телефонам:</p>
<p><strong>0 (552) 22-88-84</strong></p>
<p><strong>0 (551) 11-88-83</strong></p>

</div>







			</div>
		
			<Footer />
		</div>
	);
}

export default Offer1;