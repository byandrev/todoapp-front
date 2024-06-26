import { Box, Text, Button, Input, Image, Center } from "@chakra-ui/react";

function UpdatePhoto() {
  return (
    <Box
      bgColor={"white"}
      w="30%"
      h={"20rem"}
      textAlign={"justify"}
      display="flex"
      flexDirection="column"
      borderRadius={"md"}
      border={"1px solid #e2e8f0"}
      p={6}
    >
      <Text>New photo</Text>

      <Box
        h={"60%"}
        border={"1px solid #e2e8f0"}
        marginY={5}
        display={"flex"}
        justifyContent={"center"}
      >
        <Image
          src="src/assets/img/upload.png"
          position={"absolute"}
          alignSelf={"center"}
          opacity={0.5}
        ></Image>
        <Input type="file" id="file" h={"100%"} w={"100%"} opacity={0} />
      </Box>
      <Button colorScheme="red" variant="solid" w={"20%"} alignSelf={"center"}>
        Confirm
      </Button>
    </Box>
  );
}

export default UpdatePhoto;
