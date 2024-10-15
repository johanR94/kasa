/* eslint-disable react/prop-types */
import { useState } from 'react';
import arrowRight from '../../assets/arrows/arrowRight.png';
import arrowLeft from '../../assets/arrows/arrowLeft.png';

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };

    function HideCarouselCounter(images) {
        return images.length <= 1 ? 'none' : '';
      }
    if (images.length === 0) {
        return <div>No images available</div>;
    }

    return (
        <section className='carousel'>
            <img 
                src={images[currentImageIndex]} 
                className='carousel_picture' 
                alt={`Image ${currentImageIndex + 1}`}
            />
            <div className='carousel_arrows arrows'style={{  display: HideCarouselCounter(images)}} >
                <img 
                    src={arrowLeft} 
                    alt="Image précédente" 
                    className='arrow_left' 
                    onClick={handlePrevImage} 
                />
                <img 
                    src={arrowRight} 
                    alt="Image suivante" 
                    className='arrow_right' 
                    onClick={handleNextImage} 
                />
            </div>
            <div className='carousel_counter' style={{  display: HideCarouselCounter(images)}}>
                {currentImageIndex + 1} / {images.length}
            </div>
        </section>
    );
};

export default Carousel;
