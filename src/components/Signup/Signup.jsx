import React from 'react'
import { FormBottomContainer } from '../Login/login.styled'
import { Button } from '../Shared/Buttons'
import { Input } from '../Shared/Inputs'
import { Layout } from '../Shared/Layout'
import { ArrowRight } from '../Shared/SvgIcons'
import { 
  FormControllInSignup, 
  Overview, 
  RowContainer, 
  SignupContent, 
  SignupForm, 
  SignupFormWrapper,
} from './signup.styled'

export const Signup = (props) => {
  return (
    <Layout>
      <SignupContent>
        <Overview>
          <div>We are a community for people who work in the F & B industry. You will be connected to thousands of other people in the industry.</div>
        </Overview>
        <SignupFormWrapper>
          <SignupForm>
            <RowContainer>
              <FormControllInSignup>
                <label>First Name*</label>
                <Input 
                />
              </FormControllInSignup>
              <FormControllInSignup>
                <label>Last Name*</label>
                <Input 
                />
              </FormControllInSignup>
            </RowContainer>
            <RowContainer>
              <FormControllInSignup>
                <label>Mobile Phone*</label>
                <Input 
                />
              </FormControllInSignup>
              <FormControllInSignup>
                <label>Email*</label>
                <Input 
                />
              </FormControllInSignup>
            </RowContainer>

            <RowContainer>
              <FormControllInSignup>
                <label>City*</label>
                <Input 
                />
              </FormControllInSignup>
              <FormControllInSignup>
                <label>Branches*</label>
                <Input 
                />
              </FormControllInSignup>
            </RowContainer>

            
            <FormControllInSignup>
            <label>Name of any hospitality groups<br/>you belongs to*</label>
              <Input 
              />
            </FormControllInSignup>

            <FormControllInSignup>
            <label>What best describes you? *</label>
              <Input 
              />
            </FormControllInSignup>


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
          </SignupForm>
        </SignupFormWrapper>
      </SignupContent>
    </Layout>
  )
}