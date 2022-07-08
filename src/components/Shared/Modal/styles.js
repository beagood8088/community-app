import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 1001;
`

export const CloseIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 769px) {
    left: 25px;
    top: 20px;
    svg {
      width: 25px;
      height: 25px;
    }
  }

  @media (min-width: 769px) {
    left: 30px;
    top: 25px;
    svg {
      width: 35px;
      height: 35px;
    }
  }

  @media (min-width: 1440px) {
    left: 60px;
    top: 48px;
    svg {
      width: 48px;
      height: 48px;
    }
  }
`

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${props => props.theme.colors.primary};
  ${({ isSecundry }) => isSecundry && css`
    background-color: ${props => props.theme.colors.lightRed};;
  `}
  padding: 20px 15px;

  @media (min-width: 576px) {
    padding: 25px 30px;
  }

  @media (min-width: 769px) {
    padding: 30px;
  }

  @media (min-width: 1440px) {
    padding: 50px 60px;
  }
`
