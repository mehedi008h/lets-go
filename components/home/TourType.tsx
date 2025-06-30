import React from "react";
import Heading from "../global/Heading";
import image1 from "../../public/images/hero-bg (1).jpg";
import image2 from "../../public/images/hero-bg (2).jpg";
import image3 from "../../public/images/hero-bg (3).jpg";
import image4 from "../../public/images/hero-bg (4).jpg";

let data = [
    {
        type: "Beach",
        image: image1,
        count: 5,
    },
    {
        type: "Camping",
        image: image2,
        count: 7,
    },
    {
        type: "Cable car",
        image: image3,
        count: 2,
    },
    {
        type: "Climbing",
        image: image4,
        count: 17,
    },
    {
        type: "Discovery",
        image: image2,
        count: 7,
    },
    {
        type: "Sailboat",
        image: image1,
        count: 10,
    },
];

function TourType() {
    return (
        <div className="h-full w-full bg-neutral-100 py-10">
            <Heading
                title="Types of tours"
                subtitle=" Explore the tours chosen and recommended by a multitude of
                travelers."
            />

            <div className="w-full flex items-center justify-center py-5">
                <div className="flex flex-row flex-wrap items-center justify-center gap-8 px-4 w-[80%] mx-auto">
                    {data.map((tour, index) => (
                        <div
                            key={index}
                            className="h-80 w-52 text-center group"
                        >
                            <img
                                src={tour.image.src}
                                alt={tour.type}
                                className="h-64 w-full rounded-lg object-cover shadow-md hover:shadow-lg duration-300 group-hover:scale-105 transform transition-all "
                            />

                            <h3 className="text-lg font-semibold text-neutral-700 mt-5">
                                {tour.type}
                            </h3>
                            <p className="text-base font-normal text-neutral-500">
                                {tour.count} tour
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TourType;
