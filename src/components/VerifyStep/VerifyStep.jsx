import React from 'react'
import { useState } from 'react'
import { SendDocument } from './SendDocument'
import { Submitted } from './Submitted'
import { UploadDocument } from './UploadDocument'
import {
  Container
} from './VerifyStep.styled'

export const VerifyStep = () => {
  const [step, setStep] = useState(1)

  return (
    <Container>
      <h1>Verify</h1>
      {step === 1 && <UploadDocument setStep={setStep} />}
      {step === 2 && <SendDocument setStep={setStep} />}
      {step === 3 && <Submitted setStep={setStep} />}
    </Container>
  )
}
