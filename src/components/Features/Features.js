import React from 'react';
import './Features.css'
import BuildIcon from '@material-ui/icons/Build';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ExtensionIcon from '@material-ui/icons/Extension';

import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';

function Features(props) {
    return (
        <div className='featuresContainer'>
            <div  className='featuresItem'>
                <div className='fIcons'>
                    <MonetizationOnIcon />
                </div>
                
                <h2>Выгодно</h2>
                <div className='featuresDescription'>
                         Авто и спецтехника по выгодным условиям лизинга от банка
                </div>
            </div>
            <div  className='featuresItem'>
                <div className='fIcons'>
                    <ExtensionIcon />
                </div>
                <h2>Универсально</h2>
                <div className='featuresDescription'>
                    Любая надстройка коммерческой техники для решения любых бизнес-задач
                </div>
            </div>
            <div  className='featuresItem'>
            <div className='fIcons'>
               <BuildIcon />
               </div>
                <h2>Сервис</h2>
                <div className='featuresDescription'>
                Комплексное послепродажное обслуживание легковых автомобилей и коммерческой техники
                </div>
            </div>
            <div  className='featuresItem'>
                <div className='fIcons'>
                     <DirectionsCarIcon />
                </div>
                <h2>Диллерство</h2>
                <div className='featuresDescription'>
                Гарантия от заводов-производителей и только оригинальные запчасти
                </div>
            </div>
        </div>
    );
}

export default Features;