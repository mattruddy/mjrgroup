"use client";

import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Contact() {
  const sendEmail = async (
    message: string,
    name: string,
    email: string,
    phoneNumber: string
  ) => {
    const resp = await fetch("/api", {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({ message, name, email, phoneNumber }),
    });
    console.log(await resp.json());
  };

  return (
    <Center
      w="100%"
      flexDir={{ base: "column", lg: "row" }}
      alignItems={{ base: "center", lg: "start" }}
      p="20px"
    >
      <VStack
        justify={"center"}
        align={"start"}
        p={{ base: "0", lg: "20px" }}
        minW={{ base: "100%", md: "500px" }}
      >
        <Heading p="12px">Contact Us</Heading>
        <Card variant={"outline"} w="100%">
          <CardBody>
            <Stack w="100%">
              <ContactForm onSubmit={sendEmail} />
            </Stack>
          </CardBody>
        </Card>
      </VStack>
      <VStack
        minW={{ base: "100%", md: "500px", lg: "400px" }}
        p={{ base: "0", lg: "20px" }}
        justify={"center"}
        align={"start"}
      >
        <Heading p="12px">Information</Heading>
        <ContactInfo />
        <Card w="100%" variant="filled">
          <CardBody>
            <Heading size={"md"}>Address</Heading>
            <Text>104 Morris St #3</Text>
            <Text>Jersey City, NJ 07302</Text>
          </CardBody>
        </Card>
      </VStack>
    </Center>
  );
}
