import ProfileCard from "../components/ProfileCard";
import { Center } from "@chakra-ui/react";
import UpdateBio from "../components/UpdateBio";
import UpdatePhoto from "../components/UpdatePhoto";

function Profile() {
  return (
    <>
      <Center p={"5%"}>
        <UpdatePhoto></UpdatePhoto>
      </Center>
    </>
  );
}

export default Profile;
