"use client";

import { ServiceLayout } from "@/components/ServiceLayout";
import { PAGE_DATA } from "@/data";

export default function Representation() {
  const { title, body } = PAGE_DATA.page.irsRepresentation.sectionOne;
  return <ServiceLayout title={title} body={body} />;
}
