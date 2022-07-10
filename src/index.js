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

import homeHero from './assets/images/home-hero.jpg'
import missionVision from './assets/images/mission-vision.jpg'
import qibixLogo from './assets/images/qibix-logo.png'
import technicalSpecifications from './assets/images/technical-specifications.png'
import heroBg from './assets/images/hero-bg.jpg'
 
 /**
  * Theme icons
  */
 import setUp from './assets/icons/setup.png'
 import support from './assets/icons/support.png'
 import reliable from './assets/icons/reliable.png'
 import comma from './assets/icons/comma.png'
 import deleteIcon from './assets/icons/delete.png'
 import editIcon from './assets/icons/edit.png'
 import downArrow from './assets/icons/down-arrow.png'
 
 theme.images = {
  logo,
  logoTitle,
  homeHero,
  missionVision,
  qibixLogo,
  technicalSpecifications,
  heroBg
 }
 
 theme.icons = {
  setUp,
  support,
  reliable,
  comma,
  deleteIcon,
  editIcon,
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
