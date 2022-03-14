import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Car1 from '../../assets/212.jpg'
import Car2 from '../../assets/13662.jpg'
import Car3 from '../../assets/j-s-cool2.jpg'
import './Carousel.css'


class CarouselComponent extends Component {
    render() {
        return (
            <Carousel autoPlay={true} interval={3000} showThumbs={false}
            stopOnHover={false} transitionTime={0.5} dynamicHeight={false}
            infiniteLoop={true}>
                <div class="video-wrapper">
                    <video className='videoTag' autoPlay loop muted><source src='../bmw.mp4' type='video/mp4' /></video>
                    <p class="movie-text">Automall мультибрендовый автосалoн</p>
                    <div>
                            <p class="movie-slogan">В нашем салоне вы можете приобрести машину  вашей мечты</p>
                        <p class="movie-contacts"><b>Контакты:</b> +996552-22-88-84; +996-551-11-88-83 <br/>Пн-Вс с 09.00 до 18.00</p>
                    </div>
                   
                    
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <img src={Car1} className='movie-text' />
                    <img src={Car1} className='movie-text' />
                    <img src={Car1} className='movie-text' />
                    <img src={Car1} className='movie-text' />
                    <img src={Car1} className='movie-text' /> */}
                </div>
                
                {/* <div>
                    <img src={Car1} className='sliderImg' />
                    <p className="legend">Legend 1</p>
                </div>*/}
            </Carousel>
        );
    }
};

export default CarouselComponent
