"use client";

import { ServiceLayout } from "@/components/ServiceLayout";
import { PAGE_DATA } from "@/data";

export default function QuickBooks() {
  const { title, body, imageFile } =
    PAGE_DATA.page.quickBooksTraining.sectionOne;
  return (
    <ServiceLayout
      title={title}
      body={body}
      imageSrc={imageFile}
      defaultService="Bookkeeping"
    />
  );
}
