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
        <HStack>
          <NextLink href="/tax/individual">Individual</NextLink>
          <Dot />
          <NextLink href="/tax/business">Business</NextLink>
          <Dot />
          <NextLink href="/tax/individual">IRS Representation</NextLink>
          <Dot />
          <NextLink href="/tax/individual">Business Consultation</NextLink>
          <Dot />
          <NextLink href="/tax/individual">Free Quickbooks Training</NextLink>
        </HStack>
        <Divider />
        <HStack>
          <HStack>
            <Text as="b">Phone Number</Text>
            <Text>(732) 814-3113</Text>
          </HStack>
          <Dot />
          <HStack>
            <Text as="b">Email</Text>
            <Text>matt@mjrgroupllc.com</Text>
          </HStack>
        </HStack>
      </VStack>
      <Text>© 2023 MJR Group LLC. All rights reserved</Text>
    </VStack>
  );
}
