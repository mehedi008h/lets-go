import React from "react";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { TbBrandPlanetscale } from "react-icons/tb";

const Navbar = () => {
    return (
        <div className="absolute top-0 right-0 left-0 h-16  flex items-center justify-between px-10 z-50">
            {/* logo  */}
            <div className="flex items-center gap-2">
                <TbBrandPlanetscale size={50} color="white" />
                <div>
                    <h3 className="font-semibold text-xl text-white uppercase">
                        Let's Go
                    </h3>
                    <p className="text-sm font-normal text-neutral-50">
                        Explore New Land
                    </p>
                </div>
            </div>

            {/* link  */}
            <div className="flex items-center gap-3 border px-3 py-2 rounded-md border-neutral-300">
                {["Home", "About", "Services", "Contact"].map((item, index) => (
                    <h5
                        key={index}
                        className="text-white font-normal text-base hover:text-neutral-200 cursor-pointer"
                    >
                        {item}
                    </h5>
                ))}
            </div>

            {/* button  */}
            <div className="flex items-center gap-4">
                <IoIosSearch color="white" size={25} />
                <div className="h-5 w-[1px] bg-white"></div>
                <IoIosHeartEmpty color="white" size={25} />
                <div className="h-5 w-[1px] bg-white"></div>
                <div className="flex items-center gap-2">
                    <IoPersonOutline color="white" size={22} />
                    <h5 className="font-normal text-lg text-white">Login</h5>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
