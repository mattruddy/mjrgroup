import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Center,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Link from "../components/NextLink";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box pos="sticky" top={0} zIndex={10000}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4, md: 20, lg: 32 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "end", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Button as={Link} href="/" variant={"link"}>
              <Image alt="logo-mjrgroup" h="50" w="50" src="/logo/logo.png" />
            </Button>
          </Text>

          <Center display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Center>
        </Flex>
        <Flex>
          <Heading
            as={Link}
            _hover={{ textDecor: "none" }}
            href="/"
            display={{ base: "none", md: "flex" }}
            size="md"
          >
            MJR GROUP
          </Heading>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const PopoverNavItem = ({ navItem }: { navItem: (typeof NAV_ITEMS)[0] }) => {
  const { onToggle, isOpen, onOpen, onClose } = useDisclosure();

  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Popover
      trigger={"hover"}
      placement={"bottom-start"}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <PopoverTrigger>
        <Button
          h="100%"
          w="100%"
          variant={"link"}
          fontSize={"sm"}
          fontWeight={500}
          color={linkColor}
          onClick={onOpen}
          _hover={{
            textDecoration: "none",
            color: linkHoverColor,
          }}
        >
          {navItem.label}
        </Button>
      </PopoverTrigger>

      {navItem.children && (
        <PopoverContent
          border={0}
          boxShadow={"xl"}
          bg={popoverContentBgColor}
          p={4}
          rounded={"xl"}
          minW={"sm"}
        >
          <Stack>
            {navItem.children.map((child) => (
              <DesktopSubNav key={child.label} {...child} onClick={onClose} />
            ))}
          </Stack>
        </PopoverContent>
      )}
    </Popover>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          {navItem.children ? (
            <PopoverNavItem navItem={navItem} />
          ) : (
            <Link
              href={navItem.href ?? "#"}
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              {navItem.label}
            </Link>
          )}
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({
  label,
  href,
  subLabel,
  onClick,
}: NavItem & { onClick: () => void }) => {
  return (
    <Link
      href={href || "#"}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      onClick={onClick}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} href={child.href ?? "#"} py={2}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    children: [
      {
        label: "Individual Taxes",
        subLabel: "Trending Design to inspire you",
        href: "/tax/individual",
      },
      {
        label: "Small Business Taxes",
        subLabel: "Trending Design to inspire you",
        href: "/tax/business",
      },
      {
        label: "IRS Representation",
        subLabel: "Trending Design to inspire you",
        href: "/representation",
      },
      {
        label: "Business Consultation",
        subLabel: "Trending Design to inspire you",
        href: "/business",
      },
      {
        label: "QuickBooks Training",
        subLabel: "Trending Design to inspire you",
        href: "/quickbooks",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];
