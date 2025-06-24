import React from "react";
import { CiFilter, CiSearch } from "react-icons/ci";

function Hero() {
    return (
        <div className="w-full min-h-screen noise-bg">
            <div className="absolute top-0 right-0 left-0 h-screen flex items-center justify-center">
                <div className="text-center text-white">
                    <p className="text-5xl font-semibold font-satisfy text-neutral-50 -mb-8">
                        Explore the world
                    </p>
                    <h1 className="text-[180px] font-bold mb-4 mask-b-from-50% uppercase">
                        Nature
                    </h1>

                    <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-4">
                        <div className="h-fit w-fit bg-neutral-900/50 rounded-md backdrop-blur-sm flex items-center gap-4 px-7 py-4">
                            <div className="text-start">
                                <h3 className="text-white mb-3">Location</h3>
                                <input type="text" placeholder="location" />
                            </div>
                            <div className="h-10 w-[1px] bg-neutral-500"></div>

                            <div className="text-start">
                                <h3 className="text-white mb-3">Location</h3>
                                <input type="text" placeholder="location" />
                            </div>
                            <div className="h-10 w-[1px] bg-neutral-500"></div>

                            <div className="text-start">
                                <h3 className="text-white mb-3">Location</h3>
                                <input type="text" placeholder="location" />
                            </div>
                            <div className="h-10 w-[1px] bg-neutral-500"></div>

                            <div className="text-start">
                                <h3 className="text-white mb-3">Location</h3>
                                <input type="text" placeholder="location" />
                            </div>

                            <div className="h-12 w-12 rounded-md flex justify-center items-center border border-neutral-500 cursor-pointer">
                                <CiFilter size={25} />
                            </div>

                            <div className="h-12 w-12 rounded-md flex justify-center items-center bg-amber-400 hover:bg-amber-500 cursor-pointer transition-all duration-300">
                                <CiSearch size={25} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
