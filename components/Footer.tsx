import {
  Box,
  Card,
  CardBody,
  CardHeader,
  chakra,
  Container,
  Divider,
  Heading,
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
import NextLink from "./NextLink";
import { Dot } from "./Dot";

export default function SmallWithSocial() {
  return (
    <VStack
      py={4}
      w="100%"
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <VStack justify="center" align={"center"}>
        <Heading size="sm">Services</Heading>
        <HStack flexDir={{ base: "column", md: "row" }}>
          <NextLink href="/tax/individual">Individual</NextLink>
          <Dot display={{ base: "none", md: "block" }} />
          <NextLink href="/tax/business">Business</NextLink>
          <Dot display={{ base: "none", md: "block" }} />
          <NextLink href="/representation">IRS Representation</NextLink>
          <Dot display={{ base: "none", md: "block" }} />
          <NextLink href="/business">Business Consultation</NextLink>
          <Dot display={{ base: "none", md: "block" }} />
          <NextLink href="/bookkeeping">Bookkeeping</NextLink>
        </HStack>
        <Divider />
        <HStack flexDir={{ base: "column", sm: "row" }}>
          <HStack>
            <Text as="b">Phone Number</Text>
            <Link href="tel:732-814-3113">732-814-3113</Link>
          </HStack>
          <Dot display={{ base: "none", sm: "block" }} />
          <HStack>
            <Text as="b">Email</Text>
            <Link href="mailto:mjruddy94@gmail.com">mjruddy94@gmail.com</Link>
          </HStack>
        </HStack>
      </VStack>
      <Text>© 2023 Matt Ruddy Inc. All rights reserved</Text>
    </VStack>
  );
}
