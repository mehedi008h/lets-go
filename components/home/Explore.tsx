import React from "react";
import { BiSolidStar, BiStar } from "react-icons/bi";
import Divider from "../global/Divider";
import { PiPhone } from "react-icons/pi";

const Explore = () => {
    return (
        <div className="h-screen w-full explore flex justify-between relative">
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-neutral-900/50"></div>
            <div className="w-full z-50">
                <img
                    decoding="async"
                    width="1004"
                    height="1098"
                    src="https://globetrek.autodealwordpress.com/wp-content/uploads/2025/02/img-5-location.webp"
                    className="attachment-full size-full wp-image-3698"
                    alt=""
                    srcSet="https://globetrek.autodealwordpress.com/wp-content/uploads/2025/02/img-5-location.webp 1004w, https://globetrek.autodealwordpress.com/wp-content/uploads/2025/02/img-5-location-274x300.webp 274w, https://globetrek.autodealwordpress.com/wp-content/uploads/2025/02/img-5-location-936x1024.webp 936w, https://globetrek.autodealwordpress.com/wp-content/uploads/2025/02/img-5-location-768x840.webp 768w"
                    sizes="(max-width: 1004px) 100vw, 1004px"
                ></img>
            </div>
            <div className="w-full flex flex-col justify-center ps-10 z-50">
                {/* rating  */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <BiSolidStar color="yellow" size={20} />
                        <BiSolidStar color="yellow" size={20} />
                        <BiSolidStar color="yellow" size={20} />
                        <BiSolidStar color="yellow" size={20} />
                        <BiStar color="yellow" size={20} />
                    </div>
                    <span className="text-white font-semibold">4.9</span>
                    <p className="text-neutral-100 font-sm">(1.327 rating)</p>
                </div>

                <h4 className="text-6xl font-satisfy font-semibold text-white mt-12">
                    Explore Dhaka
                </h4>
                <h1 className="text-8xl font-poppins font-bold text-white">
                    Lalbag Fort
                </h1>

                <Divider className="w-[80%] h-[1px] my-12 bg-neutral-500" />

                <p className="text-neutral-300 font-poppins text-sm w-[80%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae assumenda suscipit rem, autem architecto deserunt
                    eligendi rerum odit consequuntur soluta qui, minima
                    molestiae ullam! Reprehenderit, qui deserunt repellendus
                    iste expedita dolorum praesentium repellat veniam! Dolores
                    libero deserunt sint optio vero?
                </p>

                <div className="flex items-center gap-8 mt-6">
                    <div>
                        <p className="text-neutral-400 font-normal">From</p>
                        <h2 className="text-2xl font-semibold text-white mt-4">
                            Lalbag Fort
                        </h2>
                    </div>
                    <Divider className="w-[1px] h-16 bg-neutral-500" />
                    <div>
                        <p className="text-neutral-400 font-normal">Person</p>
                        <h2 className="text-2xl font-semibold text-white mt-4">
                            4 Adult
                        </h2>
                    </div>
                    <Divider className="w-[1px] h-16 bg-neutral-500" />
                    <div>
                        <p className="text-neutral-400 font-normal">
                            3 day 2 nights
                        </p>
                        <h2 className="text-2xl font-semibold text-white mt-4">
                            $250
                        </h2>
                    </div>
                </div>

                <Divider className="w-[80%] h-[1px] my-12 bg-neutral-500" />
                <div className="flex items-center justify-between gap-4 w-[80%]">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-sky-500 flex justify-center items-center">
                            <PiPhone color="white" size={25} />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold">
                                Booking Number
                            </h3>
                            <p className="text-neutral-400 font-normal">
                                +880 123 456 7890
                            </p>
                        </div>
                    </div>
                    <button className="bg-sky-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-sky-600 transition duration-300 cursor-pointer">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Explore;
