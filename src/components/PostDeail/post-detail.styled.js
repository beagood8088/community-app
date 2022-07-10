import styled, { css } from "styled-components";


export const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`
export const PostMetaWrapper = styled.div`
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
  padding: 16px 40px 16px 16px;
  border: 3px solid #233b53;
  background-color: ${props => props.theme.colors.headerBg};
  border-radius: 8px;
  &:hover {
    /* background-color: ${props => props.theme.colors.secondBg}; */
  }

  .action-icons {
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
    fill: ${props => props.theme.colors.primary};
    right: 0;
    bottom: -38px;
    div {
      color: ${props => props.theme.colors.success};
      font-weight: 600;
    }
  }
  
  margin-bottom: 46px;
`
export const PostContentContainer = styled.div`

`
export const PostContent = styled.div`
  font-size: 18px;
  line-height: 32px;
  ${({reply}) => reply && css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  `}
`
export const NewReplyWrapper = styled.div`
  padding-left: 0%;
  .reply {
    display: flex;
    justify-content: flex-end;
  }
  @media(min-width: 768px) {
    padding-left: 30%;
  }
`
export const ReplyHistoryContainer = styled.div`
  margin-top: 32px;
  .total-replies {
    display: flex;
    align-items: center;
    column-gap: 16px;
    svg {
      fill: ${props => props.theme.colors.primary};
    }
    span {
      font-size: 22px;
    }
  }
`
export const ReplyHistoryWrapper = styled.div`
  margin-top: 8px;
  border: 2px solid #233b53;
  padding: 30px;
`
export const ReplyContent = styled.div`
  width: 70%;
  & > div {
    margin-bottom: 0;
  }
  .reply-btn {
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;
  }
  ${({replyToAuthor}) => replyToAuthor && css`
    margin-left: auto;
    .reply-btn {
      display: none;
    }
  `}
  .action-icons {
    display: none;
  }
  ${({myReply}) => myReply && css`
    .action-icons {
      display: block;
    }
  `}
  margin-bottom: 21px;
`
