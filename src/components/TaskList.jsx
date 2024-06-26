import Task from './Task';

import { Stack } from '@chakra-ui/react'

function TaskList() {
  return (
    <>
      <Stack spacing={4} direction="row" align="center">
        <Task></Task>
      </Stack>
    </>
  );
}

export default TaskList;
