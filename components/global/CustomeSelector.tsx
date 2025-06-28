"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { BiUser } from "react-icons/bi";
import PeopleSelect from "../home/PeopleSelect";
import { CiEraser } from "react-icons/ci";

interface PeopleType {
    child: number;
    adult: number;
    youth: number;
}

interface CustomeSelectorProps {
    onSelect: (people: PeopleType) => void;
    selectedPeople?: number;
    label?: string;
}

const CustomeSelector: FC<CustomeSelectorProps> = ({
    onSelect,
    selectedPeople = 0,
    label = "Select",
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const modalBox = useRef<HTMLDivElement>(null);
    const [child, setChild] = useState<number>(0);
    const [adult, setAdult] = useState<number>(0);
    const [youth, setYouth] = useState<number>(0);

    // Toggle the dropdown menu
    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    const handleChildSelect = (option: string) => {
        if (option === "incress") {
            setChild((prev) => prev + 1);
        } else if (option === "decress") {
            setChild((prev) => (prev > 0 ? prev - 1 : 0));
        }
    };

    const handleAdultSelect = (option: string) => {
        if (option === "incress") {
            setAdult((prev) => prev + 1);
        } else if (option === "decress") {
            setAdult((prev) => (prev > 0 ? prev - 1 : 0));
        }
    };

    const handleYouthSelect = (option: string) => {
        if (option === "incress") {
            setYouth((prev) => prev + 1);
        } else if (option === "decress") {
            setYouth((prev) => (prev > 0 ? prev - 1 : 0));
        }
    };

    // Handle option selection
    const handleSelect = () => {
        onSelect({ child, adult, youth });
        setOpen(false);
    };

    // Reset all people counts
    const handleEraser = () => {
        setChild(0);
        setAdult(0);
        setYouth(0);
    };

    // Close modal when clicked outside of modal box
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalBox.current &&
                !modalBox.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside, true);

        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);
    return (
        <div className="text-start w-48">
            <label htmlFor="" className="text-white font-normal text-base mb-2">
                {label}
            </label>
            <div
                onClick={handleToggle}
                className="w-full mt-4 flex justify-between items-center gap-3 cursor-pointer"
            >
                <p className="text-sm text-neutral-400 font-normal">
                    {selectedPeople + " People" || "Guest 0"}
                </p>

                <BiUser color="#a1a1a1" />
            </div>

            {open && (
                <div
                    ref={modalBox}
                    className="absolute bg-neutral-800 w-48 rounded-lg mt-2 bottom-28 py-3 px-3"
                >
                    <PeopleSelect
                        label="Adult"
                        value={adult}
                        onTriggerd={handleAdultSelect}
                    />
                    <PeopleSelect
                        label="Youth"
                        value={youth}
                        onTriggerd={handleYouthSelect}
                    />
                    <PeopleSelect
                        label="Child"
                        value={child}
                        onTriggerd={handleChildSelect}
                    />

                    <div className="flex items-center gap-3 mt-4">
                        <button
                            onClick={handleEraser}
                            className="w-12 h-8 bg-neutral-600 hover:bg-neutral-700 transition-all duration-300 rounded-full flex justify-center items-center"
                        >
                            <CiEraser />
                        </button>
                        <button
                            onClick={handleSelect}
                            className="w-full px-4 py-1 bg-green-600 hover:bg-green-700 transition-all duration-300 rounded-md text-sm font-normal"
                        >
                            Apply
                        </button>
                    </div>

                    <div className="w-5 h-5 bg-neutral-800 absolute -bottom-2 rounded-tl-full  left-5  rotate-45 z-10"></div>
                </div>
            )}
        </div>
    );
};

export default CustomeSelector;
