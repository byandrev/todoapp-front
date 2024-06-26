import { Flex, Button, Text } from "@chakra-ui/react"
import { FiEdit } from "react-icons/fi"

function Task() {
  return (
    <Flex direction='row' justifyContent='space-between' alignItems='center' gap='5' borderColor='red' border='2px' p='2'>
      <Button colorScheme="red" size="sm" borderRadius='100%'/>
      <Text>Miau</Text>
      <Button colorScheme="none" p={0}><FiEdit color="black"/></Button>
      <Button colorScheme="none" p={0}><FiEdit color="black"/></Button>
    </Flex>
  )
}

export default Task;
