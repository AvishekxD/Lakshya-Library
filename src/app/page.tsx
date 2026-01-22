import Footer from "@/components/Footer";
import { GoogleMaps } from "@/components/sections/GoogleMaps";
// import ImageUpload from "@/components/ImageUpload";
import Hero from "@/components/landing/Hero";
// import { Feedback } from "@/components/layout/Feedback";
import { NavbarDemo } from "@/components/Navbar";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import { GridBackground } from "@/components/ui/gridbackground";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { UnderConstruction } from "@/components/UnderConstruction";
import Plans from "@/components/plans/plans";


export default function Home() {
  return (
    <div>
      {/* <ImageUpload /> */}
      <NavbarDemo />
      <Hero />
      <FeatureShowcase />
      <GridBackground />
      <GoogleMaps />
      <Plans/> 
      <UnderConstruction />
      <Footer/>
      <ScrollToTop />
    </div>
  );
}
