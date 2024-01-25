import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrousel.css'; // Importa el archivo CSS

import js from '../../assets/carrousel/js.jpg';
import css from '../../assets/carrousel/css.png';
import html from '../../assets/carrousel/html.png';
import git from '../../assets/carrousel/git.png';
import angular from '../../assets/carrousel/angular.png';
import reactImage from '../../assets/carrousel/react.png';
import node from '../../assets/carrousel/node.png';
import python from '../../assets/carrousel/python.png';
import fastapi from '../../assets/carrousel/fastapi.png';

const Carrousel = () => {
    const images = [js, css, html, git, angular, reactImage, node, python, fastapi];
    const repetitions = Math.ceil(6 / images.length);
    const repeatedImages = Array.from({ length: repetitions }, () => images).flat();
  
    const settings = {
      dots: false,
      infinite: true, 
      speed: 5000,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      arrows: false, 
      responsive: [
        {
          breakpoint: 768, // Puedes ajustar este punto de quiebre según tus necesidades
          settings: {
            slidesToShow: 3, // Número de diapositivas en dispositivos móviles
          }
        },
      ],
    };
  
    return (
      <div className="carrousel">
        <Slider {...settings}>
          {repeatedImages.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default Carrousel;