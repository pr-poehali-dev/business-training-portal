import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Certification from "@/components/Certification";
import Stats from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Certification />
      <Stats />
    </div>
  );
};

export default Index;
