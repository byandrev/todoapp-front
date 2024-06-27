import { Card, CardBody, Heading  } from '@chakra-ui/react'

function UserCard() {
  return (
    <>
      <Card variant='filled' backgroundColor='transparent' borderWidth='2px' borderColor='rgba(190, 190, 190, 0.63)'>
        <CardBody py={2}>
          <Heading size='md'>Welcome, Yerry Mina.</Heading>
          <Heading size='sm'>To Do APP</Heading>
        </CardBody>
      </Card>
    </>
  );
}

export default UserCard;
