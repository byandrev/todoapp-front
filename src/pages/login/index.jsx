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

import useLogin from "./hooks/useLogin.js";

function Login() {  
  const { isLoading, handleLogin, error } = useLogin()
  
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const username = e.target.username.value
    const password = e.target.password.value
    
    if (!username || !password) {
      return
    }
    
    handleLogin({ username, password })
  }
  
  return (
    <Center minH={'calc(100vh - 100px)'}>
    <Box bg={'white'} p={4} rounded={'md'} as="form" onSubmit={handleSubmit} w="90%" maxW="sm" my={4}>
      <Heading as={'h2'} size={'md'}>Login</Heading>
      <Divider my={4} />

      {
        error && <Alert mb={4} rounded={'md'} status='error'>
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
      }
      
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
        Login
      </Button>

      <Text mt={4} textAlign="center" color="black">
        You do not have an account? <Link as={LinkWouter} to="/register">Sign up</Link>
      </Text>
    </Box>
    </Center>
  );
}

export default Login;
