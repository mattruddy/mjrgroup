import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

export function Link({ href, children, ...props }: any) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <ChakraLink as="a" {...props} variant={"link"}>
        {children}
      </ChakraLink>
    </NextLink>
  );
}
