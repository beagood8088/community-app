import React from 'react'
import { ArrowRight } from '../Shared/SvgIcons'
import { Button } from '../Shared'
import { Container, ButtonWrapper, AcceptDocument, UploadRequirement } from './UploadDocument.styled'
import { Description } from './SendDocument.styled'

export const UploadDocument = (props) => {
  const {
    setStep
  } = props

  const handleSubmit = () => {
    setStep(2)
  }

  return (
    <Container>
      <Description>You have to be a verified user to open this post.</Description>
      <Description>To be verified you have to be an F&B shop owner or personnel.</Description>
      <Description>To verify requirement, please upload your proof of identity documents:</Description>
      <AcceptDocument>
        <h2>Accepted documents:</h2>
        <p>1 - Shop Commerical Certificate</p>
        <p>2 - Work ID</p>
        <p>3 - Company ID</p>
      </AcceptDocument>
      <UploadRequirement>
        <p>- Make sure each docuemnt is not more that 200mb size</p>
        <p>- Only send pdf documents or images.</p>
      </UploadRequirement>
      <ButtonWrapper>
        <Button
          color='rainbow'
          onClick={() => handleSubmit()}
        >
          <span>Upload document</span>
          <div className='svg-wrapper'>
            <ArrowRight />
          </div>
        </Button>
      </ButtonWrapper>
    </Container>
  )
}
