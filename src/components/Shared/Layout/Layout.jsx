import React from 'react'
import { Container, InnerContainer } from './layout.styled'


export const Layout = (props) => {
  const {
    position
  } = props
  return (
    <Container centerY={position?.y && position?.y === 'center' ? true : false}>
      <InnerContainer>
        {props.children}
      </InnerContainer>
    </Container>  
  )
}