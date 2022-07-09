import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../../contexts/SessionContext'
import { FormBottomContainer, LoginWrapper } from '../Login/login.styled'
import { Button } from '../Shared/Buttons'
import { Layout } from '../Shared/Layout/Layout'
import { ArrowRight } from '../Shared/SvgIcons'
import { InputWrapper, NumberInput, SMSForm, SMSTitle } from './phone.styled'


export const PhoneVerification = (props) => {
  const [, {login}] = useSession()
  const navigate = useNavigate()

  const [smsCodes, setSmsCodes] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // if sms is corrct
    login()
    navigate('/')
  }
  return (
    <Layout>
      <LoginWrapper>
        <SMSForm onSubmit={(e) => handleSubmit(e)}>
          <SMSTitle>Please Enter the SMS Code Sent to Your Mobile Phone</SMSTitle>
          <InputWrapper>
            <div className='inner'>
              <NumberInput
              />
              <NumberInput
              />
              <NumberInput
              />
              <NumberInput
              />
            </div>
          </InputWrapper>
          <FormBottomContainer>
            <Button
              color='rainbow'
              type={'submit'}
            >
              <span>Continue</span>
              <div className='svg-wrapper'>
                <ArrowRight />
              </div>
            </Button>
          </FormBottomContainer>
        </SMSForm>
      </LoginWrapper>
    </Layout>
  )
}
