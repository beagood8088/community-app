import React from 'react'
import { NewPost as NewPostController } from '../../components/NewPost'

export const NewPost = (props) => {
  return (
    <>
      <NewPostController {...props} />
    </>
  )
}
