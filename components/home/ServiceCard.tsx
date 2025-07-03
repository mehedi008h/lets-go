import TravelAgency from "@/svg/TravelAgency";
import React, { FC, ReactNode } from "react";

interface ServiceCardProps {
    icon?: ReactNode;
    title?: string;
    description?: string;
}

export const ServiceCard: FC<ServiceCardProps> = ({
    icon,
    title,
    description,
}) => {
    return (
        <div className="w-64 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 ease-in-out p-6 bg-white rounded-lg group">
            <div className="w-24 h-24 bg-sky-50 rounded-md flex items-center justify-center group-hover:bg-sky-500 transition-all duration-300 ease-in-out">
                {icon || <TravelAgency />}
            </div>

            <div className="mt-8 text-center">
                <h2 className="text-xl font-semibold mb-2 text-neutral-700">
                    {title || "Travel Agent"}
                </h2>
                <p className="text-neutral-500 text-sm">
                    {description ||
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet quam et diam bibendum."}
                </p>
            </div>
        </div>
    );
};
