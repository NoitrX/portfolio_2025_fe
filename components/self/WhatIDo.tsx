import React from "react";
import Image from "next/image";
// Icon
import { FaCode } from "react-icons/fa";
import { MdOutlineEditLocation } from "react-icons/md";
import { BsCast } from "react-icons/bs";
import { BiImages } from "react-icons/bi";
export default function WhatIDo() {
  return (
    <div>
      {" "}
      <div className="w-full px-8 lg:px-28 mt-12">
        <div className="w-full flex flex-col lg:flex-row gap-8 ">
          <Image
            className="rounded-lg object-contain"
            src={"/image/profileImg.jpeg"}
            width={400}
            height={400}
            alt="Naufhal"
          />

          <div className="flex flex-col">
            <div className="bg-slate-200 text-black inline text-sm px-8 py-2 rounded-full tracking-[2px]">
              WHAT I DO
            </div>
            <h4 className="text-3xl font-bold text-black mt-2">
              Where creativity meets functionality, and every click tells a
              unique story.
            </h4>
            <p className="text-justify mt-4">
              I&apos;m not just a service provider, I am problem solver, and
              your partner in turning imagination to reality we embark on a
              journey where every idea, every project, is an opportunity to
              craft something truly unique.
            </p>
            {/* Accordion */}
            <div className="accordion divide-neutral/20 divide-y mt-12">
              <div className="accordion-item active" id="payment-icon">
                <button
                  className="accordion-toggle inline-flex items-center justify-between text-start"
                  aria-controls="payment-icon-collapse"
                  aria-expanded="true"
                >
                  <span className="inline-flex items-center gap-x-4">
                    <BsCast /> Custom Web Design
                  </span>
                  <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180" />
                </button>
                <div
                  id="payment-icon-collapse"
                  className="accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="payment-icon"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="text-base-content/80 font-normal">
                      Tailored websites to match your brand&apos;s unique
                      identity and goals.. My expertise includes: Front End
                      Development, Making Prototype, Content Management Like
                      Wordpress
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item" id="delivery-icon">
                <button
                  className="accordion-toggle inline-flex items-center justify-between text-start"
                  aria-controls="delivery-icon-collapse"
                  aria-expanded="false"
                >
                  <span className="inline-flex items-center gap-x-4">
                    <FaCode />
                    Web Development (Fullstack)
                  </span>
                  <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180" />
                </button>
                <div
                  id="delivery-icon-collapse"
                  className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="delivery-icon"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="text-base-content/80 font-normal">
                      I specialize in building dynamic, responsive, and scalable
                      websites tailored to meet diverse business needs. With a
                      comprehensive skill set and expertise in modern
                      development practices, I deliver solutions that combine
                      functionality, performance, and user experience. Including
                      Backend and Frontend,CMS,Database Management
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item" id="cancel-icon">
                <button
                  className="accordion-toggle inline-flex items-center justify-between text-start"
                  aria-controls="cancel-icon-collapse"
                  aria-expanded="false"
                >
                  <span className="inline-flex items-center gap-x-4">
                    <MdOutlineEditLocation />
                    UI/UX Design
                  </span>
                  <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180" />
                </button>
                <div
                  id="cancel-icon-collapse"
                  className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="cancel-icon"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="text-base-content/80 font-normal">
                      I specialize in creating intuitive and user-focused
                      designs that enhance the overall experience and usability
                      of digital products. My approach combines creativity,
                      research, and modern design principles to deliver visually
                      compelling and functional solutions.
                    </p>
                  </div>
                </div>
              </div>
            
            </div>
            {/* End Accordion */}
          </div>
        </div>
      </div>
    </div>
  );
}
