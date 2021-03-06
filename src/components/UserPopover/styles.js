import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 3px;
    overflow: hidden;
  }

`

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.primary};

  .verified {
    font-size: 12px;
    color: ${props => props.theme.colors.green};
    margin-left: 5px;
  }
`

export const IconWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    path {
      fill: ${props => props.theme.colors.primary};
    }
  }
`

export const PopoverBody = styled.div`
  background-color: ${props => props.theme.colors.modalBg};
  z-index: 1001;
  border: 1px solid ${props => props.theme.colors.modalBg};
  box-shadow: 0 0 24px rgb(12 31 49 / 35%);
  border-radius: 4px;
  padding: 5px 0px;
`
export const PopoverHeader = styled.div`
  padding-bottom: 19px;
  border-bottom: 1px solid #E0E0E0;
  p.name {
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: ${props => props.theme.colors.black};
    margin-bottom: 8px;
  }
  p.email {
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;
    color: #757B82;
  }
`

export const PopoverList = styled.div``

export const PopoverListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  cursor: pointer;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${props => props.theme.colors.hoverBg};
  }
  span {
    color: ${props => props.theme.colors.description};
  }
  .icon-wrapper {
    padding: 8px;
    margin-right: 5px;
    svg {
      margin-right: 0;
      width: 20px;
      height: 20px;
      fill: white;
      color: white;
    }
  }
`
