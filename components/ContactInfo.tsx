import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export const ContactInfo = () => {
  return (
    <Card w="100%">
      <CardHeader>
        <Heading>Information</Heading>
      </CardHeader>
      <CardBody>
        <VStack>
          <HStack w="100%" justify={"space-between"}>
            <Text as="b">Phone</Text>
            <Text>732-814-3113</Text>
          </HStack>
          <HStack w="100%" justify={"space-between"}>
            <Text as="b">Email</Text>
            <Text>info@mjrgroupllc.com</Text>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};
