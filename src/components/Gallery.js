import React, { useState } from 'react';
import './Gallery.css';
import galeria1 from '../assets/galeria1.jpg';
import galeria2 from '../assets/galeria2.jpg';
import galeria3 from '../assets/galeria3.jpg';
import galeria4 from '../assets/galeria4.jpg';
import galeria5 from '../assets/galeria5.jpg';
import galeria6 from '../assets/galeria6.jpg';
import galeria7 from '../assets/galeria7.jpg';
import galeria8 from '../assets/galeria8.jpg';
import galeria9 from '../assets/galeria9.jpg';
import galeria10 from '../assets/galeria10.jpg';
import galeria11 from '../assets/galeria11.jpg';
import galeria12 from '../assets/galeria12.jpg';
import galeria13 from '../assets/galeria13.jpg';
import galeria14 from '../assets/galeria14.jpg';
import galeria15 from '../assets/galeria15.jpg';
import galeria16 from '../assets/galeria16.jpg';
import galeria17 from '../assets/galeria17.jpg';
import galeria18 from '../assets/galeria18.jpg';
import galeria19 from '../assets/galeria19.jpg';
import galeria20 from '../assets/galeria20.jpg';

const images = [
  galeria1, galeria2, galeria3, galeria4, galeria5, galeria6, galeria7, galeria8,
  galeria9, galeria10, galeria11, galeria12, galeria13, galeria14, galeria15, galeria16,
  galeria17, galeria18, galeria19, galeria20,
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="gallery-container">
      <div className="main-image-container">
        <img src={selectedImage} alt="Selected" className="main-image" />
      </div>
      <div className="thumbnails-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
