import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import photo1 from '../dogs/1.jpg';
import photo2 from '../dogs/2.jpg';
import photo3 from '../dogs/3.jpg';
import photo4 from '../dogs/4.jpg';
import photo5 from '../dogs/5.jpg';
import photo6 from '../dogs/6.jpg';
import photo7 from '../dogs/7.jpg';
import photo8 from '../dogs/8.jpg';
import photo9 from '../dogs/9.jpg';
import photo10 from '../dogs/10.jpg';
import catShirley from '../Cats/CatSher.JPG';
import './Cara.css'

const CarouselComponent = (props) => {
  return (
    <Carousel 
    width="80" infiniteLoop={true}>
      <div>
        <img src={catShirley} alt="Dog 1" />
      </div>
      <div>
        <img src={photo1} alt="Dog 1" />
      </div>
      <div>
        <img src={photo2} alt="Dog 2" />
      </div>
      <div>
        <img src={photo3} alt="Dog 3" />
      </div>
      <div>
        <img src={photo4} alt="Dog 4" />
      </div>
      <div>
        <img src={photo5} alt="Dog 5" />
      </div>
      <div>
        <img src={photo6} alt="Dog 6" />
      </div>
      <div>
        <img src={photo7} alt="Dog 7" />
      </div>
      <div>
        <img src={photo8} alt="Dog 8" />
      </div>
      <div>
        <img src={photo9} alt="Dog 9" />
      </div>
      <div>
        <img src={photo10} alt="Dog 10" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
