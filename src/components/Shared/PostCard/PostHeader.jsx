import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useSession } from "../../../contexts/SessionContext"
import { Button } from "../Buttons"


export const PostHeader = (props) => {

  const [{auth}] = useSession()
  const navigate = useNavigate()
  
  const handleNewPost = () => {
    if (auth) {
      navigate('/create')
      return;
    }
    navigate('/signup')
  }

  return (
    <HeaderWrapper>
      <div className='btn-group'>
        <Button
          color='darkBlue'
        ><span>Popular</span></Button>
        <Button
          color='darkBlue'
          naked
        ><span>New</span></Button>
      </div>
      <div>
        <Button
          color='rainbow'
          onClick={handleNewPost}
        ><span>New Post</span></Button>
      </div>
    </HeaderWrapper>
  )
}

export const HeaderWrapper = styled.div`
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