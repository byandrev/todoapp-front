import { Box, Textarea, Text, Button } from "@chakra-ui/react";

function UpdateBio() {
  return (
    <Box h={"15rem"}>
      <Text>New bio</Text>
      <Textarea resize={"none"} marginY={6} h={"50%"}></Textarea>
      <Button colorScheme="red" variant="solid" w={"20%"} alignSelf={"center"}>
        Confirm
      </Button>
    </Box>
  );
}

export default UpdateBio;
