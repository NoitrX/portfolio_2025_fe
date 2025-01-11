"use client";
import { HeroParallax } from "@/components/ui/HeroParallax";
import Link from "next/link";

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
      <div className="">
        <HeroParallax products={products} />
        <div className="mt-2 flex flex-col px-8 lg:px-28">
          <h3 className="text-6xl font-bold text-black">
            Transforming your vision into a dynamic web experience through
            meticulously crafted designs
          </h3>
          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-col basis-1/2">
              <p>
                Focus on growing your business while I take care of
                professionally presenting it flawlessly in the digital world,
                and make a Business Solution for All
              </p>
              <Link
                className="btn w-48 btn-gradient text-lg font-bold mt-3"
                href={"/about"}
              >
                ABOUT ME
              </Link>
            </div>

            <div className="flex flex-col gap-12 justify-end text-sm">
              <h4>WEB DEVELOPMENT</h4>
              <h4>GRAPHIC DESIGN</h4>
            </div>
          </div>
        </div>
        {/* Section For Design */}
      </div>
    </>
  );
}
