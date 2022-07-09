import React from 'react'
import { ArrowRight, FileIcon } from '../Shared/SvgIcons'
import { Button } from '../Shared'
import {
  Container,
  ButtonWrapper,
  Description,
  TotalSubmitted,
  FileWrapper
} from './SendDocument.styled'

export const SendDocument = (props) => {
  const {
    setStep
  } = props
  const handleSubmit = () => {
    setStep && setStep(3)
  }

  return (
    <Container>
      <Description>You will be notified by email when your request is approved</Description>
      <TotalSubmitted>
        <p>Total documents submitted:</p>
        <p>2</p>
      </TotalSubmitted>
      <FileWrapper>
        <div>
          <FileIcon />
        </div>
        <div>
          <FileIcon />
        </div>
        <div>
          <FileIcon />
        </div>
      </FileWrapper>
      <ButtonWrapper>
        <Button
          color='rainbow'
          onClick={() => handleSubmit()}
        >
          <span>Send</span>
          <div className='svg-wrapper'>
            <ArrowRight />
          </div>
        </Button>
      </ButtonWrapper>
    </Container>
  )
}
