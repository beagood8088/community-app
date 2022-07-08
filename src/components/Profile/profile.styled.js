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
  & > div {
    flex: 1;
  }
`

export const InfoController = styled.div`
  display: flex;
  column-gap: 32px;
  label {
    
  }
`
