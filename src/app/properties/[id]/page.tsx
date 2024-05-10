"use client";

import { useParams } from "next/navigation";

const PropertyPage = () => {
  const { id } = useParams();
  return <div>A single property page with id: {id}</div>;
};

export default PropertyPage;
