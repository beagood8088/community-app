import styled, { css } from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: inherit;
`

export const LoginForm = styled.form`
  padding: 30px 20px;
  box-shadow: 0px 2px 30px rgba(215, 224, 235, 0.1);
  border-radius: 12px;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 768px;
    padding: 48px;
  }


`
export const FormController = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  margin-bottom: 20px;
  .logindiv {
    width: 100%;
  }
  label {
    min-width: 120px;
    color: #b6cce2;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  input {
    padding: 10px 15px;
    width: 100%;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    column-gap: 24px;
    align-items: center;
  }

  ${({isInValid}) => isInValid && css`
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

`
export const ErrorWrapper = styled.div`
  margin-top: 8px;
  color: red;
  font-size: 14px;
`
export const FormBottomContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin-top: 36px;

  > button {
    display: flex;
    align-items: center;
    border-radius: 4px;

    svg {
      margin-left: 10px;
      transition: all 0.2s linear;
    }
    &:hover {
      svg {
        transform: translateX(3px);
      }
    }
  }
  @media (min-width: 768px) {
    margin-top: 56px;
    > button {
      height: 55px;
    }
  }
`
