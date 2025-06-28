import React, { FC } from "react";

interface PeopleSelectProps {
    label: string;
    onTriggerd: (option: string) => void;
    value: number | null;
}

const PeopleSelect: FC<PeopleSelectProps> = ({ label, onTriggerd, value }) => {
    return (
        <div className="flex items-center justify-between mb-2">
            <p className="text-white font-normal text-sm">
                <span className="mr-2">{value}</span> {label}
            </p>
            <div>
                <button
                    onClick={() => onTriggerd("incress")}
                    className="px-3 py-1 bg-neutral-600 hover:bg-neutral-700 rounded-l-full"
                >
                    +
                </button>
                <button
                    onClick={() => onTriggerd("decress")}
                    className="px-3 py-1 bg-neutral-600 hover:bg-neutral-700 rounded-r-full"
                >
                    -
                </button>
            </div>
        </div>
    );
};

export default PeopleSelect;
