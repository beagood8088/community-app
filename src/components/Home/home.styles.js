import styled from 'styled-components'

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`

export const MoreBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const MoreBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 24px;

  span {
    font-weight: 400;
    display: block;
    margin-right: 10px;
    transition: color 160ms;
    font-size: 18px;
    user-select: none;
    white-space: nowrap;
  }
  svg {
    width: 16px;
    fill: ${props => props.theme.colors.primary};
    transition: all 160ms;
  }
  &:hover {
    span {
      color: ${props => props.theme.colors.activePrimary};
    }
    svg {
      fill: ${props => props.theme.colors.activePrimary};
      transform: translateX(3px);
    }
  }
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  margin: 30px 0px 50px 0px;
  max-height: 500px;
`

