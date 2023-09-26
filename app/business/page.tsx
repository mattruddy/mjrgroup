"use client";

import { ServiceLayout } from "@/components/ServiceLayout";
import { PAGE_DATA } from "@/data";

export default function Business() {
  const { title, body, imageFile } =
    PAGE_DATA.page.businessConsultation.sectionOne;
  return (
    <ServiceLayout
      title={title}
      body={body}
      imageSrc={imageFile}
      defaultService="Business Consultation"
    />
  );
}
