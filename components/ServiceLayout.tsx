import { HStack, Heading, Image, VStack } from "@chakra-ui/react";
import { Quote } from "./Quote";

interface ServiceLayoutProps {
  title: string;
  body: string;
  imageSrc?: string;
}

export const ServiceLayout = ({
  title,
  body,
  imageSrc,
}: ServiceLayoutProps) => {
  return (
    <VStack>
      <VStack w="100%" align={"start"}>
        <Heading p="24px">{title}</Heading>
      </VStack>
      <HStack flexDir={{ base: "column-reverse", md: "row" }}>
        <VStack p="12px" w={{ base: "100%", md: "500px" }}>
          <Quote body={body} />
        </VStack>
        <VStack p="12px">
          <Image
            w="300px"
            alt={`service-${title}`}
            src={imageSrc}
            fallbackSrc="https://via.placeholder.com/150"
            rounded={"md"}
          />
        </VStack>
      </HStack>
    </VStack>
  );
};
