"use client";
import React, { useState } from "react";
import { CiFilter, CiSearch } from "react-icons/ci";
import Divider from "../global/Divider";
import SelectInput from "../global/SelectInput";

const SearchAction = () => {
    const [location, setLocation] = useState<string | null>(null);
    return (
        <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-4">
            <div className="h-fit w-fit bg-neutral-900/50 rounded-md backdrop-blur-sm flex items-center gap-4 px-7 py-4">
                <SelectInput
                    label="Location"
                    onSelect={setLocation}
                    selectedOption={location}
                    options={["Option 1", "Option 2", "Option 3"]}
                />
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

                <Divider className="h-10 w-[1px] bg-neutral-500" />

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
    );
};

export default SearchAction;
