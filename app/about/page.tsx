"use client";

import React from "react";
import Description from "@/components/self/Description";
import WhatIDo from "@/components/self/WhatIDo";
import BrowseExperience from "@/components/self/BrowseExperience";
import BrowseAwards from "@/components/self/BrowseAwards";
// import BrowseExperience from "@/components/self/BrowseExperience";
// import BrowseAwards from "@/components/self/BrowseAwards";
export default function page() {
  return (
    <div className="mt-8">
      <Description />
      {/* Picture Section */}

      <WhatIDo />

      {/* Experience */}
      <BrowseExperience />

      {/* Awards */}
      <BrowseAwards />
    </div>
  );
}
