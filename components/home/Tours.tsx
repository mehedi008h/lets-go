"use client";

import React, { useState } from "react";
import Heading from "../global/Heading";
import Tour from "./Tour";
import { tourData } from "@/constant/data";

const Tours = () => {
    const [selectedTourType, setSelectedTourType] = useState<string>("All");

    const handleTourTypeChange = (tourType: string) => {
        setSelectedTourType(tourType);
    };
    return (
        <div className="h-screen w-full bg-white py-10">
            <Heading
                title="Our popular tours"
                subtitle="Explore the tours chosen and recommended by a multitude of travelers."
            />

            <div className="w-full flex justify-center items-center gap-4 flex-wrap mt-10">
                {[
                    "All",
                    "Adventure",
                    "Cultural",
                    "Historical",
                    "Nature",
                    "Caple car",
                    "Sailboat",
                    "Hiking",
                ].map((tourType, index) => (
                    <div
                        onClick={() => handleTourTypeChange(tourType)}
                        className={`px-4 py-2 w-fit rounded-full border-[1px] border-neutral-200 text-neutral-600 font-semibold cursor-pointer hover:bg-sky-500 hover:text-white hover:border-sky-500 transition duration-300 ${
                            selectedTourType === tourType
                                ? "bg-sky-500 text-white border-sky-500"
                                : "bg-white"
                        }`}
                        key={index}
                    >
                        {tourType}
                    </div>
                ))}
            </div>

            <div className="w-[80%] mx-auto mt-10 grid grid-cols-12 gap-5">
                {tourData
                    .filter(
                        (item) =>
                            item.category === selectedTourType ||
                            selectedTourType === "All"
                    )
                    .map((tour) => (
                        <Tour
                            key={tour.id}
                            title={tour.title}
                            image={tour.image}
                            price={tour.price}
                            rating={tour.rating}
                            reviews={tour.reviews}
                            duration={tour.duration}
                            people={tour.people}
                            location={tour.location}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Tours;
