import styled from 'styled-components'

export const Container = styled.div``

export const FormController = styled.div`
  padding: 5px 5px 5px 15px;
  background-color: ${props => props.theme.colors.headerBg};
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: 400;
    font-size: 16px;
    color: #dde1e4;
    flex: 1;
    margin-right: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  button {
    font-weight: 700;
    font-size: 16px;
    padding: 12px 18px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  button {
    height: 48px;
    display: flex;
    align-items: center;
  }
  .svg-wrapper {
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ErrorMessage = styled.span`
  margin-top: 10px;
  font-size: 14px;
  display: block;
  color: #F55555;
`