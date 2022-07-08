import React, { useEffect } from 'react'
import { Close } from '../SvgIcons'
import {
  Container,
  CloseIcon,
  InnerContainer
} from './styles'

export const Modal = (props) => {
  const {
    isSecundry,
    children,
    onClose
  } = props

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = 'auto'
  }, [])

  return (
    <Container>
      <InnerContainer isSecundry={isSecundry}>
        <CloseIcon onClick={() => onClose && onClose()}>
          <Close />
        </CloseIcon>
        {children}
      </InnerContainer>
    </Container>
  )
}
