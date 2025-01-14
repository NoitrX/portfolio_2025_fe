import { Project } from "@/types/interface";
import Image from "next/image";
import React from "react";
import { BrowseFeatures } from "./BrowseFeatures";
interface ProjectProps {
  projects: Project;
}

export default function DetailProject({ projects }: ProjectProps) {
  return (
    <div>
      <div className="px-8 lg:px-28 py-16">
        <h4 className="font-semibold text-xl">Developed Project</h4>
        <h2 className="text-black font-bold text-5xl">
          {projects.project_name}
        </h2>

        <div className=" mt-12">
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/public/storage/${projects.thumbnail}`}
            alt="My Project"
            className="w-full h-auto rounded-md"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>

        <div className="flex flex-col lg:gap-12 gap-8 lg:flex-row justify-around px-8 lg:px-16 py-16">
          {/* For Date Section */}
          <div className="flex flex-col gap-6">
            {/* Date */}
            <div>
              <h4 className="font-bold">Date</h4>
              <h4 className=" font-medium">{projects.date_project}</h4>
            </div>

            <div>
              <h4 className="font-bold">Client Name</h4>
              <h4 className=" font-medium">{projects.client_name}</h4>
            </div>

            <div>
              <h4 className="font-bold">Services</h4>
              <h4 className=" font-medium">{projects.services}</h4>
            </div>
          </div>
          {/* For Explanation Project */}
          <div className="flex flex-col gap-12">
            <div>
              <h4 className="font-bold text-xl lg:text-5xl">
                Project Explanation
              </h4>
              <p className="text-sm lg:text-base text-justify mt-2">
                {projects.description}
              </p>
            </div>

            <div>
              <BrowseFeatures features={projects.features} />
            </div>

            <div>
              <h4 className="font-bold text-xl lg:text-5xl">Project Teches</h4>
              <ul className="list-disc list-inside mt-4">
                {projects.teches?.map((tech) => (
                  <li key={tech.id} className="text-lg">
                    <span className="font-medium text-sm lg:text-base">
                      {tech.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* For Image */}
            <div className="flex flex-col gap-12">
              {projects.photos?.map((photo) => (
                <Image
                  key={photo.id}
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/public/storage/${photo.photo}`}
                  alt="My Project"
                  className="w-full h-auto rounded-md"
                  width={0}
                  height={0}
                  sizes="95vw"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
