"use client";

import { ServiceLayout } from "@/components/ServiceLayout";
import { PAGE_DATA } from "@/data";

export default function Tax() {
  const { title, body } = PAGE_DATA.page.taxPreparation.sectionOne;
  const { additionalSections } = PAGE_DATA.page.taxPreparation;
  return (
    <ServiceLayout
      title={title}
      body={body}
      defaultService="Tax Preparation"
      sections={additionalSections}
    />
  );
}
