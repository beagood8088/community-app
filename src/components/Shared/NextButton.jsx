import styled from "styled-components"

export const NextButton = (props) => {
  return (
    <NextButtonWrapper>
      {props.children}
    </NextButtonWrapper>
  )
} 

export const NextButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  column-gap: 12px;
  cursor: pointer;
  div {
    color: white;
    font-weight: 600;
    line-height: 18px;
  }
  .icon svg{
    width: 9px;
    fill: #fff;
  }
  @keyframes joinButtonArrowSvgGyration {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(3px);
    }
  }
  &:hover {
    .icon svg {
      animation: joinButtonArrowSvgGyration .9s infinite;
      fill: ${props => props.theme.colors.primary};
    }
    div {
      color: ${props => props.theme.colors.primary};
    }
  }
`