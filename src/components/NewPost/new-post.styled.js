import styled from "styled-components";
import { FormController } from "../Login/login.styled";
import { FormBottomContainer } from "../Login/login.styled";

export const PostForm = styled.form`
  
`
export const PostHeader = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 20px;
`
export const PostBody = styled.div`
  background-color: ${props => props.theme.colors.headerBg};
`

export const FormControllerInPost = styled(FormController)`
  flex-direction: row-reverse;
  label {
    width: 80px;
  }
  input {
    text-align: right;
  }
`
export const FormBottomContainerInPost = styled(FormBottomContainer)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  button {
    min-width: 140px;
  }
`
export const FormControllerUpload = styled(FormBottomContainer)`
  margin-top: 10px;
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