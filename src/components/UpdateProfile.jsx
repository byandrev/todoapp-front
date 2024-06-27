import {
  Box,
  Text,
  Button,
  Input,
  Stack,
  Textarea,
  Spinner,
  Center,
} from "@chakra-ui/react";
import useUser from "../hooks/useUser";
import { getUserInfo, update } from "../services/UserService";
import React, { useState, useEffect } from "react";

function UpdateProfile() {
  const { token } = useUser();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    photo: "",
    bio: "",
  });

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
          setFormData({
            id: data.id,
            first_name: data.first_name,
            last_name: data.last_name,
            photo: data.photo,
            bio: data.bio,
          });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const updatedUser = await update(token, formData);
      setUserInfo(updatedUser);
      setError(null);
      window.location.reload();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Text>Loading...</Text>
        <Spinner size="md" />
      </>
    );
  }

  if (error) {
    return <Text>{error}</Text>;
  }

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
          <Input
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
          ></Input>
        </Stack>
        <Stack direction="column" justifyContent={"center"} align="left">
          <Text marginBottom={2}>Last name</Text>
          <Input
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
          ></Input>
        </Stack>
      </Stack>

      <Text>Photo</Text>
      <Input
        name="photo"
        marginY={4}
        placeholder="Type the URL"
        value={formData.photo}
        onChange={handleInputChange}
      ></Input>
      <Text>Bio</Text>
      <Textarea
        name="bio"
        resize={"none"}
        marginY={4}
        h={"50%"}
        value={formData.bio}
        onChange={handleInputChange}
      ></Textarea>
      <Stack
        direction="row"
        justifyContent={"center"}
        align="center"
        marginTop={2}
      >
        <Button
          colorScheme="red"
          variant="solid"
          w={"30%"}
          onClick={handleSubmit}
        >
          Confirm
        </Button>
      </Stack>
    </Box>
  );
}

export default UpdateProfile;
