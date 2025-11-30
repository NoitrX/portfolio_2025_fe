import React from "react";
import Link from "next/link";
// Icon
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
export default function Description() {
  return (
    <div>
      {" "}
      <div className="w-full px-8 lg:px-28" id="aboutme">
        <div className="bg-slate-200 text-black inline text-sm px-8 py-2 rounded-full tracking-[2px]">
          ABOUT ME
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full mt-2 gap-3 lg:gap-12">
          <h3 className="text-black text-4xl lg:text-7xl font-bold ">
            Innovative Programmer For A Digital Products
          </h3>
          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-normal mt-2 ">
            <p className="text-justify">
              Hi, I’m Naufhal — a Fullstack Developer and freelancer with over a
              year of experience building modern, scalable, and user-focused web
              applications.
              <br />I focus on clean architecture, efficient functionality, and
              delivering results that support real business growth.
              <span className="font-bold text-blue-500">
                I specialize in creating custom websites and landing pages using
                modern technologies like Laravel, React, Next.js, and I also
                have experience building websites with WordPress.
              </span>{" "}
            </p>
            <div
              className="flex flex-row justify-center lg:justify-normal gap-4 mt-2
                  "
            >
              <Link href={"https://www.linkedin.com/in/naufhal-zakwan/"}>
                <FaLinkedin className="text-xl" />
              </Link>
              <Link
                href={
                  "mailto:naufhaltech@gmail.com?subject=Hello%20Naufhal&body=I%20Want%20to%20Ask%20."
                }
              >
                <MdMailOutline className="text-xl" />
              </Link>
              <Link href={"https://wa.me/085157292447?text=Hello%20Naufhal!"}>
                <FaWhatsapp className="text-xl" />
              </Link>
            </div>
            <Link
              className="btn w-48 btn-gradient text-lg font-bold mt-3 mb-3"
              href={
                "https://drive.google.com/file/d/1EJt7j0_26KnERYeY_fJUUUkpgjcw91UZ/view?usp=sharing"
              }
            >
              MY RESUME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
