import { extendTheme } from '@chakra-ui/react'

const override = {
  global: () => ({
    html: {
      scrollBehavior: 'smooth'
    },
    body: {
      backgroundColor: 'rgb(255 255 255)',
      minHeight: '100vh'
    }
  })
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  styles: override
}

const theme = extendTheme(config)

export default theme
