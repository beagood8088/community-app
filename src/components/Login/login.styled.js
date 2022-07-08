import styled from 'styled-components'

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

  .svg-wrapper svg{
    height: 14px;
    fill: white;
  }
`
export const FormController = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  margin-bottom: 20px;
  label {
    color: #b6cce2;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 0;
  }
  input {
    padding: 10px 15px;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    column-gap: 24px;
    align-items: center;
  }

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
