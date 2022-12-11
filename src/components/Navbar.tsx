import { Button, HStack, Stack } from "@chakra-ui/react";
import Link from "next/link";

function Navbar() {
  return (
    <Stack p={3}>
      <HStack>
        <Link href={"/"}>
          <Button>Anasayfa</Button>
        </Link>
        <Link href={"/addlist"}>
          <Button>Yorum Yaz</Button>
        </Link>
      </HStack>
    </Stack>
  );
}
export default Navbar;
