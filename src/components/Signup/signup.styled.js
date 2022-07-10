import styled, { css } from "styled-components";
import { ErrorWrapper, FormController } from "../Login/login.styled";


export const SignupContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  
  @media(min-width: 1024px) {
    flex-direction: row;
    column-gap: 20px;
  }
`
export const Overview = styled.div`
  flex: 1;
  div {
    font-size: 18px;
    line-height: 28px;
    font-weight: bolder;
  }
  position: relative;
  align-items: stretch;
  height: 100%;
  @media(min-width: 768px) {
    div {
      font-size: 24px;
      line-height: 38px;
      font-weight: bolder;
    }
  }
  @media(min-width: 1024px) {
    div {
      font-size: 28px;
      line-height: 48px;
      font-weight: bolder;
    }
  }
`
export const SignupFormWrapper = styled.div`
  flex: 2;
`
export const SignupForm = styled.form`
`
export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0;
  @media(min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    column-gap: 44px;
    & > div {
      flex: 1;
    }
  }
`
export const FormControllerWrapper = styled.div`
  margin-bottom: 20px;
  @media(min-width: 1024px) {
    margin-bottom: 30px;
  }
  @media(min-width: 1200px) {
    margin-bottom: 40px;
  }
  @media(min-width: 1400px) {
    margin-bottom: 50px;
  }
`
export const InputController = styled(FormController)`
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  row-gap: 6px;
  input {
    width: 100%;
    /* transition: .2s ease-in; */
    border-radius: 2px;
  }
  label {
    margin-bottom: 0px;
  }
  margin-bottom: 0;
  ${({ isInValidate }) => isInValidate && css`
    input {
      border: 2px solid red;
      outline: none;
      &:focus {
        border: 2px solid red;
        border-left: 4px solid darkgreen;
      }
    }
  `}
  @media(min-width: 768px) {
    flex-direction: row;
    align-items: center;
    column-gap: 0px;
    label {
      min-width: 144px;
    }
  }
`
export const ErrorInSignup = styled(ErrorWrapper)`
  display: flex;
  label {
    display: none;
  }
  @media(min-width: 768px) {
    label {
      display: block;
      min-width: 144px;
    }
  }
  
`

