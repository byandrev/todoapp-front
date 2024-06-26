import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import { UserProvider } from "./context/UserContext.jsx";
import {QueryClient, QueryClientProvider} from "react-query";

import theme from './theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
