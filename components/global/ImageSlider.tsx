"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

interface ImageSliderProps {
    data: string[];
    interval?: number; // in ms
}

const ImageSlider: React.FC<ImageSliderProps> = ({ data, interval = 3000 }) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {data.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-32 object-contain"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ImageSlider;
