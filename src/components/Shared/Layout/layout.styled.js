import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding-top: ${props => props.theme.header.height};
  min-height: 100vh;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.primaryBg};
  ${({ centerY }) => centerY && css`
    display: flex;
    align-items: center;
  `}
`

export const InnerContainer = styled.div`
  max-width: 1440px;
  min-height: 60vh;
  margin: 0px auto;
  padding: 15px;
  

  @media (min-width: 576px) {
    padding: 15px 20px;
  }

  @media (min-width: 768px) {
    padding: 20px 30px;
  }

  @media (min-width: 993px) {
    padding: 24px 40px;
  }

  @media (min-width: 1024px) {
    padding: 28px 60px;
  }
  
  @media (min-width: 1500px) {
    padding: 28px 30px;
  }
`
