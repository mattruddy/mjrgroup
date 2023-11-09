import { TextProps, chakra, forwardRef } from "@chakra-ui/react";

export const Dot = forwardRef<TextProps, "span">(
  ({ ...boxProps }: TextProps, ref) => (
    <chakra.span ref={ref} {...boxProps}>
      &middot;
    </chakra.span>
  )
);
