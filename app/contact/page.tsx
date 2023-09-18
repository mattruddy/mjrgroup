"use client";

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
    <VStack w="100%" p={{ base: 0, md: "20px" }}>
      <Center w="100%" maxW="900px">
        <Card w="100%" p={{ base: "0", md: "20px" }}>
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
      </Center>
    </VStack>
  );
}
