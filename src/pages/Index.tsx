import HeroSection from "@/components/festival/HeroSection";
import SankrantiSection from "@/components/festival/SankrantiSection";
import PongalSection from "@/components/festival/PongalSection";
import LohriSection from "@/components/festival/LohriSection";
import BihuSection from "@/components/festival/BihuSection";
import UnitySection from "@/components/festival/UnitySection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <SankrantiSection />
      <PongalSection />
      <LohriSection />
      <BihuSection />
      <UnitySection />
    </main>
  );
};

export default Index;
