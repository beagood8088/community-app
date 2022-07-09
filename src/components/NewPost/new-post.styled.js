import styled, { css } from "styled-components";
import { FormController } from "../Login/login.styled";
import { FormBottomContainer } from "../Login/login.styled";


export const PostForm = styled.form`
  margin-top: 20px;
  @media(min-width: 768px) {
    margin-top: 40px;
  }
  @media(min-width: 1200px) {
    margin-top: 60px;
  }
`
export const PostHeader = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 44px;
`
export const InputController = styled(FormController)`
  flex-direction: row-reverse;
  label {
    text-align: right;
    width: 80px;
  }
  input {
    text-align: right;
  }
  ${({ isInValidate }) => isInValidate && css`
    input {
      border: 2px solid red;
      outline: none;
      &:focus {
        border: 2px solid red;
      }
    }
    label {
      color: red;
    }
  `}
  margin-bottom: 0;
`
export const ErrorWrapper = styled.div`
  margin-top: 8px;
  padding-right: 80px;
  text-align: right;
  color: red;
  font-size: 14px;
  @media(min-width: 568px) {
    padding-right: 105px;
  }
`
export const PostBody = styled.div`
  background-color: ${props => props.theme.colors.headerBg};
  max-width: 1024px;
  margin: 0 auto;
  .post-editor-wrapper {
    min-height: 340px;
    .post-editor {
      padding: 0 16px;
    }
  }
`
export const FormControllerWrapper = styled.div`
  margin-bottom: 20px;
`
export const FormBottomContainerInPost = styled(FormBottomContainer)`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  button {
    min-width: 140px;
  }
`
export const FormControllerUpload = styled(FormBottomContainer)`
  max-width: 1024px;
  margin: 10px auto;
  flex-direction: row-reverse;
  justify-content: start;
  input {
    width: 0;
    height: 0;
    opacity: 0;
  }
  label {
    width: 30px;
    cursor: pointer;
    svg path{
      fill: white;
    }
  }
`