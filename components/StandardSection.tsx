import {
  VStack,
  Heading,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Wrap,
  WrapItem,
  Text,
  Center,
} from "@chakra-ui/react";
import { Quote } from "./Quote";

interface StandardSectionProps {
  title: string;
  body: string;
  sections?: { title: string; body: string }[];
  isQuote?: boolean;
}

export const StandardSection = ({
  title,
  body,
  sections,
  isQuote = false,
}: StandardSectionProps) => {
  return (
    <VStack align={"start"} w={{ base: "100%", md: "800px" }}>
      <Heading size="md" pl="24px" pt="24px">
        {title}
      </Heading>
      <VStack p="12px">
        <Quote body={body} showQuoteIcon={isQuote} />
      </VStack>
      <VStack w="100%" align={"center"}>
        <Wrap w={{ base: "250px", sm: "508px", lg: "766px" }}>
          {sections?.map((section, i) => (
            <WrapItem key={i}>
              <Center>
                <Card
                  p="12px"
                  w={{ base: "100%", md: "250px" }}
                  variant={"unstyled"}
                >
                  <CardHeader pb="6px" fontWeight={"bold"}>
                    {section.title}
                  </CardHeader>
                  <CardBody>
                    <Text fontSize={"sm"}>{section.body}</Text>
                  </CardBody>
                </Card>
              </Center>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </VStack>
  );
};
