import React from 'react'
import { Button } from '../Buttons'
import {
  Container,
  ButtonWrapper
} from './styles'

export const Confirm = (props) => {
  const {
    onClose,
    onAccept,
    onCancel
  } = props

  const handleDelete = () =>{
    onAccept()
    onClose()
  }

  const handleCancel = () => {
    onCancel()
    onClose()
  }

  return (
    <Container>
      <p>Are you sure you want to delete your account?</p>
      <ButtonWrapper>
        <Button onClick={handleDelete} color='rainbow'>Delete</Button>
        <Button onClick={handleCancel} color='dark'>Cancel</Button>
      </ButtonWrapper>
    </Container>
  )
}
