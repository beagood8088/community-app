import styled from "styled-components";

export const UserInfoWrapper = styled.div`
  background-color: ${props => props.theme.colors.secondBg};
  padding: 24px;
  .title {
    text-align: right;
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    margin-bottom: 24px;
  }
`
export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    flex: 1;
  }
  &:last-child {
    margin-top: 24px;
  }
  @media(min-width: 768px) {
    flex-direction: row-reverse;  
  }
`

export const InfoController = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  column-gap: 32px;
  label {
    font-size: 18px;
    font-weight: 700;
    text-align: right;
  }
  div {
    color: ${props => props.theme.colors.primary};
  }
  @media(min-width: 768px) {
    justify-content: unset;  
  }
  
  .edit-wrapper {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 24px;
    svg path {
      stroke: white;
    }
  }
  margin-bottom: 16px;
`
export const HistoryWrapper = styled.div`
  margin-top: 24px;
  text-align: right;
  .title {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    margin-bottom: 24px;
  }
`
export const HistoryCardWrapper = styled.div`
  padding: 0 0px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  @media(min-width: 768px) {
    padding: 0 60px;  
  }
`
export const HistoryCard = styled.div`
  
  border-radius: 4px;
  .reply-date {
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 8px;
  }
  .post-title {
    background-color: ${props => props.theme.colors.secondBg};
    padding: 8px 10px;
    font-size: 18px;
    line-height: 32px;
    color: ${props => props.theme.colors.grayPrimary2};
  }
`