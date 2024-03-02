import React, { useState, useEffect } from 'react';
import image1 from '../../assets/images/hero-image-01.jpg';
import image2 from '../../assets/images/hero-image-02.jpg';
import image3 from '../../assets/images/hero-image-03.jpg';

const images = [
    image1,
    image2,
    image3
];

function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mx-auto px-4 sm:px-6 relative bghero-image h-screen" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
            <div className="absolute inset-x-0 bottom-0 px-5 sm:py-16 py-8 flex flex-col items-center text-center">
                <h1 className="text-white mb-4 text-5xl" data-aos="fade-up">Landing page for the task</h1>
                <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">This landing page works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="flex flex-col sm:flex-row justify-center items-center">
                        <div data-aos="fade-up" data-aos-delay="400" className="m-2">
                            <a className="btn btn-primary min-w-[150px]" href="#0">Start free trial</a>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="600" className="m-2">
                            <a className="btn btn-secondary min-w-[150px]" href="#0">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Hero;
