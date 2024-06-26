import { Box, Text, Button, Input, Image } from "@chakra-ui/react";

function UpdatePhoto() {
  return (
    <Box h={"20rem"}>
      <Text>New photo</Text>

      <Box
        h={"60%"}
        border={"1px solid #e2e8f0"}
        marginY={5}
        display={"flex"}
        justifyContent={"center"}
        _hover={{
          border: "1px solid #3182ce",
        }}
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
