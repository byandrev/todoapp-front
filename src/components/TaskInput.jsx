import { useState } from "react";

import {
  Input,
  Flex,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { IoAdd } from "react-icons/io5";

import useUser from "../hooks/useUser";
import { useQuery } from "react-query";
import { getTasks, createTask } from "../services/TasksService";

function TaskInput() {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);
  const { token } = useUser();
  
  const handleNewTask = async () => {
    if(!value) return
    try {
      await createTask(token, value);
      refetch();
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  const { refetch } = useQuery(["tasks", token], () => getTasks(token), {
    enabled: !!token,
  });
  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <InputGroup size="md">
          <Input
            value={value}
            onChange={handleChange}
            pr="4.5rem"
            placeholder="Ingresa una nueva tarea"
            backgroundColor="rgba(190, 190, 190, 0.23)"
          ></Input>
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              backgroundColor="transparent"
              onClick={handleNewTask}
            >
              <IoAdd />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </>
  );
}

export default TaskInput;
