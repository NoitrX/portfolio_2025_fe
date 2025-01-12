"use client";
import DetailProject from "@/components/self/DetailProject";
import { Project } from "@/types/interface";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function WorkDetails() {
  const [detailProjects, setDetailProjects] = useState<Project | null>(null);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    const result = fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects/${id}`
    ).then((res) => res.json());
    result.then((data) => setDetailProjects(data.data));
  }, [id]);

  if (!detailProjects) return <div>Data Tidak Ditemukan...</div>;
  return (
    <div>
      <DetailProject projects={detailProjects} />
    </div>
  );
}
