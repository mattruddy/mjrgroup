import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import { Quote } from "./Quote";
import { ContactForm, SERVICE_TYPE } from "./ContactForm";

interface ServiceLayoutProps {
  title: string;
  body: string;
  imageSrc?: string;
  defaultService?: SERVICE_TYPE;
}

export const ServiceLayout = ({
  title,
  body,
  imageSrc,
  defaultService,
}: ServiceLayoutProps) => {
  return (
    <VStack>
      <VStack align={"start"}>
        <Heading size={"lg"} pl="24px" pt="24px">
          {title}
        </Heading>
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
        <VStack align={"start"} w="100%">
          <Heading size={"lg"} pl="24px" pt="24px">
            Book Consultation
          </Heading>
          <Card
            ml={{ base: 0, md: "16px" }}
            mb="24px"
            w={{ base: "100%", md: "500px" }}
          >
            <CardBody>
              <ContactForm defaultService={defaultService} />
            </CardBody>
          </Card>
        </VStack>
      </VStack>
    </VStack>
  );
};
