import React, { useEffect, useState } from "react";
import Awards from "./Awards";
import { Award } from "@/types/interface";

export default function BrowseAwards() {
  const [awards, setAwards] = useState<Award[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getDatas = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/awards`
      );
      const datas = await result.json();
      setAwards(datas.data);
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

  if (!awards) {
    return <div>Data Not Found...</div>;
  }
  return (
    <div>
      <div className="w-full px-8 lg:px-28 mt-12">
        <div className="flex flex-col lg:flex-row gap-12 ">
          <h3 className="font-bold text-4xl text-black">
            Awards & <br /> Certifications
          </h3>

          <div className="flex flex-col basis-3/4">
            {awards.map((award) => (
              <div key={award.id}>
                <Awards key={award.id} awards={award} />
                <hr className="border border-black mb-2 mt-3 opacity-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
