"use client";

import { ContactInfo } from "@/components/ContactInfo";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";

export default function Contact() {
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
            <form
              method="post"
              action="mailto:matt@mjrgroupllc.com?subject=Accounting Inquiry"
            >
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input name="name" />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input name="email" />
              </FormControl>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea name="message" />
              </FormControl>
              <Button type="submit" mt="20px">
                Submit
              </Button>
            </form>
          </CardBody>
        </Card>
      </VStack>
      <VStack minW="400px" p={{ base: "0", lg: "20px" }}>
        <ContactInfo />
      </VStack>
    </VStack>
  );
}
