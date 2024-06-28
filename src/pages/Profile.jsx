import ProfileCard from "../components/ProfileCard";
import { Center } from "@chakra-ui/react";

function Profile() {
  return (
    <>
      <Center mt={'2rem'}>{<ProfileCard></ProfileCard>}</Center>
    </>
  );
}

export default Profile;
