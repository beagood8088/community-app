import styled from "styled-components"


export const CommunityContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  @media (min-width: 1400px) {
    flex-direction: row;
    column-gap: 32px;
  }
` 
export const SidePanel = styled.div`
  width: 310px;
`
export const CommunityMainCol = styled.div`
  flex: 1;
`
export const LeftCol = styled(SidePanel)`

`
export const RightCol = styled(SidePanel)`

`
export const CommunityHeaderSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  .btn-group {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    column-gap: 8px;
  }
  margin-bottom: 20px;
`
export const CommunityMainSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 24px;
`
