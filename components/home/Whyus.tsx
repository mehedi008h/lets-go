import React from "react";
import Heading from "../global/Heading";
import { partners } from "@/constant/image";
import { ServiceCard } from "./ServiceCard";
import TravelAgency from "@/svg/TravelAgency";
import Team from "@/svg/Team";
import Price from "@/svg/Price";
import Divider from "../global/Divider";
import Exprience from "@/svg/Exprience";
import ImageSlider from "../global/ImageSlider";

const Whyus = () => {
    return (
        <div className="h-screen w-full py-10">
            <Heading
                title="Why choose Let's go"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet quam et diam bibendum"
            />
            <div className="w-full flex justify-center items-center gap-10 flex-wrap mt-10">
                <ServiceCard
                    icon={<TravelAgency />}
                    title="Best Travel Agents"
                    description="Choose us, and you'll enjoy exclusive offers and 24/7 dedicated customer service"
                />
                <ServiceCard
                    icon={<Team />}
                    title="Professional team"
                    description="With a professional team, we are committed to bringing you perfect vacations."
                />
                <ServiceCard
                    icon={<Exprience />}
                    title="New experience"
                    description="We turn your travel dreams into reality with unforgettable and safe experiences"
                />
                <ServiceCard
                    icon={<Price />}
                    title="Price and quality"
                    description="Explore the world with us on unique journeys, competitive prices, and 5-star service"
                />
            </div>

            <Divider className="w-[80%] mx-auto h-[1px] my-10 bg-neutral-300" />

            <div className="w-[80%] mx-auto">
                <ImageSlider
                    data={partners.map((partner) => partner.src)}
                    interval={5000}
                />
            </div>
        </div>
    );
};

export default Whyus;
