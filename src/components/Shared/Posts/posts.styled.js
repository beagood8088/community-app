import styled from "styled-components"


export const PostListContent = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  @media (min-width: 1400px) {
    flex-direction: row;
    column-gap: 32px;
  }
` 
export const SidePanel = styled.div`
  @media (min-width: 1440px) {
    min-width: 260px;
  }
`
export const PostMainSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`
export const LeftCol = styled(SidePanel)`

`
export const RightCol = styled(SidePanel)`

`

export const CenterCol = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 24px;
`
