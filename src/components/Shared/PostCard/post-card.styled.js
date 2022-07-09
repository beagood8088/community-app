import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 12px 16px;
  background-color: ${props => props.theme.colors.secondBg};
  border-radius: 3px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  column-gap: 8px;
`
export const VoteWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 8px;
  cursor: pointer;
  svg {
    width: 14px;
    height: 14px;
    fill:  ${props => props.theme.colors.primary};
  }
  .vote-icon {
    padding: 6px 8px;
  }
  .vote-icon.active {
    border: 1px solid red;
    border-radius: 2px;
    svg {
      fill:  ${props => props.theme.colors.red};
    }
  }
  .vote-num {
    color: ${props => props.theme.colors.primary};
  }
  transition: 0.3s ease-out;
  &:hover {
    transform: scale(1.1);
    svg {
      fill:  ${props => props.theme.colors.red};
    }
    .vote-num {
      color: ${props => props.theme.colors.white};
    }
  }
`
export const PostWrapper = styled.div`
  cursor: pointer;
  * {
    color: ${props => props.theme.colors.primary};
    font-size: 14px;
    line-height: 20px;
  }
  .author-info {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 18px;
    margin-bottom: 12px;
    .name {
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
    }
    .city {
      font-size: 16px;
      color: ${props => props.theme.colors.description};
    }
  }
  .post {
    text-align: right;
    & > div {
      padding: 0 8px;
    }
    .header {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      column-gap: 16px;
      .icon svg{
        transform: rotate(180deg);
        fill: white;
        width: 12px;
      }
      margin-bottom: 8px;
    }
    .title {
      font-size: 22px;
      line-height: 30px;
      text-align: right;
      color: white;
      margin-bottom: 8px;
      cursor: pointer;
      transition: .4s ease-out;
      border-radius: 3px;
      display: inline-block;
      &:hover {
        background-color: ${props => props.theme.colors.hoverBg};
      }
    }
    .detail {
      text-align: right;
      margin-bottom: 8px;
      color: ${props => props.theme.colors.description};
    }
    .bottom {
      display: flex;
      flex-direction: row-reverse;
      column-gap: 12px;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        cursor: pointer;
        transition: .4s ease-in-out;
        &:hover {
          background-color: ${props => props.theme.colors.hoverBg};
        }
      }
      svg {
        width: 14px;
        height: 14px;
        fill: white;
        transform: rotate(90deg);
      }
      .reply-num {
        color: ${props => props.theme.colors.description};
        line-height: 28px;
      }
    }
  }
`