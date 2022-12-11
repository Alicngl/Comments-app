import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text">
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
);
