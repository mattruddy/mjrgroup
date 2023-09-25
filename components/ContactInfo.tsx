import { Card, CardBody, HStack, Link, Text, VStack } from "@chakra-ui/react";

export const ContactInfo = () => {
  return (
    <Card variant={"outline"} w="100%" background={"transparent"}>
      <CardBody>
        <VStack>
          <HStack w="100%" justify={"space-between"}>
            <Text as="b">Phone</Text>
            <Link href="tel:732-814-3113">732-814-3113</Link>
          </HStack>
          <HStack w="100%" justify={"space-between"}>
            <Text as="b">Email</Text>
            <Link href="mailto:info@mjrgroupllc.com">info@mjrgroupllc.com</Link>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};
