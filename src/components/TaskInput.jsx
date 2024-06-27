import {
  Input,
  Flex,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { IoAdd } from "react-icons/io5";

function TaskInput() {
  return (
    <>
      <Flex alignItems='center' justifyContent='center'>
        <InputGroup size="md">
          <Input pr="4.5rem" placeholder="Ingresa una nueva tarea" backgroundColor='rgba(190, 190, 190, 0.23)'></Input>
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" backgroundColor='transparent'>
              <IoAdd />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </>
  );
}

export default TaskInput;

{
  /*
  <Input variant="filled" placeholder="Escribe tu nueva tarea">
          <IconButton
            backgroundColor="#cf2b1f"
            aria-label="Call Segun"
            size="md"
            icon={<IoAdd size="50%" />}
          />
        </Input>
  */
}
