import { Link as ChakraLink, Stack } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";
import CommentList from "../components/pages/CommentList";

const Index = () => (
  <Stack>
    <Stack>
      <Hero title="Comments App" />
      <CommentList />
    </Stack>
  </Stack>
);

export default Index;
