import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import CommentStore from "../../../store/CommentStore";

function CommentList() {
  const data = CommentStore.data;
  useEffect(() => {
    CommentStore.getComment();
    console.log(CommentStore.data, "asd");
  }, []);
  console.log(data, "DATA");

  return (
    <Stack w={"full"} align="center">
      <Text>
        {data &&
          data.map((x, index) => (
            <Stack
              key={index}
              w="full"
              maxW={"4xl"}
              bg={"gray.300"}
              p="2rem"
              mt={2}>
              <Stack>
                <Text textAlign={"left"}>İsim {x.name}</Text>
              </Stack>
              <Stack border={"1px solid"}>
                <Text>comment {x.comment}</Text>
              </Stack>
            </Stack>
          ))}
      </Text>
    </Stack>
  );
}
export default CommentList;
