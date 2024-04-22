import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import insta1 from '../resources/insta_files/1.jpg';
import insta2 from '../resources/insta_files/2.jpg';
import insta3 from '../resources/insta_files/3.jpg';
import insta4 from '../resources/insta_files/4.jpg';
import insta5 from '../resources/insta_files/5.jpg';
import "./MultiCarousel.css";

const MultiCarousel = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const images = [insta1, insta2, insta3, insta4, insta5];

    return (
        <div className="parent">
            <h2>Fique por dentro</h2>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
          >
            {images.map((imageUrl, index) => {
              return (
                <div className="slider" key={index}>
                  <img src={imageUrl} alt="movie" />
                </div>
              );
            })}
          </Carousel>
        </div>
      );
};

export default MultiCarousel;
