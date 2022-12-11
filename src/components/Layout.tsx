import { Box, Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <Stack>
      <Navbar />
      <Box>{children}</Box>
    </Stack>
  );
}
export default Layout;
