import styled from 'styled-components'

export const Container = styled.div``

export const Description = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: ${props => props.theme.colors.white};
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

export const TotalSubmitted = styled.div`
  margin-top: 120px;
  p {
    text-align: center;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 15px;
  }
`

export const FileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 300px;
  width: 100%;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 10px;
    svg {
      width: 50px;
      height: 50px;
      color: black;
    }
  }
`