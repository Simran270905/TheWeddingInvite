import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Schedule from "../components/Schedule";
import LoveStory from "../components/LoveStory";
import TravelStay from "../components/TravelStay";
import ClosingInvite from "../components/ClosingInvite";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <section className="w-full  bg-[#faf7f2]">

      <Navbar />
      <div className="pt-24 "></div>

      <HeroSection />
      

      <Schedule />
      

      <LoveStory />
      

      <TravelStay />
      

      <ClosingInvite />

      <Footer />
    </section>
  );
}
