import { Stack } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import AddList from "../components/pages/AddList";

function addlist() {
  return (
    <Stack>
      <Hero title="Add Comment" />
      <AddList />
    </Stack>
  );
}
export default addlist;
