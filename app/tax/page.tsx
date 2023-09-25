"use client";

import { ServiceLayout } from "@/components/ServiceLayout";
import { PAGE_DATA } from "@/data";
import { Heading, VStack } from "@chakra-ui/react";

export default function Tax() {
  const { title, body } = PAGE_DATA.page.taxPreparation.sectionOne;
  return (
    <ServiceLayout title={title} body={body} defaultService="Tax Preparation" />
  );
}
