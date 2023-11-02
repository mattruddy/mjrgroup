import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { IoManSharp } from "react-icons/io5";
import { BiSolidBusiness } from "react-icons/bi";
import { SiQuickbooks } from "react-icons/si";
import { TbPigMoney } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { ReactElement } from "react";
import Link from "../components/NextLink";
import { PAGE_DATA } from "@/data";

interface FeatureProps {
  text: string;
  iconBg: string;
  href: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg, href }: FeatureProps) => {
  return (
    <Stack href={href} as={Link} direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  const { title, subTitle, imageSrc } = PAGE_DATA.page.home.sectionTwo;
  return (
    <Box w="100%" bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Our Services
            </Text>
            <Heading>{title}</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              {subTitle}
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={<Icon as={GiMoneyStack} color={"blue.500"} w={5} h={5} />}
                iconBg={useColorModeValue("blue.100", "blue.900")}
                text={"Individual Taxes"}
                href="tax/individual"
              />
              <Feature
                icon={<Icon as={TbPigMoney} color={"yellow.500"} w={5} h={5} />}
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Small Business Taxes"}
                href="tax/business"
              />
              <Feature
                icon={<Icon as={IoManSharp} color={"orange.500"} w={5} h={5} />}
                iconBg={useColorModeValue("orange.100", "orange.900")}
                text={"IRS Representation"}
                href="representation"
              />
              <Feature
                icon={
                  <Icon as={BiSolidBusiness} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Business Consultation"}
                href="business"
              />
              <Feature
                icon={
                  <Icon as={SiQuickbooks} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Free QuickBooks Training"}
                href="quickbooks"
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={imageSrc}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
