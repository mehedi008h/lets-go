"use client";
import React, { useState } from "react";
import { CiFilter, CiSearch } from "react-icons/ci";
import Divider from "../global/Divider";
import SelectInput from "../global/SelectInput";
import DatePicker from "../global/DatePicker";
import CustomeSelector from "../global/CustomeSelector";

const SearchAction = () => {
    const [location, setLocation] = useState<string | null>(null);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [people, setPeople] = useState<{
        child: number;
        adult: number;
        youth: number;
    }>({
        child: 0,
        adult: 0,
        youth: 0,
    });
    return (
        <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-4 z-50">
            <div className="h-fit w-fit bg-neutral-900/50 rounded-md backdrop-blur-sm flex items-center gap-4 px-7 py-4">
                {/* location  */}
                <SelectInput
                    label="Location"
                    onSelect={setLocation}
                    selectedOption={location}
                    options={["Option 1", "Option 2", "Option 3"]}
                />
                <Divider className="h-14 w-[1px] bg-neutral-500/50" />

                {/* tour type  */}
                <SelectInput
                    label="Tour Type"
                    onSelect={setLocation}
                    selectedOption={location}
                    options={[
                        "Beach",
                        "Camping",
                        "Cable car",
                        "Climbing",
                        "Discovery",
                        "Sailboat",
                    ]}
                />
                <Divider className="h-14 w-[1px] bg-neutral-500/50" />

                {/* date  */}
                <DatePicker
                    label="Date"
                    onSelect={setStartDate}
                    selectedDate={startDate}
                />
                <Divider className="h-14 w-[1px] bg-neutral-500/50" />
                {/* people  */}
                <CustomeSelector
                    label="People"
                    onSelect={(people) => setPeople(people)}
                    selectedPeople={people.adult + people.youth + people.child}
                />

                {/* Action Buttons, Filter and Search */}
                <div className="h-12 w-12 rounded-md flex justify-center items-center border border-neutral-500 cursor-pointer ms-3">
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
