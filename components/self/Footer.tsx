import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-base-200/60 rounded p-6">
        <nav className="grid grid-flow-col gap-4 text-base-content">
          <Link href={"/"} className="link link-hover">
            Home
          </Link>
          <Link href={"/about"} className="link link-hover">
            About Me
          </Link>
          <Link href={"/works"} className="link link-hover">
            Works
          </Link>
        </nav>
        <nav>
          <div className="flex gap-4">
            <Link
              href={"https://wa.me/085157292447?text=Hello%20Naufhal!"}
              className="link link-animated"
              aria-label="X Link"
            >
              <FaWhatsapp className="text-black mt-1 text-lg" />
            </Link>
            <Link
              href={
                "mailto:naufhalsimdigxrpl2@gmail.com?subject=Hello%20Naufhal&body=I%20Want%20to%20Ask%20."
              }
              className="link link-animated"
              aria-label="X Link"
            >
              <CiMail className="text-black mt-1 text-lg" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/naufhal-zakwan/"}
              className="link link-animated"
              aria-label="Linkedin Link"
            >
              <span className="icon-[tabler--brand-linkedin] size-6" />
            </Link>
          </div>
        </nav>
        <aside>
          <p className="text-xs">
            Copyright © 2024 - All right reserved by NoitrX
          </p>
        </aside>
      </footer>
    </div>
  );
}
