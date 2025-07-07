import React from "react";
import Divider from "../global/Divider";
import { TbBrandPlanetscale } from "react-icons/tb";
import { BsFacebook, BsInstagram, BsMailbox, BsTwitter } from "react-icons/bs";
import { BiLocationPlus, BiRightArrow } from "react-icons/bi";
import { MdApps } from "react-icons/md";
import { IoCall, IoMapSharp } from "react-icons/io5";
import { FcCallback } from "react-icons/fc";

const Footer = () => {
    return (
        <div className="w-full pt-10 bg-black">
            <div className="w-[80%] mx-auto flex justify-between items-center mb-5">
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
                <div className="flex items-center gap-4">
                    <h5 className="text-white text-base font-semibold">
                        Follow us
                    </h5>
                    <ul className="flex gap-4">
                        <li className="h-10 w-10 rounded-full border-[1px] border-neutral-500 flex justify-center items-center cursor-pointer text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">
                            <BsFacebook />
                        </li>
                        <li className="h-10 w-10 rounded-full border-[1px] border-neutral-500 flex justify-center items-center cursor-pointer text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">
                            <BsInstagram />
                        </li>
                        <li className="h-10 w-10 rounded-full border-[1px] border-neutral-500 flex justify-center items-center cursor-pointer text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">
                            <BsTwitter />
                        </li>
                    </ul>
                </div>
            </div>
            <Divider className="w-full h-[1px] bg-neutral-800" />

            <div className="w-[80%] mx-auto grid grid-cols-12 justify-between items-start pt-8 pb-4">
                <div className="col-span-12 md:col-span-4 text-white">
                    <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-md border-[1px] text-neutral-500 flex justify-center items-center">
                            <IoMapSharp />
                        </div>
                        <div>
                            <p className="text-xs font-normal text-neutral-400">
                                Our office
                            </p>
                            <h5 className="text-sm font-normal text-neutral-200 mt-1">
                                1234 Street Name, City, State, 12345
                            </h5>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-md border-[1px] text-neutral-500 flex justify-center items-center">
                            <IoCall />
                        </div>
                        <div>
                            <p className="text-xs font-normal text-neutral-400">
                                Booking Number
                            </p>
                            <h5 className="text-sm font-normal text-neutral-200 mt-1">
                                +1 234 567 890
                            </h5>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-md border-[1px] text-neutral-500 flex justify-center items-center">
                            <BsMailbox />
                        </div>
                        <div>
                            <p className="text-xs font-normal text-neutral-400">
                                Need live help
                            </p>
                            <h5 className="text-sm font-normal text-neutral-200 mt-1">
                                letsgo@gmail.com
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-4 text-white">
                    <h5 className="text-lg font-semibold mb-2">Our Tour</h5>
                    <ul className="text-neutral-400">
                        {["Adventure", "Cultural", "Historical", "Nature"].map(
                            (tourType, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-1 w-fit text-sm font-normal mb-1 cursor-pointer hover:text-orange-500 transition-all duration-300"
                                >
                                    <BiRightArrow /> {tourType} Tours
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-4 text-white">
                    <h5 className="text-lg font-semibold mb-2">
                        Join our newsletter
                    </h5>
                    <p className="text-sm font-normal text-neutral-400 mb-1">
                        Sign up to receive the latest articles
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                        />
                        <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <Divider className="w-full h-[1px] bg-neutral-800" />
            <div className="w-[80%] mx-auto flex justify-between items-center py-4">
                <div className="text-white text-sm">
                    © {new Date().getFullYear()} Lets Go. All rights reserved.
                </div>
                <div>
                    <ul className="flex gap-2">
                        <li className="cursor-pointer text-white hover:text-orange-500 text-sm transition-all duration-300">
                            Privacy Policy
                        </li>
                        <Divider className="w-[1px] h-4 bg-neutral-800" />
                        <li className="cursor-pointer text-white hover:text-orange-500 text-sm transition-all duration-300">
                            Terms of Service
                        </li>
                        <Divider className="w-[1px] h-4 bg-neutral-800" />
                        <li className="cursor-pointer text-white hover:text-orange-500 text-sm transition-all duration-300">
                            Contact Us
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
