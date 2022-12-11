import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import CommentStore from "../../../store/CommentStore";
import ButtonComponent from "../shared/ButtonCompoennt";
import InputComponent from "../shared/InputComponent";
import TextAreaComponent from "../shared/TextareaComponent";

function AddList() {
  const [data, setData] = useState({
    name: "",
    surname: "",
    comment: "",
  });
  console.log(data);
  const handleSubmit = () => {
    CommentStore.setComment(data);
  };

  return (
    <Stack w={"full"} align="center">
      <Stack maxW={"4xl"} w="full">
        <FormControl isRequired>
          <FormLabel>İsim</FormLabel>
          <Input
            onChange={(e) => {
              setData({ ...data, ["name"]: e.target.value });
            }}
          />
          <FormLabel>Soyisim</FormLabel>
          <Input
            onChange={(e) => {
              setData({ ...data, ["surname"]: e.target.value });
            }}
          />
          <FormLabel>Comments</FormLabel>
          <Textarea
            onChange={(e) => {
              setData({ ...data, ["comment"]: e.target.value });
            }}
          />
        </FormControl>
        <Button onClick={handleSubmit}>Kaydet</Button>
      </Stack>
    </Stack>
  );
}
export default AddList;
