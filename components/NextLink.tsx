import React from "react";
import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

const NextLink = React.forwardRef(({ href, children, ...props }: any, ref) => {
  return (
    <Link
      href={href.startsWith("/") ? href : `/${href}`}
      passHref
      legacyBehavior
    >
      <ChakraLink ref={ref} {...props}>
        {children}
      </ChakraLink>
    </Link>
  );
});

NextLink.displayName = "NextLink";
export default NextLink;
