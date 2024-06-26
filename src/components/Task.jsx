import { Flex, Button, Text, Card, CardBody } from "@chakra-ui/react";
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";

function Task() {
  return (
    <Card borderWidth='2px' borderColor='rgba(0, 0, 0, 0.30)'>
      <CardBody py={2}>
        <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap='7rem'>
          <Flex gap={2}>
          <Button
            size="xs"
            borderRadius="100%"
            variant="outline"
            borderColor="#cf2b1f"
            borderWidth="2px"
          />
          <Text color="black">Sacar la Basura</Text>
          </Flex>
          <Flex gap="0">
            <Button colorScheme="none" p={0}>
              <MdOutlineEdit color="black" />
            </Button>
            <Button colorScheme="none" p={0}>
              <MdOutlineDeleteOutline color="black" />
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default Task;
