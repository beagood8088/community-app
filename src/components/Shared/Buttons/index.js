
import styled, { css, keyframes } from 'styled-components'
import { darken } from 'polished'

const loadingSpineer = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const IconButton = styled.button`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 50%;
  padding: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s ease-in;
  cursor: pointer;
  box-shadow: 0px 6px 30px rgba(0, 117, 255, 0.35);

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  > svg {
    font-size: 24px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.white};
  }

  &:active {
    background-color:  ${({ theme }) => darken(0.04, theme.colors.white)};
    border: 1px solid ${({ theme }) => darken(0.04, theme.colors.white)};
  }

  ${({ naked }) => naked && css`
    background-color: transparent;
    border-color: transparent;
    padding: 2px;
  `}
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  background: #CCC;
  color: #FFF;
  border: 1px solid #CCC;
  border-radius: ${({ borderRadius }) => !borderRadius ? '10px' : borderRadius};
  line-height: 20px;
  padding: 10px 17px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all .2s ease-in;

  &:active {
    background: ${() => darken(0.07, '#CCC')};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ bgtransparent }) => bgtransparent && css`
    background: transparent !important;
    border: 1px solid ${props => props.theme.colors.buttonBorder};
  `}
  ${({ initialIcon }) => initialIcon && css`
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}
    img{
      vertical-align: middle;
    }
    span {
      padding-left: 15%
      ${props => props.theme?.rtl && css`
        padding-right: 15%;
        padding-left: 0
    `}
    }
  `}
  ${({ outline }) => outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
    &:hover {
      background: ${darken(0.07, '#CCC')};
      color: #FFF;
    }
  `}
  ${({ circle }) => circle && css`
    background: #CCC;
    color: #FFF;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
  `}
  ${({ circle, outline }) => circle && outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
  `}

  ${({ color }) => color === 'primary' && css`
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.primary};
    color: #FFF;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 4px 20px rgba(0, 117, 255, 0.35);
    &:hover {
      background: ${props => darken(0.04, props.theme.colors.primary)};
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.primary)};
    }
    ${({ naked }) => naked && css`
      background: transparent;
    `}
  `}

  ${({ color }) => color === 'yellow' && css`
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.yellow};
    color: #FFF;
    border-color: ${props => props.theme.colors.yellow};
    box-shadow: 0px 4px 20px rgba(0, 117, 255, 0.35);
    &:hover {
      background: ${props => darken(0.04, props.theme.colors.yellow)};
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.yellow)};
    }
    ${({ naked }) => naked && css`
      background: transparent;
    `}
  `}

  ${({ color }) => color === 'red' && css`
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.darkRed};
    color: #FFF;
    border-color: ${props => props.theme.colors.darkRed};
    &:hover {
      background: ${props => darken(0.04, props.theme.colors.darkRed)};
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.darkRed)};
    }
    ${({ naked }) => naked && css`
      background: transparent;
    `}
  `}

  ${({ color }) => color === 'darkBlue' && css`
    min-width: 120px;
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.headerBg};
    color: white;
    border-color: ${props => props.theme.colors.headerBg};
    border-radius: 4px;
    &:hover {
      background: ${props => props.theme.colors.darkBlue};
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.darkBlue)};
    }
    ${({ naked }) => naked && css`
      background: transparent;
      border-color: ${props => props.theme.colors.primary};
      color: white;
      &:hover {
        border: none;
      }
    `}
  `}

  ${({ color }) => color === 'rainbow' && css`
    display: flex;
    align-items: center;
    background-image: linear-gradient(to right,#e052a0,#f15c41);
    color: #fff;;
    color: #FFF;
    border-radius: 3px;
    border: none;
    box-shadow: 0px 4px 20px rgba(0, 117, 255, 0.35);
    &:hover {
      background-image: linear-gradient(to right,#3ec7e0,#526bf4);
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.darkBlue)};
    }
    ${({ naked }) => naked && css`
      background: transparent;
    `}
  `}

  ${({ isLoading }) => isLoading && css`
    color: transparent;
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border: 4px solid transparent;
      border-top-color: ${props => props.theme.colors.white};
      border-bottom-color: ${props => props.theme.colors.white};
      border-radius: 50%;
      animation: ${loadingSpineer} 1s linear infinite;
    }
  `}
  
  .svg-wrapper svg{
    height: 14px;
    fill: white;
  }
`