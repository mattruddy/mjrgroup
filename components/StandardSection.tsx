import {
  VStack,
  Heading,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Wrap,
  WrapItem,
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
      <Wrap justify={"center"}>
        {sections?.map((section, i) => (
          <WrapItem key={i}>
            <Card p="12px" w="250px" variant={"unstyled"}>
              <CardHeader pb="12px">{section.title}</CardHeader>
              <CardBody>
                <Quote body={section.body} showQuoteIcon={false} />
              </CardBody>
            </Card>
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
};
