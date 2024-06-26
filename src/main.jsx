import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import { UserProvider } from "./context/UserContext.jsx";

import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <ChakraProvider theme={theme}>
=======
    <UserProvider>
      <ChakraProvider>
>>>>>>> ff8cb9f9a9282c8d9f7dd4f4ececbcf7e564d2a6
        <App />
      </ChakraProvider>
    </UserProvider>
  </React.StrictMode>,
)
