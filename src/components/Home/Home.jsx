import React from 'react'

import { PostsWrapper } from './home.styles'
import { Layout } from '../Shared/Layout'
import { Posts } from '../Shared/Posts'


export const Home = () => {
  return (
    <Layout>
      <h1>slide image here</h1>
      <PostsWrapper>
        <Posts />
      </PostsWrapper>
    </Layout>
  )
}
