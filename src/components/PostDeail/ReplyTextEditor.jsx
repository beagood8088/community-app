import styled from "styled-components"

export const ReplyTextEditor = (props) => {
  const {
    children,
    postDetail,
    setPostDetail,
  } = props
  return(
    <Wrapper>
      <textarea 
        value={postDetail}
        onChange={(e) => setPostDetail(e.target.value)}
      />
      <ButtonsWrapper>
        {children}    
      </ButtonsWrapper>
    </Wrapper>
  ) 
}

export const Wrapper = styled.div`
  width: 100%;
  textarea {
    width: 100%;
    height: 130px;
    overflow: hidden;
    font-size: 18px;
    background-color: transparent;
    padding: 16px;
    border: 3px solid #233b53;
    border-radius: 4px;
    resize: vertical;
    line-height: 32px;
    color: #d1dbe6;
    &:focus {
      box-shadow: 0 0 3px 3px #4799eb;
      outline: 0;
    }
  }
`
export const ButtonsWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row-reverse;
  column-gap: 16px;
`
