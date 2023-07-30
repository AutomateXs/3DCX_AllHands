import React from 'react'
import Slider from "react-slick";
import { IMAGE_URL } from '../utils/constants';
import testimonialData from '../data/testimonials';

const Testimonials = () => {
    let settings = {
        className: "center",
        centerMode: true,
        // dots: true,
        infinite: true,
        speed: 2500,
        autoplaySpeed: 2500,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        pauseOnHover: true,
        cssEase: "linear",
        swipeToSlide: true,
    };
    return (
        <Slider {...settings}>
            {
                testimonialData.map(data => <div>
                    <img src={IMAGE_URL + data.imageSrc} />
                </div>)
            }
        </Slider>
    );
}


export default Testimonials