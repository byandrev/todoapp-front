import { Box, Text, Image, Center } from "@chakra-ui/react";
import "@fontsource/raleway";

function ProfileCard() {
  return (
    <>
      <Center>
        <Box
          w="30%"
          alignItems={"center"}
          textAlign={"center"}
          display="flex"
          flexDirection="column"
          border={"1px solid"}
          borderRadius={"md"}
        >
          <Text fontWeight={"bold"} fontSize={"1.2rem"}>
            Andersson Cardenas
          </Text>
          <Image
            padding={3}
            borderRadius="full"
            boxSize="150px"
            src="https://bit.ly/dan-abramov"
          />
          <Text fontWeight={"bold"} fontSize={"1.1rem"}>
            Biography
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fringilla, nunc id aliquam ultrices, nunc nunc ultricies nunc, id
            aliquam nunc nunc nec justo. Sed euismod, nisl id lacinia
            consectetur, nunc nunc ultricies nunc, id aliquam nunc nunc nec
            justo. Sed euismod, nisl id lacinia consectetur.
          </Text>
        </Box>
      </Center>
    </>
  );
}

export default ProfileCard;
