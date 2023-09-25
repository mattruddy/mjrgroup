import { VStack, Heading } from "@chakra-ui/react";
import { Quote } from "./Quote";

interface StandardSectionProps {
  title: string;
  body: string;
  isQuote?: boolean;
}

export const StandardSection = ({
  title,
  body,
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
    </VStack>
  );
};
