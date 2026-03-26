import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductCollection from "@/components/ProductCollection";
import QualityGuide from "@/components/QualityGuide";
import BrandIdentity from "@/components/BrandIdentity";
import IndulgeSection from "@/components/IndulgeSection";
import GiftBox from "@/components/GiftBox";
import GlobalDelivery from "@/components/GlobalDelivery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-accent selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <ProductCollection />
      <QualityGuide />
      <BrandIdentity />
      <IndulgeSection />
      <GiftBox />
      <GlobalDelivery />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}


