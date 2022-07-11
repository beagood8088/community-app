import styled from 'styled-components'

export const Container = styled.div`
  padding: 35px 30px;

  > p {
    color: ${props => props.theme.colors.darkYellow};
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 24px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    margin: 20px 10px;
    height: 44px;
    /* box-shadow: none; */
  }
`