import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const PopoverBody = styled.div`
  background-color: ${props => props.theme.colors.modalBg};
  z-index: 1001;
  border: 1px solid ${props => props.theme.colors.modalBg};
  box-shadow: 0 0 24px rgb(12 31 49 / 35%);
  border-radius: 4px;
  padding: 5px 0px;
`

export const PopoverList = styled.div``

export const PopoverListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 15px;
  cursor: pointer;
  transition: background-color 0.3s linear;
  span {
    color: ${props => props.theme.colors.description};
    font-size: 15px;
    font-weight: 600;
  }

  ${({ bgColor }) => bgColor && css`
    .icon-wrapper {
      background-color: ${bgColor};
    }
    span {
      color: ${bgColor};
    }
  `}

  &:hover {
    background-color: ${props => props.theme.colors.hoverBg};
  }
`

export const IconWrapper = styled.div`
  display: flex;
  height: 35px;
  width: 35px;
  align-items: center;
  align-self: center;
  border-radius: 9999px;
  display: flex;
  fill: #fff;
  justify-content: center;
  margin-right: 8px;

  svg {
    width: 16px !important;
    height: 16px !important;
  }
`
