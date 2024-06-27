import { Box, Text, Button, Input, Stack, Textarea } from "@chakra-ui/react";
import useUser from "../hooks/useUser";
import { getUserInfo } from "../services/UserService";
import React, { useState, useEffect } from "react";

function UpdatePhoto() {
  const { token } = useUser();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!token) {
        setError("You must be logged in to see your profile");
        setLoading(false);
        return;
      }

      try {
        const data = await getUserInfo(token);
        if (data) {
          setUserInfo(data);
        } else {
          setError("No user info found.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [token]);
  return (
    <Box h={"40rem"} w={"100%"} p={4}>
      <Stack
        direction="row"
        justifyContent={"center"}
        align="center"
        marginY={4}
      >
        <Stack direction="column" justifyContent={"center"} align="left">
          <Text marginBottom={2}>First name</Text>
          <Input defaultValue={userInfo.first_name}></Input>
        </Stack>
        <Stack direction="column" justifyContent={"center"} align="left">
          <Text marginBottom={2}>Last name</Text>
          <Input defaultValue={userInfo.last_name}></Input>
        </Stack>
      </Stack>

      <Text>Photo</Text>
      <Input
        marginY={4}
        placeholder="Type the URL"
        defaultValue={userInfo.photo}
      ></Input>
      <Text>Bio</Text>
      <Textarea resize={"none"} marginY={4} h={"50%"}></Textarea>
      <Stack
        direction="row"
        justifyContent={"center"}
        align="center"
        marginTop={2}
        defaultValue={userInfo.bio}
      >
        <Button colorScheme="red" variant="solid" w={"30%"}>
          Confirm
        </Button>
      </Stack>
    </Box>
  );
}

export default UpdatePhoto;
