import React from 'react'
import { Posts as PostsController } from '../../components/Shared/Posts'

export const Posts = (props) => {
  return (
    <>
      <PostsController {...props} />
    </>
  )
}
