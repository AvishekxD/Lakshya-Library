import ImageUpload from "@/components/ImageUpload";
import Hero from "@/components/landing/Hero";
import { NavbarDemo } from "@/components/Navbar";
import FeatureShowcase from "@/components/sections/FeatureShowcase";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <ImageUpload /> */}
      <NavbarDemo />
      <Hero />
      <FeatureShowcase />
    </div>
  );
}
