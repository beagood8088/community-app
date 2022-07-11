import styled from "styled-components";

 export const Wrapper = styled.div`
  .full-width-btn {
    margin-bottom: 8px;
    button {
      width: 100%;
    }
  }
  .full-width-btn.bottom {
    margin-top: 8px;
  }
  margin-bottom: 32px;
 `
 export const TopicListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.headerBg};
  .isActive {
    color: green;
    svg {
      fill: green;
    }
    background-color: ${props => props.theme.colors.hoverBg};
    border-color: green;
  }
 `
 export const TopicWrapper = styled.div`
  cursor: pointer;
  transition: .2s ease-in;
  &:last-child {
    .topic-row {
      border: none;
    }
  }
 `
 export const TopicRow = styled.div`
  padding: 16px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  label {
    cursor: pointer;
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
  }
  svg {
    min-width: 16px;
    fill: ${props => props.theme.colors.primary};
  }
 
  &:hover {
    background-color: ${props => props.theme.colors.hoverBg};
    color: white;
    svg {
      fill: white;
    }
  }
  

 `