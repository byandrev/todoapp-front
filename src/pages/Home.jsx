import { Flex } from "@chakra-ui/react"

import TaskList from "../components/TaskList"

function Home() {
  return (
    <>
      <Flex width='100%' alignItems='center' justifyContent='center' mt='10rem'>
      <TaskList></TaskList>
      </Flex>
    </>
  );
}

export default Home;
