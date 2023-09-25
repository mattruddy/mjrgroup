import {
  Box,
  chakra,
  Container,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import { ContactInfo } from "./ContactInfo";

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <VStack>
          <Text>© 2023 MJR Group LLC. All rights reserved</Text>
          <ContactInfo />
        </VStack>
        <VStack align={"start"}>
          <Text as="b">Headquarters</Text>
          <Text>
            104 Morris St
            <br />
            Jersey City, NJ 07302
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
