import React from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../Shared/Buttons'
import { Input } from '../Shared/Inputs'
import { Layout } from '../Shared/Layout'
import { ArrowRight } from '../Shared/SvgIcons'
import { 
  FormBottomContainer, 
  FormController, 
  LoginForm,
  LoginWrapper, 
} from './login.styled'



const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("Phone number is a required"),
});

export const Login = (props) => {
  
  const navigate = useNavigate();
  
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      phoneNumber: '',
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data)
    navigate('/phone-verification')
  };

  
  return (
    <Layout>
      <LoginWrapper>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <FormController isValid={!errors?.phoneNumber}>
            <label>Mobile Phone*</label>
            <Input 
              {...register('phoneNumber')}
            />
          </FormController>
          <p>{errors?.phoneNumber?.message}</p>
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
        </LoginForm>
      </LoginWrapper>
    </Layout>
  )
}