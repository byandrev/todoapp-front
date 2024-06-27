import {Button, Flex, Heading, Spinner} from "@chakra-ui/react";
import {Link} from "wouter";
import useUser from "../hooks/useUser.js";

function Header() {
  const { user, loading, logout } = useUser()
  
  return (
    <Flex maxW={'1000px'} mx={'auto'} justifyContent={'space-between'} alignItems={'center'}>
      <Heading size={'md'} py={4}>TodoApp</Heading>
      
      <Flex gap={4}>
        <Link to={'/'}>Home</Link>

        {
          loading
            ? <Spinner />
            : <>
              {
                !user ? <>
                  <Link to={'/login'}>Login</Link>
                  <Link to={'/register'}>Register</Link>
                </> : <>
                  <Link to={'/profile'}>Profile</Link>
                  <Button onClick={logout} variant={'link'}>Logout</Button>
                </>
              }
            </>
        }
      </Flex>
    </Flex>
  )
}

export default Header

