import React, { useState, useRef } from 'react'
import { ArrowRight } from '../Shared/SvgIcons'
import { Button } from '../Shared'
import {
  Container,
  FormController,
  ButtonWrapper,
  ErrorMessage
} from './UploadDocument.styled'
import { isLess200MB } from '../../utils'

export const UploadDocument = (props) => {
  const {
    setStep
  } = props

  const inputRef = useRef()
  const [file, setFile] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  const handleChange = (event) => {
    let allowedExtension = ['image/jpeg', 'image/jpg', 'image/png','image/gif','image/bmp']
    if (!((event.target.files[0].type === 'application/pdf') || (allowedExtension.indexOf(event.target.files[0].type) > -1))) {
      setErrorMsg('The field is only accepted pdf or image format!')
      return;
    }
    // File size validation
    if (!isLess200MB(event.target.files[0])) {
      setErrorMsg('Maximum fie size is 200Mbyte!')
      return;
    }
    setErrorMsg(null)
    setFile(event.target.files[0])
  }

  const handleSubmit = () => {
    if (!file) {
      setErrorMsg('The field is required*')
      return
    }
    setErrorMsg(null)
    setStep && setStep(2)
  }

  return (
    <Container>
      <FormController>
        <span>{file?.name ?? 'Choose file'}</span>
        <input
          type='file'
          name="file"
          id="file"
          accept='.pdf, .png, .jpg, .jpeg'
          ref={inputRef}
          onChange={handleChange}
        />
        <Button color='rainbow' onClick={() => inputRef?.current && inputRef.current.click()}>Browse</Button>
      </FormController>
      {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
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
