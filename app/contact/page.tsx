"use client";

import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { Card, CardBody, CardHeader, Heading, VStack } from "@chakra-ui/react";

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
    <VStack
      w="100%"
      flexDir={{ base: "column", lg: "row" }}
      justify={"center"}
      align={"start"}
      p="20px"
    >
      <VStack p={{ base: "0", lg: "20px" }} minW="500px">
        <Card w="100%">
          <CardHeader>
            <Heading>Contact Us</Heading>
          </CardHeader>
          <CardBody>
            <ContactForm onSubmit={sendEmail} />
          </CardBody>
        </Card>
      </VStack>
      <VStack minW="400px" p={{ base: "0", lg: "20px" }}>
        <ContactInfo />
      </VStack>
    </VStack>
  );
}
