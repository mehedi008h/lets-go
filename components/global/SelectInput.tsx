"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface SelectInputProps {
    options: string[];
    onSelect: (option: string) => void;
    selectedOption?: string | null;
    label?: string;
}

const SelectInput: FC<SelectInputProps> = ({
    options,
    onSelect,
    selectedOption,
    label = "Select",
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const modalBox = useRef<HTMLDivElement>(null);

    // Toggle the dropdown menu
    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    // Handle option selection
    const handleSelect = (option: string) => {
        onSelect(option);
        setOpen(false);
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
                className=" w-full mt-4 flex justify-between items-center gap-3 cursor-pointer"
            >
                <p className="text-sm text-neutral-400 font-normal">
                    {selectedOption || "Choose an option"}
                </p>
                {open ? (
                    <IoIosArrowUp color="#a1a1a1" />
                ) : (
                    <IoIosArrowDown color="#a1a1a1" />
                )}
            </div>

            {open && (
                <div
                    ref={modalBox}
                    className="absolute bg-neutral-800 w-48 rounded-lg mt-2 bottom-28"
                >
                    <ul className="p-2">
                        {options.map((option) => (
                            <li
                                key={option}
                                onClick={() => handleSelect(option)}
                                className="p-2 hover:bg-neutral-700 cursor-pointer rounded-md text-sm text-white"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>

                    <div className="w-5 h-5 bg-neutral-800 absolute -bottom-2 rounded-tl-full  left-5  rotate-45 z-10"></div>
                </div>
            )}
        </div>
    );
};

export default SelectInput;
