import React from 'react'
import { CommunityCard } from '../Shared/CommunityCard'
import { PostsWrapper } from './home.styles'
import { Layout } from '../Shared/Layout'
import { Button } from '../Shared/Buttons'
import { FormBottomContainer } from '../Login/login.styled'
import { ArrowRight } from '../Shared/SvgIcons'


export const Home = () => {
  return (
    <Layout>
      <h1>slide image here</h1>
      <PostsWrapper>
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </PostsWrapper>
      <FormBottomContainer>
        <Button
          color='darkBlue'
          type={'button'}
        >
          <span>More Please</span>
          <div className='svg-wrapper'>
            <ArrowRight />
          </div>
        </Button>
      </FormBottomContainer>
    </Layout>
  )
}
