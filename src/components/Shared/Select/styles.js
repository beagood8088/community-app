import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Selected = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  padding: 13px 15px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  span {
    color: ${props => props.theme.colors.black};
  }
  img {
    width: 14px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  ${({ noValue }) => noValue && css`
    span {
      color: #E3E3E3;
    }
  `}
`

export const OptionList = styled.div`
  position: absolute;
  left: 0px;
  width: 100%;
  max-height: 250px;
  overflow: auto;
  border-radius: 8px;
  top: 100%;
  margin-top: 5px;
  z-index: 10;
`

export const Option = styled.div`
  padding: 7px 15px;
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  transition: all 0.3s linear;
  &:hover {
    background-color: ${props => props.theme.colors.backgroundActive};
  }
  ${({ selected }) => selected && css`
    background-color: ${props => props.theme.colors.primaryBoxBg};
  `}
`
