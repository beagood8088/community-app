import React from 'react'
import { VerifyIcon } from '../Shared/SvgIcons'
import {
  Container,
  VerifyIconWrapper
} from './Submitted.styled'

export const Submitted = () => {
  return (
    <Container>
      <p>Thanks for submittin your documents. Once verified, you will be notified by email.</p>
      <VerifyIconWrapper>
        <VerifyIcon />
      </VerifyIconWrapper>
    </Container>
  )
}
