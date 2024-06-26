import Task from "./Task"
import TaskInput from "./TaskInput"
import UserCard from "./UserCard"

import { Stack, Flex } from "@chakra-ui/react"

function TaskList() {
  return (
    <>
      <Flex direction='column' gap={5}>
        <UserCard></UserCard>
        <TaskInput/>
        <Stack spacing={4} direction="column" align="center">
          <Task></Task>
          <Task></Task>
          <Task></Task>
        </Stack>
      </Flex>
    </>
  );
}

export default TaskList;
