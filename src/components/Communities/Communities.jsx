import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../../contexts/SessionContext'
import { CommunityCard } from '../Shared/CommunityCard'
import { Button } from '../Shared/Buttons'
import { Layout } from '../Shared/Layout'
import { NextButton } from '../Shared/NextButton'
import { ArrowLeft } from '../Shared/SvgIcons'
import { 
  CommunityContent, 
  CommunityHeaderSection, 
  CommunityMainCol, 
  CommunityMainSection, 
  LeftCol, 
  PageWrapper, 
  RightCol, 
} from './communities.styled'

export const Communities = (props) => {
  const [{auth}] = useSession()
  const navigate = useNavigate()
  const handleNewPost = () => {
    if (auth) {
      navigate('/new-post')
      return;
    }
    navigate('/signup')
  }
  return (
    <Layout>
      <CommunityContent>
        <LeftCol></LeftCol>
        <CommunityMainCol>
          <CommunityHeaderSection>
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
          </CommunityHeaderSection>
          <CommunityMainSection>
            <CommunityCard />
            <CommunityCard />
          </CommunityMainSection>
          <NextButton
            onClick={() => {}}
          >
            <div>Next Page</div>
            <div className='icon'><ArrowLeft /></div>
          </NextButton>
        </CommunityMainCol>
        <RightCol></RightCol>
      </CommunityContent>

    </Layout>
  )
}
