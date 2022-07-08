import styled from "styled-components";
import { LoginForm } from "../Login/login.styled";

export const SMSForm = styled(LoginForm)`
  max-width: 500px;
`
export const SMSTitle = styled.div`
  font-size: 28px;
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
export const NumberInput = styled.input`
  width: 38px;
  height: 38px;
  border-radius: 4px;
  font-size: 24px;
  text-align: center;
`
