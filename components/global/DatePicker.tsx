"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCalendar } from "react-icons/bi";

interface DatePickerProps {
    onSelect: (date: Date | null) => void;
    selectedDate: Date | null;
    label?: string;
}

const DatePicker: FC<DatePickerProps> = ({
    onSelect,
    selectedDate,
    label = "Select",
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const modalBox = useRef<HTMLDivElement>(null);

    // Toggle the dropdown menu
    const handleToggle = () => {
        setOpen((prev) => !prev);
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
                    {selectedDate
                        ? selectedDate.toLocaleDateString()
                        : "Select Date"}
                </p>

                <BiCalendar color="#a1a1a1" />
            </div>
            {open && (
                <div ref={modalBox} className="absolute bottom-28">
                    <ReactDatePicker
                        selected={selectedDate}
                        onChange={(date: Date | null) => {
                            onSelect(date);
                            setOpen(false);
                        }}
                        inline
                    />
                    <div className="w-5 h-5 bg-white absolute bottom-0 rounded-tl-full  left-5  rotate-45 z-10"></div>
                </div>
            )}
        </div>
    );
};

export default DatePicker;
