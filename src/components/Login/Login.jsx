import React from 'react'
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../Shared/Buttons'
import { Input } from '../Shared/Inputs'
import { Layout } from '../Shared/Layout'
import { ArrowRight } from '../Shared/SvgIcons'
import { 
  ErrorWrapper,
  FormBottomContainer, 
  FormController, 
  LoginForm,
  LoginWrapper, 
} from './login.styled'


const schema = yup.object().shape({
  mobilePhone: yup
    .string()
    .matches(/^([0-9]*)$/i, 'Input only digit.')
    .required('Mobile Phone is required.')
    .matches(/^((?:[+?0?0?966]+)(?:\s?\d{2})(?:\s?\d{7}))$/i, 'Not Saudi Arabia Phone number')
}).required();

export const Login = (props) => {
  
  const navigate = useNavigate();
  
  const { control, handleSubmit, getValues, formState: { errors, isValid } } = useForm({
    defaultValues: {
      mobilePhone: '',
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("success", data)

    /**TODO: submit to OTM server to validate phone number */
    navigate('/phone-verification')
  };

  
  return (
    <Layout>
      <LoginWrapper>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <FormController isInValid={!!errors?.mobilePhone}>
            <label>Mobile Phone*</label>
            <div>
              <Controller
                name="mobilePhone"
                control={control}
                render={({ field }) => <Input {...field} placeholder="966561955765" />}
              />
              <ErrorWrapper>{errors?.mobilePhone?.message}</ErrorWrapper>
            </div>
          </FormController>
          
          <FormBottomContainer>
            <Button
              disabled={!isValid || !getValues('mobilePhone')}
              color='rainbow'
              type={'submit'}
            >
              <span>Continue</span>
              <div className='svg-wrapper'>
                <ArrowRight />
              </div>
            </Button>
          </FormBottomContainer>
        </LoginForm>
      </LoginWrapper>
    </Layout>
  )
}