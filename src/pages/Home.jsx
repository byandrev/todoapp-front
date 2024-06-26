import { Flex } from "@chakra-ui/react";

import MainTitle from "../components/MainTitle";
import TaskList from "../components/TaskList";

import { LuUserCircle } from "react-icons/lu";

function Home() {
  return (
    <>
      <Flex
        direction="column"
        width="100%"
        alignItems="center"
        justifyContent="center"
        mt="7rem"
        gap="3rem"
      >
        <Flex alignItems="center" justifyContent="space-around">
          <MainTitle />
          <LuUserCircle size="6%"/>
        </Flex>
        <TaskList></TaskList>
      </Flex>
    </>
  )
}

export default Home;
