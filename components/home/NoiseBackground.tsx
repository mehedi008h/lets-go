import React, { useEffect, useState } from "react";

import image1 from "../../public/images/hero-bg (1).jpg";
import image2 from "../../public/images/hero-bg (2).jpg";
import image3 from "../../public/images/hero-bg (3).jpg";
import image4 from "../../public/images/hero-bg (4).jpg";
import {
    HiOutlineArrowNarrowLeft,
    HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const NoiseBackground = () => {
    const [currentImage, setCurrentImage] = useState(image2);
    const images = [image1, image2, image3, image4];

    // handle next image changes
    const handleNextImage = () => {
        const currentIndex = images.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentImage(images[nextIndex]);
    };

    // handle previous image changes
    const handlePrevImage = () => {
        const currentIndex = images.indexOf(currentImage);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentImage(images[prevIndex]);
    };

    // handle keydown events for next and previous image changes
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") {
            handleNextImage();
        } else if (event.key === "ArrowLeft") {
            handlePrevImage();
        }
    };

    // useEffect to add and remove event listeners for keydown events
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentImage]);

    // useEffect to automatically change the image every 5 seconds
    useEffect(() => {
        const interval = setInterval(handleNextImage, 5000);
        return () => clearInterval(interval);
    }, [currentImage]);
    return (
        <div className="absolute top-0 right-0 left-0 bottom-0 transition-all duration-500">
            <img
                src={currentImage.src}
                alt="Hero Background"
                className="w-full h-full object-cover absolute inset-0 opacity-100 transition-opacity duration-500 z-10"
            />
            <div className="absolute top-0 right-0 left-0 bottom-0 h-screen flex justify-between items-center px-20 z-50">
                <div
                    onClick={handlePrevImage}
                    className="w-18 h-18 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full flex justify-center items-center cursor-pointer transation-all duration-300 ease-in-out"
                >
                    <HiOutlineArrowNarrowLeft
                        size={30}
                        color="white"
                        className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                </div>
                <div
                    onClick={handleNextImage}
                    className="w-18 h-18 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full flex justify-center items-center cursor-pointer transation-all duration-300 ease-in-out"
                >
                    <HiOutlineArrowNarrowRight
                        size={30}
                        color="white"
                        className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default NoiseBackground;
