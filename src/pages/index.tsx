import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import AddList from "../components/pages/AddList";
import Navbar from "../components/Navbar";

const Index = () => (
  <Stack>
    <Navbar />
    <Stack>
      <Hero title="Comments App" />
    </Stack>
  </Stack>
);

export default Index;
