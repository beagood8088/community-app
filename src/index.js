import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { Router } from './router'
import theme from './theme.json'
import { ThemeProvider } from './contexts/ThemeContext'
import { SessionProvider } from './contexts/SessionContext'

/**
 * Theme images
 */
import logo from './assets/images/logo.svg'
import logoTitle from './assets/images/logo-title.svg'

import heroBg from './assets/images/hero-bg.jpg'
 
 /**
  * Theme icons
  */
 import downArrow from './assets/icons/down-arrow.png'
 
 theme.images = {
  logo,
  logoTitle,
  heroBg
 }
 
 theme.icons = {
  downArrow
 }

 const queryClient = new QueryClient();

const RouteApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SessionProvider>
          <Router />
          <ReactQueryDevtools  position="bottom-right" />
        </SessionProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouteApp />
)
