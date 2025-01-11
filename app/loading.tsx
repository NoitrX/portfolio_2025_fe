import React from "react";

export default function Loading() {
  return (
    <div className="text-center flex flex-col justify-center items-center h-screen">
      <span className="loading loading-dots loading-lg"></span>
      <p className="text-2xl  tracking-[4px]">NoitrX</p>
    </div>
  );
}
