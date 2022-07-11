import styled from 'styled-components'

export const Container = styled.div``

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

export const Description = styled.p`
  font-size: 16px;
`

export const AcceptDocument = styled.div`
  border: 1px solid ${props => props.theme.colors.lightGray};
  padding: 10px;
  margin-top: 30px;
  > h2 {
    font-size: 20px;
    margin-bottom: 24px;
  }
  > p {
    line-height: 32px;
  }
`

export const UploadRequirement = styled.div`
  margin-top: 25px;
  p {
    font-size: 16px;
    line-height: 24px;
  }
`
