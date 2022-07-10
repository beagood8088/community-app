import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import { useSession } from '../../contexts/SessionContext'
import { FormBottomContainer, LoginWrapper } from '../Login/login.styled'
import { Button } from '../Shared/Buttons'
import { Layout } from '../Shared/Layout/Layout'
import { ArrowRight } from '../Shared/SvgIcons'
import { IncorrectOPTCodeMessage, InputWrapper, NumberInput, SMSForm, SMSTitle } from './phone.styled'

/** use this if OTP code is correct or not to see incorrect message */
const isValidOTPCode = true


export const PhoneVerification = (props) => {


  const [, {login}] = useSession()
  const navigate = useNavigate()

  const [smsCodes, setSmsCodes] = useState(["", "", "", ""])
  const [isValid, setIsValid] = useState(false)

  const refs = [useRef(), useRef(), useRef(), useRef()]

  const handleInputChange = (index, value) => {
    setSmsCodes(smsCodes.map((val, i) => index === i ? value : val))
    if(value && index < 3) {
      refs[index+1].current.element.focus()
      refs[index+1].current.element.select()
    }
  }

  const handleFocus = (index) => {
    if (smsCodes[index]) {
      refs[index].current.element.select()
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(smsCodes);

    if(!isValidOTPCode) {
      return false
    }

    /**TODO: submit to OTM server to validate phone number */
    setSmsCodes(["", "", "", ""])
    login()
    navigate('/community')
  };

  useEffect(() => {
    setIsValid(validateInputs())
  }, [smsCodes])

  const validateInputs = () => {
    for (let i = 0; i < smsCodes.length; i++) {
      if (!smsCodes[i]) {
        return false;
      }
    }
    return true;
  }



  return (
    <Layout>
      <LoginWrapper>
        <SMSForm onSubmit={(e) => handleSubmit(e)}>
          <SMSTitle>Please Enter the SMS Code Sent to Your Mobile Phone</SMSTitle>
          <InputWrapper>
            <div className='inner'>
              {[...Array(4).keys()].map(index => (
                <NumberInput
                  key={index}
                  onFocus={() => handleFocus(index)}
                  type='tel'
                  name={`sms${index}`}
                  mask={"0"}
                  ref={refs[index]}
                  value={smsCodes[index]}
                  onAccept={(value) => handleInputChange(index, value)}
                />
              ))}
              
            </div>
          </InputWrapper>
          <FormBottomContainer>
            <Button
              disabled={!isValid}
              color='rainbow'
              type={'submit'}
            >
              <span>Continue</span>
              <div className='svg-wrapper'>
                <ArrowRight />
              </div>
            </Button>
          </FormBottomContainer>

          {!isValidOTPCode && <IncorrectOPTCodeMessage>
            Sorry, code is incorrect
          </IncorrectOPTCodeMessage>}
        </SMSForm>
      </LoginWrapper>
    </Layout>
  )
}
