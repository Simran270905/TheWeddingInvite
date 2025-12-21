import HeroSection from "../components/HeroSection";
import Schedule from "../components/Schedule";
import LoveStory from "../components/LoveStory";
import TravelStay from "../components/TravelStay";
import ClosingInvite from "../components/ClosingInvite";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-transparent">

      <section id="home" className="w-full">
        <HeroSection />
      </section>

      <section id="rituals" className="w-full">
        <Schedule />
      </section>

      <section id="story" className="w-full">
        <LoveStory />
      </section>

      <section id="travel" className="w-full">
        <TravelStay />
      </section>

      <section id="invite" className="w-full">
        <ClosingInvite />
      </section>

      <Footer />
    </main>
  );
}
