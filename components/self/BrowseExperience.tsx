import React from "react";
import { useEffect, useState } from "react";
import { Experience } from "@/types/interface";
import ExperiencePart from "@/components/self/Experience";

export default function BrowseExperience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getDatas = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/experiences`
      );
      const datas = await result.json();
      setExperiences(datas.data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
    }
  };

  useEffect(() => {
    getDatas();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!experiences) {
    return <div>Data Not Found...</div>;
  }
  return (
    <div>
      <div className="w-full px-8 lg:px-28 mt-12 ">
        <hr className="border border-black mb-2 opacity-30" />
        <h1 className="text-black font-bold text-center uppercase text-xl lg:text-7xl ">
          EXPERIENCES
        </h1>
        <hr className="border border-black mb-2 mt-3 opacity-30" />

        <div className="flex flex-col mt-4">
          <div className="flex flex-col">
            {experiences.map((experience) => (
              <div key={experience.id}>
                <ExperiencePart experience={experience} />
                <hr className="border border-black mb-2 mt-3 opacity-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
