import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import { UserProvider } from "./context/UserContext.jsx";

import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </UserProvider>
  </React.StrictMode>,
)
