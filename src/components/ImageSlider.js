import React from 'react'
import Slider from "react-slick";


const ImageSlider = () => {
    var settings = {
      className: "center",
      centerMode: true,
        // dots: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear"
      };
      return (
        <Slider {...settings}>
          <div>
            <img src='https://static.wixstatic.com/media/65441d_fb5580c4289243c0a46fde2b29769a71~mv2.jpg/v1/fill/w_1004,h_558,al_c,q_85,usm_0.66_1.00_0.01/65441d_fb5580c4289243c0a46fde2b29769a71~mv2.jpg' style={{objectFit:"fill"}}/>
          </div>
          <div>
          <img src='https://static.wixstatic.com/media/65441d_b748fffb99a840ae839dd28b0bab7c3d~mv2.png/v1/fill/w_838,h_558,al_c,q_85,usm_0.66_1.00_0.01/65441d_b748fffb99a840ae839dd28b0bab7c3d~mv2.png'/>
          </div>
          <div>
          <img src='https://static.wixstatic.com/media/65441d_73aecc4d7139411a9c23f7ce5978a5a7.jpg/v1/fill/w_735,h_558,al_c,q_85,usm_0.66_1.00_0.01/65441d_73aecc4d7139411a9c23f7ce5978a5a7.jpg'/>
          </div>
          <div>
          <img src='https://static.wixstatic.com/media/65441d_35aeec3e51b0450a92f9812a8b0fd275.jpg/v1/fill/w_841,h_558,al_c,q_85,usm_0.66_1.00_0.01/65441d_35aeec3e51b0450a92f9812a8b0fd275.jpg'/>
          </div>
          <div>
          <img src='https://static.wixstatic.com/media/65441d_5fe25835cdb14d6d8ac2ea0b755e185c~mv2.jpg/v1/fill/w_992,h_558,al_c,q_85,usm_0.66_1.00_0.01/65441d_5fe25835cdb14d6d8ac2ea0b755e185c~mv2.jpg'/>
          </div>
        </Slider>
      );
      }
export default ImageSlider