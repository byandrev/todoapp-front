import { Box, Textarea, Text, Button } from "@chakra-ui/react";

function UpdateBio() {
  return (
    <Box
      bgColor={"white"}
      w="30%"
      h={"20rem"}
      alignItems={"left"}
      textAlign={"justify"}
      display="flex"
      flexDirection="column"
      borderRadius={"md"}
      border={"1px solid #e2e8f0"}
      p={6}
    >
      <Text>New bio</Text>
      <Textarea resize={"none"} marginY={6} h={"60%"}></Textarea>
      <Button colorScheme="red" variant="solid" w={"20%"} alignSelf={"center"}>
        Confirm
      </Button>
    </Box>
  );
}

export default UpdateBio;
