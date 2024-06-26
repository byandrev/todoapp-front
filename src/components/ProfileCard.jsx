import { Box, Text, Image, Center } from "@chakra-ui/react";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import "@fontsource/raleway";

function ProfileCard() {
  return (
    <>
      <Box
        bgColor={"white"}
        w="30%"
        alignItems={"center"}
        textAlign={"justify"}
        display="flex"
        flexDirection="column"
        borderRadius={"md"}
        border={"1px solid #e2e8f0"}
        p={8}
      >
        <Text fontWeight={"bold"} fontSize={"1.2rem"}>
          John Doe
        </Text>
        <Text paddingBottom={5} color={"gray.500"}>
          johndoewp@ufps.edu.co
        </Text>
        <Image
          padding={2}
          borderRadius="full"
          boxSize="150px"
          src="https://bit.ly/dan-abramov"
        />
        <Text fontWeight={"bold"} fontSize={"1.1rem"} paddingY={5}>
          Biography
        </Text>
        <Text>
          John Doe is a digital marketing expert with over 15 years of
          experience. He holds a Bachelor’s degree in Marketing from UC Berkeley
          and an MBA from Stanford. John specializes in SEO, content marketing,
          and social media strategy, working with high-profile clients to
          enhance their online presence and drive growth. As the Director of
          Marketing at XYZ Corp, he leads a team in creating innovative
          campaigns that have resulted in a 30% increase in online sales.
          Outside of work, John enjoys traveling, hiking, and volunteering with
          local non-profits.
        </Text>
        <Box
          paddingTop={7}
          w={"100%"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
        >
          <Text>Last login:</Text>
          <Text>2024-09-01 09:48:20</Text>
        </Box>
        <Stack
          direction="row"
          justifyContent={"flex-end"}
          align="center"
          paddingTop={7}
        >
          <Button colorScheme="red" variant="solid">
            Update photo
          </Button>
          <Button colorScheme="red" variant="solid">
            Update bio
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default ProfileCard;
