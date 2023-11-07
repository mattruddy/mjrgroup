import {
  Card,
  CardBody,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export const ContactInfo = () => {
  return (
    <Card variant={"filled"} w="100%">
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
          <HStack pt="5" w="100%" justify={"space-between"}>
            <VStack align={"space-between"}>
              <Text as="b">Address</Text>
              <Text as="b">(Hudson County)</Text>
            </VStack>
            <Stack align={"end"}>
              <Text>104 Morris St</Text>
              <Text>Jersey City, NJ 07302</Text>
            </Stack>
          </HStack>
          <HStack pt="5" w="100%" justify={"space-between"}>
            <VStack align={"space-between"}>
              <Text as="b">Address</Text>
              <Text as="b">(Ocean County)</Text>
            </VStack>
            <Stack align={"end"}>
              <Text>14 Central Ave</Text>
              <Text>Island Heights, NJ 08732</Text>
            </Stack>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};
