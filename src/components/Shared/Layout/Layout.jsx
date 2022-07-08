import React from 'react'
import { Container, InnerContainer } from './layout.styled'


export const Layout = (props) => {
  return (
    <Container>
      <InnerContainer>
        {props.children}
      </InnerContainer>
    </Container>  
  )
}