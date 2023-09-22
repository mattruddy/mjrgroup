import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export function Quote({
  body,
  showQuoteIcon = false,
  isHtml = false,
}: {
  body: string;
  showQuoteIcon?: boolean;
  isHtml?: boolean;
}) {
  return (
    <HStack alignItems="stretch" justify="flex-start">
      <VStack w="10px" align="end" justify="stretch">
        {showQuoteIcon && (
          <Icon as={FaQuoteLeft} boxSize="3" color="var(--lines)" />
        )}
        <Box
          marginTop="1px !important"
          borderLeft="1px solid #e4e7f0"
          w="5px"
          h="100%"
        />
      </VStack>
      {isHtml ? (
        <Text dangerouslySetInnerHTML={{ __html: body }} />
      ) : (
        <Text textAlign="start">{body}</Text>
      )}
    </HStack>
  );
}
