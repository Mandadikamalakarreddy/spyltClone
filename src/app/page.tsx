import Navbar from "@/components/Navbar";
import FlavorSection from "@/sections/FlavorSection";
import HeroSection from "@/sections/HeroSection";
import MessageSection from "@/sections/MessageSection";


export default function Home() {
  return (
  <main>
    <Navbar/>
    <HeroSection/>
    <MessageSection/>
    <FlavorSection/>
    <div className="h-dvh border border-b-amber-50"></div>
  </main>
  );
}
