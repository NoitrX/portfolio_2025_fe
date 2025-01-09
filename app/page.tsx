"use client";
import Navbar from "@/components/self/Navbar";
import { HeroParallax } from "@/components/ui/HeroParallax";

import Description from "@/components/self/Description";
import WhatIDo from "@/components/self/WhatIDo";
import BrowseExperience from "@/components/self/BrowseExperience";

const products = [
  {
    title: "Website PT Alroyyan Cahaya Mandiri",
    link: "#",
    thumbnail: "/image/page1.PNG",
  },

  {
    title: "Website Delisa ( Depok Peduli Pre Eklampsia )",
    link: "#",
    thumbnail: "/image/Delisa.PNG",
  },

  {
    title: "Biezari Event Organizer Management System",
    link: "#",
    thumbnail: "/image/DashboardAdminBzr.png",
  },

  {
    title: "Landing Page Event Organizer",
    link: "#",
    thumbnail: "/image/LandingPageBzr.png",
  },
];

export default function Home() {
  return (
    <>
      <div className="w-full p-0 lg:p-8 ">
        <Navbar />
        <HeroParallax products={products} />

        {/* Section For Design */}
        <Description />
        {/* Picture Section */}

        <WhatIDo />

        {/* Experience */}
        <BrowseExperience />
      </div>
    </>
  );
}
