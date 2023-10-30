"use client";

import { ServiceLayout } from "@/components/ServiceLayout";
import { PAGE_DATA } from "@/data";

export default function Tax() {
  const { title, body, imageFile } =
    PAGE_DATA.page.taxPreparation.business.sectionOne;
  return (
    <ServiceLayout
      title={title}
      body={body}
      imageSrc={imageFile}
      defaultService="Business Taxes"
    />
  );
}
