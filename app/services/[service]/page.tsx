"use client";

import { useParams } from "next/navigation";

export default function ServicePage() {
  const params = useParams();
  const service = params?.service;

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold capitalize">
        {service?.toString().replace(/-/g, " ")}
      </h1>
      <p>Details about {service} development services...</p>
    </div>
  );
}
