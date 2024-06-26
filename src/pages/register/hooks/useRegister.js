import {useMutation} from "react-query";
import * as UserService from "../../../services/UserService.js";
import {useLocation} from "wouter";
import {useToast} from "@chakra-ui/react";
import {useState} from "react";

function useRegister() {
  const [, setLocation] = useLocation()
  const toast = useToast()

  const [error, setError] = useState(null)

  const mutation = useMutation((data) => UserService.register(data), {
    onSuccess: () => {
      setLocation('/login')
      setError(null)

      toast({
        title: 'Successful register.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }, onError: (data) => {
      setError(data.message)
    }
  })


  return {
    isLoading: mutation.isLoading,
    handleRegister: mutation.mutate,
    error
  }
}

export default useRegister
