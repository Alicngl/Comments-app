import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CommentStore from "../../../store/CommentStore";
import ButtonComponent from "../shared/ButtonCompoennt";
import InputComponent from "../shared/InputComponent";
import TextAreaComponent from "../shared/TextareaComponent";

function AddList() {
  const [data, setData] = useState({
    name: "",
    surname: "",
    comment: "",
    date: null,
    like: 0,
  });

  useEffect(() => {
    let yourDate = new Date();
    yourDate.toISOString().split("T")[0];
    const offset = yourDate.getTimezoneOffset();
    yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
    setData({ ...data, ["date"]: yourDate.toISOString().split("T")[0] });
  }, []);

  // setData({ ...data, ["date"]: yourDate });
  const handleSubmit = () => {
    CommentStore.setComment(data);
  };
  console.log(data, "DATA");

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
