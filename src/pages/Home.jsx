import {Button, Flex} from "@chakra-ui/react";

import MainTitle from "../components/MainTitle"
import TaskList from "../components/TaskList"

import { LuUserCircle } from "react-icons/lu";
import {Link} from "wouter";

function Home() {
  return (
    <>
      <Flex
        mx={'auto'}
        maxW={'sm'}
        direction="column"
        w="full"
        mt="2rem"
        gap="3rem"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <MainTitle />
          <Button 
            as={Link} 
            to={'/profile'} 
            leftIcon={<LuUserCircle/>} 
            iconSpacing={0} 
          />
        </Flex>
        <TaskList></TaskList>
      </Flex>
    </>
  )
}

export default Home;
