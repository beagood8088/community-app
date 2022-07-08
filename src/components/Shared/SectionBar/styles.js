import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const FirstBox = styled.div`
  background: ${props => props.theme.colors.primary};
  margin-right: 4px;
  border-radius: 100px;
  height: 12px;
  width: 28px;
`

export const LastBox = styled.div`
  background: ${props => props.theme.colors.lightPrimary};
  margin-right: 4px;
  border-radius: 100px;
  height: 12px;
  width: 95px;
`