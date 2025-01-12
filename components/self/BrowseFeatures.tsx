import React from "react";
import { ProjectFeatures } from "@/types/interface";

interface FeaturesProps {
  features: ProjectFeatures[];
}

export const BrowseFeatures: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <div>
      <h4 className="font-bold text-xl lg:text-5xl">Project Features</h4>
      <ul className="list-disc list-inside mt-4 space-y-3">
        {features?.map((feature) => (
          <li key={feature.id} className="text-sm lg:text-base">
            <span className="font-bold">{feature.name}</span>
            <p className="ml-6 mt-1 text-gray-600 text-sm lg:text-base">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseFeatures;
