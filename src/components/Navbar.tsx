import { Button, HStack, Stack } from "@chakra-ui/react";
import Link from "next/link";

function Navbar() {
  return (
    <Stack>
      <HStack>
        <Link href={"/"}>
          <Button>Anasayfa</Button>
        </Link>
        <Link href={"/addlist"}>
          <Button>Anasayfa</Button>
        </Link>
      </HStack>
    </Stack>
  );
}
export default Navbar;
