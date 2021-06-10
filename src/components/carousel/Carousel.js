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
            infiniteLoop={true}
            >
                <div>
                    <img src={Car1} className='sliderImg' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={Car2} className='sliderImg' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={Car3}  className='sliderImg' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
};

export default CarouselComponent
