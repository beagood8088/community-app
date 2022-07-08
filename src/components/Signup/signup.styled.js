import styled from "styled-components";
import { FormController } from "../Login/login.styled";


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
export const FormControllInSignup = styled(FormController)`
  flex-direction: column;
  justify-content: center;
  align-items: start;
  row-gap: 10px;

  input {
    width: 100%;
  }
  @media(min-width: 768px) {
    flex-direction: row;
    align-items: center;
    column-gap: 24px;
    label {
      min-width: 144px;
    }
  }
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

