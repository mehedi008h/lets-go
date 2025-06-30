import React from "react";

interface HeadingProps {
    title: string;
    subtitle?: string;
}

function Heading({ title, subtitle }: HeadingProps) {
    return (
        <div className="w-full text-center mb-5">
            <h2 className="text-4xl font-semibold text-neutral-800 font-satisfy">
                {title}
            </h2>
            {subtitle && (
                <p className="text-base text-neutral-600 mt-4 font-poppins font-normal">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

export default Heading;
