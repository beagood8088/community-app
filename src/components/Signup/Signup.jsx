import React, {useState} from 'react'
import Select from 'react-select'
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form'
import { FormBottomContainer } from '../Login/login.styled'
import { Button } from '../Shared/Buttons'
import { Input } from '../Shared/Inputs'
import { Layout } from '../Shared/Layout'
import { ArrowRight } from '../Shared/SvgIcons'
import { 
  ErrorInSignup,
  FormControllerWrapper,
  InputController, 
  Overview, 
  RowContainer, 
  SignupContent, 
  SignupForm, 
  SignupFormWrapper,
} from './signup.styled'
import { schema } from './schema';
import { cityOptions, customStyles, ownerOptions } from './data';

export const Signup = (props) => {

  const [owner, setOwner] = useState()

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      mobilePhone: '',
      email: '',
      city: null,
      branches: '',
      hospitalityGroups: '',
      ownerType: null,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    const newUser = {
      ...data,
      ownerType: owner
    }
    console.log(newUser);
  }

  return (
    <Layout position={{x: null, y: 'center'}}>
      <SignupContent>
        <Overview>
          <div>We are a community for people who work in the F & B industry. You will be connected to thousands of other people in the industry.</div>
        </Overview>
        <SignupFormWrapper>
          <SignupForm onSubmit={handleSubmit(onSubmit)}>
            <RowContainer>
              <FormControllerWrapper>
                <InputController isInValidate={!!errors?.firstName}>
                  <label>First Name*</label>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => <Input {...field} placeholder="Ali"/>}
                  />
                </InputController>
                <ErrorInSignup>
                  <label></label>
                  <p>{errors?.firstName?.message}</p>
                </ErrorInSignup>
              </FormControllerWrapper>
              <FormControllerWrapper>
                <InputController isInValidate={!!errors?.lastName}>
                  <label>Last Name*</label>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => <Input {...field} placeholder="Muslam"/>}
                  />
                </InputController>
                <ErrorInSignup>
                  <label></label>
                  <p>{errors?.lastName?.message}</p>
                </ErrorInSignup>
              </FormControllerWrapper>
            </RowContainer>
            <RowContainer>
              <FormControllerWrapper>
                <InputController isInValidate={!!errors?.mobilePhone}>
                  <label>Mobile Phone*</label>
                  <Controller
                    name="mobilePhone"
                    control={control}
                    render={({ field }) => <Input {...field} placeholder="96656235665"/>}
                  />
                </InputController>
                <ErrorInSignup>
                  <label></label>
                  <p>{errors?.mobilePhone?.message}</p>
                </ErrorInSignup>
              </FormControllerWrapper>
              <FormControllerWrapper>
                <InputController isInValidate={!!errors?.email}>
                  <label>Email*</label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <Input {...field} placeholder="email@example.com"/>}
                  />
                </InputController>
                <ErrorInSignup>
                  <label></label>
                  <p>{errors?.email?.message}</p>
                </ErrorInSignup>
              </FormControllerWrapper>
            </RowContainer>
            <RowContainer>
              <FormControllerWrapper>
                <InputController style={{ color: 'black' }} isInValidate={!!errors?.city}>
                  <label>City*</label>
                  <div style={{width: '100%'}}>
                    <Controller 
                      name="city"
                      control={control}
                      render={({ field }) =>
                        <Select
                          {...field}
                          styles={customStyles}
                          menuPlacement="auto"
                          menuPosition="fixed"
                          defaultValue={null}
                          placeholder="Select city..."
                          options={cityOptions}
                        />
                      }
                    />
                  </div>
                </InputController>
                <ErrorInSignup>
                  <label></label>
                  <p>{errors?.city?.message}</p>
                </ErrorInSignup>
              </FormControllerWrapper>
              <FormControllerWrapper>
                <InputController isInValidate={!!errors?.branches}>
                  <label>Branches*</label>
                  <Controller
                    name="branches"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </InputController>
                <ErrorInSignup>
                  <label></label>
                  <p>{errors?.branches?.message}</p>
                </ErrorInSignup>
              </FormControllerWrapper>
            </RowContainer>
            <RowContainer>
              <FormControllerWrapper>
                <InputController isInValidate={!!errors?.hospitalityGroups}>
                  <label>Name of any hospitality groups<br/>you belongs to*</label>
                </InputController>
              </FormControllerWrapper>
              <FormControllerWrapper>
                <InputController isInValidate={!!errors?.hospitalityGroups}>
                  <label></label>
                  <Controller
                    name="hospitalityGroups"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </InputController>
                <ErrorInSignup>
                  <label></label>
                  <p>{errors?.hospitalityGroups?.message}</p>
                </ErrorInSignup>
              </FormControllerWrapper>
            </RowContainer>
            <RowContainer>
              <FormControllerWrapper>
                <InputController style={{ color: 'black' }}>
                  <label></label>
                  <div style={{width: '100%'}}>
                    <Controller 
                      name="ownerType"
                      control={control}
                      render={({ field }) =>
                        <Select
                          {...field}
                          styles={customStyles}
                          menuPlacement="auto"
                          menuPosition="fixed"
                          value={owner}
                          onChange={(newValue) => setOwner(newValue)}
                          options={ownerOptions}
                          placeholder={"What best describle for you?"}
                        />
                      }
                    />
                  </div>
                </InputController>
                <ErrorInSignup>
                  <label></label>
                  <p>{errors?.ownerType?.message}</p>
                </ErrorInSignup>
              </FormControllerWrapper>
            </RowContainer>
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