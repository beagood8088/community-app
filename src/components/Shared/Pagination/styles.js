import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const PaginationButtonContainer = styled.div`
  display: flex;
  align-items: center;
  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
  `}
`

export const PageButton = styled.button`
  background-color: transparent;
  font-size: 14px;
  color: ${props => props.theme.colors.headingColor};
  background-color: ${props => props.theme.colors.white};
  border: 1px solid #E9EFFC;
  outline: none;
  border: none;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 0 6px;
  cursor: pointer;

  ${props => props.theme?.rtl ? css`
    margin-left: 3px;
  ` : css`
    margin-right: 3px;
  `}

  &:hover {
    background-color: #1507260a;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:active {
    background-color: #1507261a;
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    border: none;
    &:hover {
      background: ${props => darken(0.04, props.theme.colors.primary)};
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.primary)};
    }
  `}

  ${({ noEffect }) => noEffect && css`
    cursor: initial;
    &:hover {
      background-color: transparent;
    }
    &:active {
      background-color: transparent;
    }
  `}
`
export const PreviousButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  margin-right: 34px;

  span {
    font-size: 18px;
    line-height: 120%;
    margin-left: 8px;
  }

  ${({ disabled }) => disabled && css`
    pointer-events: none;
    span {
      color: #757B82;
    }
    svg {
      path {
        fill: #757B82;;
      }
    }
  `}
`
export const NextButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  margin-left: 34px;

  span {
    font-size: 18px;
    line-height: 120%;
    margin-right: 8px;
  }

  svg {
    path {
      fill: ${props => props.theme.colors.headingColor};
    }
  }

  ${({ disabled }) => disabled && css`
    pointer-events: none;
    span {
      color: #757B82;
    }
    svg {
      path {
        fill: #757B82;;
      }
    }
  `}

  &:hover {
    svg {
      path {
        fill: ${props => darken(0.1, props.theme.colors.headingColor)};
      }
    }
    span {
      color: ${props => darken(0.1, props.theme.colors.headingColor)};
    }
  }
`