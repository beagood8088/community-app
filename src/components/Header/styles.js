import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  background-color: ${props => props.theme.colors.headerBg};
`

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: ${props => props.theme.header.height};
`

export const Logo = styled.div`
  order: 3;
  display: flex;
  margin-left: 24px;
  align-items: center;
  & > img:nth-child(2) {
    display: none;
  }
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.04);
  }

  @media (min-width: 576px) {
    order: 2;
    margin-left: 0;
    column-gap: 14px;
    & > img:nth-child(2) {
      display: inline-block;
    }
  }
`

export const ThreeDashWrapper = styled.div`
  order: 2;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: ${props => props.theme.colors.primary};
    &:hover {
      fill: ${props => props.theme.colors.white};
    }
  }
  @media (min-width: 576px) {
    order: 3;
  }
`
export const UserAvatar = styled.div`
  order: 1;
  flex: 1;
  display: flex;
  column-gap: 4px;
  
  @media (min-width: 576px) {
    flex: none;
  }
` 

export const AuthBtnWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  
  a {
    font-size: 16px;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
`



