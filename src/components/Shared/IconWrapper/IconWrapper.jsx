import styled from "styled-components";

export const IconWrapper = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  transition: all 220ms;;
  &:hover {
    background-color: ${props => props.theme.colors.hoverBg}; 
  }
`