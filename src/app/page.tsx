import HeroBanner from "@/components/HeroBanner";
import HomeSpecSection from "@/components/HomeSpecSection";
import HomeInterviewSection from "@/components/HomeInterviewSection";
import HomeStatsSection from "@/components/HomeStatsSection";
import HomeTestimonialSection from "@/components/HomeTestimonialSection";
import HomeCTASection from "@/components/HomeCTASection";
import HomeFooter from "@/components/HomeFooter";

export default function Home() {
  return (
    <main className="bg-white text-foreground min-h-screen flex flex-col">
      <HeroBanner />
      <HomeSpecSection />
      <HomeInterviewSection />
      <HomeStatsSection />
      <HomeTestimonialSection />
      <HomeCTASection />
      <HomeFooter />
    </main>
  );
}
