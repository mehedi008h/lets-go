"use client";
import { bg_images } from "@/constant/image";
import React, { useState } from "react";
import {
    BiCalendar,
    BiHeart,
    BiImage,
    BiLocationPlus,
    BiSolidStar,
    BiStar,
    BiVideo,
} from "react-icons/bi";
import { BsHeartFill, BsPeople } from "react-icons/bs";
import Divider from "../global/Divider";

const Tour = () => {
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const handleLikeToggle = () => {
        setIsLiked(!isLiked);
    };
    return (
        <div className="col-span-4 rounded-lg border-[1px] border-neutral-200 relative group">
            <div className="w-full h-72 rounded-t-lg overflow-hidden">
                <img
                    className="w-full h-72 rounded-t-lg object-cover group-hover:scale-105 transition duration-300"
                    src={bg_images.image4.src}
                    alt=""
                />
            </div>

            <div className="absolute top-0 w-full flex justify-between items-center px-4 py-2">
                <div className="flex items-center gap-2">
                    <div className="h-8 px-4 bg-neutral-100/10 rounded-full flex justify-center items-center gap-2 text-neutral-100 font-normal cursor-pointer backdrop-blur-md hover:bg-amber-900 transition-all duration-300">
                        <BiImage size={20} /> <span>5</span>
                    </div>
                    <div className="h-8 px-4 bg-neutral-100/10 rounded-full flex justify-center items-center cursor-pointer backdrop-blur-md hover:bg-amber-900 transition-all duration-300">
                        <BiVideo size={20} color="white" />
                    </div>
                </div>
                <div
                    onClick={handleLikeToggle}
                    className="h-10 w-10 bg-neutral-200/10 rounded-full flex justify-center items-center cursor-pointer backdrop-blur-md group/heart transition-all duration-300"
                >
                    <BiHeart
                        size={22}
                        color="white"
                        className={`group-hover/heart:hidden  ${
                            isLiked ? "hidden" : "block"
                        }`}
                    />
                    <BsHeartFill
                        size={20}
                        color="red"
                        className={`group-hover/heart:block  ${
                            isLiked ? "block" : "hidden"
                        }`}
                    />
                </div>
            </div>

            <div className="p-4">
                <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                        <BiSolidStar color="orange" size={20} />
                        <BiSolidStar color="orange" size={20} />
                        <BiSolidStar color="orange" size={20} />
                        <BiSolidStar color="orange" size={20} />
                        <BiStar color="orange" size={20} />
                    </div>
                    <span className="text-neutral-600 font-semibold">4.9</span>
                    <p className="text-neutral-600 font-sm">(1.327 rating)</p>
                </div>
                <h4 className="text-lg font-semibold text-neutral-600 mt-2 hover:text-amber-900 cursor-pointer">
                    Explore Dhaka Lalbag Fort
                </h4>

                <div className="my-2 flex items-center gap-3">
                    <div className="flex items-center gap-2 text-neutral-500 font-normal">
                        <BsPeople size={18} /> <span>5</span>
                    </div>

                    <div className="flex items-center gap-2 text-neutral-500 font-normal">
                        <BiCalendar size={18} /> <span>5</span>
                    </div>
                </div>

                <Divider className="w-full h-[1px] my-4 bg-neutral-300" />
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-neutral-500 font-normal">
                        <BiLocationPlus size={18} />
                        <span>Location</span>
                    </div>
                    <div className="text-2xl font-semibold text-orange-500">
                        $250
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tour;
