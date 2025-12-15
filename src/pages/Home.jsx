import HeroSection from "../components/HeroSection";
import Schedule from "../components/Schedule";
import LoveStory from "../components/LoveStory";
import TravelStay from "../components/TravelStay";
import ClosingInvite from "../components/ClosingInvite";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <section className="w-full bg-[#faf7f2]">

      <section id="home">
        <HeroSection />
      </section>

      <section id="rituals">
        <Schedule />
      </section>

      <section id="story">
        <LoveStory />
      </section>

      <section id="travel">
        <TravelStay />
      </section>

      <section id="invite">
        <ClosingInvite />
      </section>

      <Footer />
    </section>
  );
}
