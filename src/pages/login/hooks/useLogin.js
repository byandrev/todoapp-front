import useUser from "../../../hooks/useUser.js";
import {useMutation} from "react-query";
import * as UserService from "../../../services/UserService.js";
import {useLocation} from "wouter";
import {useToast} from "@chakra-ui/react";
import {useState} from "react";

function useLogin() {
  const [, setLocation] = useLocation()
  const toast = useToast()
  
  const [error, setError] = useState(null)
  const { login } = useUser()

  const loginMutation = useMutation((data) => UserService.login(data.username, data.password), {
    onSuccess: (data) => {
      if (data?.access) {
        login(data.access)
        setLocation('/')
        setError(null)

        toast({
          title: 'Successful login.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      } else {
        setError(data?.detail)
      }
    }
  })
  
  
  return {
    isLoading: loginMutation.isLoading,
    handleLogin: loginMutation.mutate,
    error
  }
}

export default useLogin
