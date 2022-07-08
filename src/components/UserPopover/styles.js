import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  display: flex;
  padding: 3px 10px;
  border: 1px solid white;
  border-radius: 4px;
  align-items: flex-end;
  column-gap: 4px;
  .user-name {
    font-size: 20px;
    line-height: 20px;
    font-weight: 500;
    color: white;
  }
  .is-verified {
    font-size: 12px;
    color: ${props => props.theme.colors.green};

  }
`

export const PopoverBody = styled.div`
  color: #b6cce2;
  background-color: ${props => props.theme.colors.modalBg};
  z-index: 1001;
  border: 1px solid ${props => props.theme.colors.modalBg};
  box-shadow: 0px 2px 30px rgba(215, 224, 235, 0.5);
  border-radius: 4px;
  padding: 18px;
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

export const PopoverList = styled.div`
  padding: 10px 0;
  margin-bottom: 8px;
`

export const PopoverListItem = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
  .icon-wrapper {
    padding: 8px;
    svg {
      margin-right: 0;
      width: 20px;
      height: 20px;
      fill: white;
      color: white;
    }
  }
`
