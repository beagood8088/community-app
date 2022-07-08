import styled from "styled-components";

export const PostDetailWrapper = styled.div`
  .title {
    font-size: 28px;
    line-height: 36px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 16px;
    color: white;
  }
  .author {
    text-align: center;
    font-size: 18px;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 12px;
  }
  .pub-date {
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 12px;
  }
  .topic {
    font-weight: 500;
    margin-bottom: 8px;
  }
`
export const PostContentWrapper = styled.div`
  position: relative;
  padding: 8px 16px;
  background-color: ${props => props.theme.colors.headerBg};
  border-radius: 8px;
  textarea {
    font-size: 16px;
    line-height: 22px;
    border: none;
    width: calc(100% - 24px);
    background: transparent;
    color: white;
    min-height: 100px;
  }
  &:hover {
    background-color: ${props => props.theme.colors.secondBg};
  }

  .icons {
    position: absolute;
    z-index: 1;
    cursor: pointer;
    right: 8px;
  }
  .delete {
    top: 8px;
  }
  .edit {
    bottom: 8px;
  }
  .copy {
    bottom: -24px;
  }
  margin-bottom: 36px;
`
export const NewReplyWrapper = styled.div`
  padding-left: 0%;
  textarea {
    border: none;
    border-radius: 8px;
    outline: none;
    padding: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
    width: 100%;
    min-height: 100px;
    margin-bottom: 16px;
  }
  .reply {
    text-align: right;
  }
  @media(min-width: 768px) {
    padding-left: 30%;
  }
`
export const PastRepliesWrapper = styled.div`

`