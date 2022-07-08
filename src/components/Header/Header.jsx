import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { useSession } from '../../contexts/SessionContext'
import { UserPopover } from '../UserPopover'
import {
  Container,
  InnerContainer,
  Logo,
  UserAvatar,
  ThreeDashWrapper,
  AuthBtnWrapper
} from './styles'

export const Header = () => {
  const theme = useTheme()

  const containerRef = useRef()
  const [{ auth }] = useSession()
  return (
    <>
      <Container ref={containerRef}>
        <InnerContainer>
          <UserAvatar>
            {auth && <>
              <UserPopover />
            </>}
            {!auth && <>
              <AuthBtnWrapper>
                <Link to={'/login'}>Log In</Link>
                <Link to={'/signup'}>Sign Up</Link>
              </AuthBtnWrapper>
            </>}
          </UserAvatar>
          <Logo onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
            <img src={theme.images.logo} alt='logo' height={30}/>
            <img src={theme.images.logoTitle} alt='logo' height={25} />
          </Logo>
          <ThreeDashWrapper>
            <MenuIcon />
          </ThreeDashWrapper>
        </InnerContainer>
      </Container>
    </>
  )
}

const MenuIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember5049" className="nav-menu__icon ember-view">
      <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"></path>
    </svg>
  )
}
