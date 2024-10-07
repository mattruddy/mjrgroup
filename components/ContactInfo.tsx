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
            <Link href="mailto:mjruddy94@gmail.com">mjruddy94@gmail.com</Link>
          </HStack>
          <HStack pt="5" w="100%" justify={"space-between"}>
            <VStack align={"space-between"}>
              <Text as="b">Address</Text>
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
