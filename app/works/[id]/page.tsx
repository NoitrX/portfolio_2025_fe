"use client";
import { Project } from "@/types/interface";
import Image from "next/image";
import React, { useState } from "react";

export default function WorkDetails() {
  const [detailProjects, setDetailProjects] = useState<Project[]>([]);
  return (
    <div>
      <div className="px-8 lg:px-28 py-16">
        <h4 className="font-semibold text-xl">Developed Project</h4>
        <h2 className="text-black font-bold text-5xl">Carbonext</h2>

        <div className=" mt-12">
          <Image
            src="/image/Delisa.PNG"
            alt="My Project"
            className="w-full h-auto rounded-md"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}
