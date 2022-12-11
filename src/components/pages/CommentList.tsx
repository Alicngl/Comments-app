import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
  Stack,
  Text,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CommentStore from "../../../store/CommentStore";
import socketIOClient, { io } from "socket.io-client";
import { ArrowDownIcon, StarIcon } from "@chakra-ui/icons";

function CommentList() {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState({
    name: "",
    surname: "",
    answer: "",
  });
  const [like, setLike] = useState(0);
  const [id, setId] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetch("http://localhost:8000/CommentList").then(async (res) => {
      setData(await res.json());
    });
  }, []);
  const handleLike = (x) => {
    if (id === x.id) {
      if (like === 1) {
        return "#333";
      } else {
        return "#fff";
      }
    }
  };
  const handleAnswers = () => {
    CommentStore.setAnswers(answers);
  };
  console.log(id, "asdasdasd");

  return (
    <Stack w={"full"} align="center">
      <Text>
        {data &&
          data.map((x, index) => (
            <Stack
              borderRadius={10}
              key={index}
              w="400px"
              bg={"gray.300"}
              p="2rem"
              mt={2}>
              <HStack justifyContent={"space-between"}>
                <Text textAlign={"left"} fontSize="sm">
                  {" "}
                  {x.name}
                </Text>
                <Text fontSize={"sm"}>{x.date}</Text>
              </HStack>
              <Stack>
                <Text fontSize={"xl"}> {x.comment}</Text>
              </Stack>
              <HStack justifyContent={"space-between"}>
                <Stack>
                  <StarIcon
                    fontSize={"2xl"}
                    color={x.like === 0 ? "#fff" : "#333"}
                    onClick={async () => {
                      setLike(like === 0 ? like + 1 : like - 1);
                      setId(x.id);
                      if (id) {
                        //@ts-ignore
                        return await CommentStore.putLike(like, id, x);
                      }
                      console.log(x, "id");
                    }}
                  />
                </Stack>

                <Button size={"xs"} onClick={onOpen}>
                  yanıtla
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <FormControl isRequired>
                        <FormLabel>İsim</FormLabel>
                        <Input
                          onChange={(e) => {
                            setAnswers({
                              ...answers,
                              ["name"]: e.target.value,
                            });
                          }}
                        />
                        <FormLabel>Soyisim</FormLabel>
                        <Input
                          onChange={(e) => {
                            setAnswers({
                              ...answers,
                              ["surname"]: e.target.value,
                            });
                          }}
                        />
                        <FormLabel>Comments</FormLabel>
                        <Textarea
                          onChange={(e) => {
                            setAnswers({
                              ...answers,
                              ["answer"]: e.target.value,
                            });
                          }}
                        />
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={handleAnswers}>
                        Kaydet
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </HStack>
            </Stack>
          ))}
      </Text>
    </Stack>
  );
}
export default CommentList;
