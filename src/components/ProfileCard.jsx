import { Box, Text, Image, Modal, useDisclosure } from "@chakra-ui/react";
import {
  Button,
  ModalOverlay,
  Stack,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Spinner,
} from "@chakra-ui/react";
import "@fontsource/raleway";
import useUser from "../hooks/useUser";
import { getUserInfo } from "../services/UserService";
import React, { useState, useEffect } from "react";
import UpdateProfile from "./UpdateProfile";

function ProfileCard() {
  const { token } = useUser();
  const modalUpdate = useDisclosure();

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

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
          {userInfo.username}
        </Text>
        <Text paddingBottom={5} color={"gray.500"}>
          {userInfo.email}
        </Text>
        <Image
          padding={2}
          borderRadius="full"
          boxSize="150px"
          src={userInfo.photo ? userInfo.photo : "src/assets/img/profile.png"}
        />
        <Text fontWeight={"bold"} fontSize={"1.1rem"} paddingY={5}>
          Biography
        </Text>
        <Text>{userInfo.bio ? userInfo.bio : "No biography available."}</Text>
        <Box
          paddingTop={7}
          w={"100%"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
        >
          <Text>Last login:</Text>
          <Text>{userInfo.lastLogin ? userInfo.lastLogin : "-"}</Text>
        </Box>
        <Stack
          direction="row"
          justifyContent={"flex-end"}
          align="center"
          paddingTop={7}
        >
          <Button
            colorScheme="red"
            variant="solid"
            onClick={modalUpdate.onOpen}
          >
            Update profile
          </Button>
        </Stack>
      </Box>
      <Modal
        isOpen={modalUpdate.isOpen}
        onOpen={modalUpdate.onOpen}
        onClose={modalUpdate.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <UpdateProfile></UpdateProfile>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfileCard;
