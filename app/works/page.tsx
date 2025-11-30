"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "@/components/self/Card/Card";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";

interface ProjectProps {
  id: number;
  project_name: string;
  thumbnail: string;
  services: string;
  date_project: string;
}

export default function Works() {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  // get AllData Projects
  useEffect(() => {
    const result = fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects`
    ).then((res) => res.json());
    result.then((data) => setProjects(data.data));
    setIsLoading(false);
  }, []);

  if (isLoading) return <div className="text-center">Loading...</div>;
  console.log(projects, "Ini Projects");
  return (
    <main ref={container} className={`relative `}>
      <div className=" px-8 py-12 lg:px-40">
        <h1 className="text-base lg:text-xl font-semibold mb-4 text-black">
          My Works
        </h1>
        <h4 className="text-2xl font-bold lg:text-6xl text-black">
          CREATING USEFULL AND AWESOME DIGITAL SOLUTIONS
        </h4>
      </div>

      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Link href={`/works/${project.id}`} key={project.id}>
              <Card
                key={`p_${i}`}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                {...project}
                i={i}
              />
            </Link>
          );
        })
      )}
    </main>
  );
}
