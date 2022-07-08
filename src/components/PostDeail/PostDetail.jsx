import React from 'react'
import { Layout } from '../Shared/Layout'
import { DeleteIcon, EditIcon } from '../Shared/SvgIcons'
import { 
  PostContentWrapper, 
  PostDetailWrapper, 
  NewReplyWrapper, 
  PastRepliesWrapper
} from './post-detail.styled'

export const PostDetail = (props) => {
  return (
    <Layout>
      <PostDetailWrapper>
        <div className='title'>{'How Can I Do Marketing on Instagram?'}</div>
        <div className='author'>by {'Ali Alyami'}</div>
        <div className='pub-date'>{'30 June 2022, 15:08'}</div>
        <div className='topic'>Topic: {'Marketing'}</div>
        <PostContentWrapper>
          <textarea
            defaultValue={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui labore inventore obcaecati ea modi corrupti quae reprehenderit sit beatae vitae earum quasi adipisci animi, ut officia in laborum consectetur.'}
          />
          <div className='icons delete'>
            <DeleteIcon />
          </div>
          <div className='icons edit'>
            <EditIcon />
          </div>
          <div className='icons copy'>copy</div>
        </PostContentWrapper>
      </PostDetailWrapper>
      <NewReplyWrapper>
        <textarea></textarea>
        <div className='reply'>
          <button>Reply</button>
        </div>
      </NewReplyWrapper>
      <PastRepliesWrapper>
        <div>reply1</div>
        <div>reply2</div>
        <div>reply3</div>
      </PastRepliesWrapper>
    </Layout>
  )
}
