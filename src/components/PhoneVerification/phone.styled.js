import styled from "styled-components";
import { LoginForm } from "../Login/login.styled";
import { IMaskInput } from 'react-imask';
export const SMSForm = styled(LoginForm)`
  max-width: 500px;
`
export const SMSTitle = styled.div`
  font-size: 26px;
  font-weight: 700;
  line-height: 38px;
  margin-bottom: 32px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
` 

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  .inner {
    align-items: center;
    display: flex;
    column-gap: 14px;
  }
`
export const NumberInput = styled(IMaskInput)`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  font-size: 24px;
  text-align: center;
  outline: none;
  border: none;
  &:focus {
    box-shadow: 0 0 3px 3px #4799eb;
  }
`
export const IncorrectOPTCodeMessage = styled.div`
  margin-top: 24px;
  font-size: 22px;
  color: red;
  text-align: center;
`
