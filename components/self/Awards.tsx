import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import Link from "next/link";
import type { Award } from "@/types/interface";

export default function Awards({ awards }: AwardsProps) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h4 className="text-lg font-bold">{awards.title}</h4>
          <h5 className="text-sm">{awards.year_place}</h5>
        </div>
        <div className="border  rounded-full p-1 hover:scale-110 transition-all duration-200">
          <Link href={`${awards.link}`}>
            {" "}
            <CiLocationArrow1 className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

interface AwardsProps {
  awards: Award;
}
