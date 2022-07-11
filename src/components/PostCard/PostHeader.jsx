import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useSession } from "../../contexts/SessionContext"
import { Button } from "../Shared/Buttons"


export const PostHeader = (props) => {
  const [{auth}] = useSession()
  const navigate = useNavigate()
  const [typeSelected, setTypeSelected] = useState('popular')

  const filterList = [
    { key: 'popular', name: 'Popular' },
    { key: 'new', name: 'New' }
  ]
  
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
        {filterList.map((item, i) => (
          <Button
            key={i}
            color='darkBlue'
            naked={item.key !== typeSelected}
            onClick={() => setTypeSelected(item.key)}
          >
            <span>{item.name}</span>
          </Button>  
        ))}
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