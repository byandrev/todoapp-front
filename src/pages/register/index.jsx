import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  Heading,
  Divider,
  Alert,
  AlertDescription
} from "@chakra-ui/react";
import {Link as LinkWouter} from "wouter";

import useRegister from "./hooks/useRegister.js";

function Register() {
  const { isLoading, handleRegister, error } = useRegister()

  const handleSubmit = (e) => {
    e.preventDefault()

    const username = e.target.username.value
    const password = e.target.password.value
    const email = e.target.email.value

    if (!username || !password || !email) {
      return
    }

    handleRegister({ username, password, email })
  }

  return (
    <Center minH={'calc(100vh - 100px)'}>
      <Box bg={'white'} p={4} rounded={'md'} as="form" onSubmit={handleSubmit} w="90%" maxW="sm" my={4}>
        <Heading as={'h2'} size={'md'}>Register</Heading>
        <Divider my={4} />

        {
          error && <Alert mb={4} rounded={'md'} status='error'>
            <AlertDescription>
              {error}
            </AlertDescription>
          </Alert>
        }

        <FormControl mb={2}>
          <FormLabel color="black">Email</FormLabel>
          <Input type="email" color="black" w="100%" isRequired name='email' placeholder={'jorge@mail.com'} />
        </FormControl>
        
        <FormControl mb={2}>
          <FormLabel color="black">Username</FormLabel>
          <Input type="text" color="black" w="100%" isRequired name='username' placeholder={'jorge'} />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel color="black">Password</FormLabel>
          <Input type="password" color="black" w="100%" isRequired name='password' placeholder={'Password'} />
        </FormControl>

        <Button
          w="full"
          type="submit"
          colorScheme="primary"
          isLoading={isLoading}
          isDisabled={isLoading}
        >
          Register
        </Button>

        <Text mt={4} textAlign="center" color="black">
          You do have an account? <Link as={LinkWouter} to="/login">Login</Link>
        </Text>
      </Box>
    </Center>
  );
}

export default Register;
