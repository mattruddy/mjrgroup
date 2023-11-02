"use client";

import { Quote } from "@/components/Quote";
import { StandardSection } from "@/components/StandardSection";
import { PAGE_DATA } from "@/data";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function About() {
  const { title, sectionOne, sectionTwo } = PAGE_DATA.page.about;
  return (
    <VStack>
      <VStack align={"start"} w={{ base: "100%", md: "800px" }}>
        <Heading size="lg" pl="24px" pt="24px">
          {title}
        </Heading>
        <HStack
          align={{ base: "center", md: "start" }}
          flexDir={{ base: "column-reverse", md: "row" }}
        >
          <VStack p="12px" w={{ base: "100%", md: "500px" }}>
            <Quote body={sectionOne.body} isHtml />
          </VStack>
          <VStack p="12px">
            <Image
              alt="mjr-group-about"
              w="300px"
              src={sectionOne.imageSrc}
              fallbackSrc="https://via.placeholder.com/150"
              shadow={"2xl"}
            />
          </VStack>
        </HStack>
        <StandardSection
          title={sectionTwo.title}
          body={sectionTwo.body}
          isQuote
        />
        <VStack py="12px" w="100%" justify={"center"}>
          <Image
            shadow={"2xl"}
            rounded={"md"}
            h="400px"
            alt="matt-tom"
            src="/matt-tom.jpg"
          />
          <Quote body="Another day in the office for Tom & Matt. La Bonne Vie is a Condo Association where they provide bookkeping services and prepare taxes for. " />
        </VStack>
      </VStack>
    </VStack>
  );
}
