import Explore from "@/components/home/Explore";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Tours from "@/components/home/Tours";
import TourType from "@/components/home/TourType";
import Whyus from "@/components/home/Whyus";

export default function Home() {
    return (
        <main>
            <Hero />
            <TourType />
            <Whyus />
            <Explore />
            <Tours />
            <Footer />
        </main>
    );
}
