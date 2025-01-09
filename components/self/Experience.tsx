import { convertDate } from "@/types/helper";
import type { Experience } from "@/types/interface";

export default function ExperiencePart({ experience }: ExperienceProps) {
  return (
    <div>
      <div className="flex justify-between items-center" key={experience.id}>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">{experience.name}</h3>
          <h5>{experience.company}</h5>
        </div>
        <h4 className="text-sm">
          {convertDate(experience.start_date)} -{" "}
          {convertDate(experience.end_date)}
        </h4>
      </div>
    </div>
  );
}

interface ExperienceProps {
  experience: Experience;
}
