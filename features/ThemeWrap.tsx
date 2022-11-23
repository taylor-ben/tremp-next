import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import rtlPlugin from 'stylis-plugin-rtl'
import { prefixer } from 'stylis'

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#3b4e68',
    },
    secondary: {
      main: '#e76a36',
    },
  },
})

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

export const ThemeWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div>{children}</div>
      </ThemeProvider>
    </CacheProvider>
  )
}
