"use client";
import React from "react";
import SearchAction from "./SearchAction";
import NoiseBackground from "./NoiseBackground";

function Hero() {
    return (
        <div className="w-full min-h-screen">
            <NoiseBackground />

            <div className="absolute top-0 right-0 left-0 h-screen flex items-center justify-center z-30">
                <div className="text-center text-white">
                    <p className="text-5xl font-semibold font-satisfy text-neutral-50 -mb-8">
                        Explore the world
                    </p>
                    <h1 className="text-[180px] font-bold mb-4 mask-b-from-50% uppercase">
                        Nature
                    </h1>

                    <SearchAction />
                </div>
            </div>
        </div>
    );
}

export default Hero;
