import React, { useState } from 'react'
import { useQuery } from "react-query"
import { useParams } from 'react-router-dom'
import { getPost } from '../../api'
import { convertMoment } from '../../utils'
import { Button } from '../Shared/Buttons'
import { Layout } from '../Shared/Layout'
import { CopyIcon, DeleteIcon, EditIcon, TalkIcon } from '../Shared/SvgIcons'
import {
  PostContentWrapper,
  PostMetaWrapper,
  NewReplyWrapper,
  ReplyHistoryWrapper,
  Wrapper,
  PostContent,
  PostContentContainer,
  ReplyHistoryContainer,
  ReplyContent
} from './post-detail.styled'
import { ReplyTextEditor } from './ReplyTextEditor'
import { IconWrapper } from '../Shared/IconWrapper'

export const PostDetail = (props) => {
  const [copied, setCopied] = useState(false)
  const [editingPostDetail, setEditingPostDetail] = useState(false)
  const [postDetail, setPostDetail] = useState("")

  const { slug } = useParams()
  const { data, error, isLoading } = useQuery(["post", slug], () => getPost(slug))

  if (isLoading) {
    return (
      <>...post loading</>
    );
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  const handleUpdatePostDetail = () => {
    console.log({ postDetail })
    setEditingPostDetail(false)
  }

  const copyPostUrl = () => {
    window.navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000);
  }

  return (
    <Layout>
      <Wrapper>
        <PostMetaWrapper>
          <div className='title'>{data[0]?.title}</div>
          <div className='author'>by {data[0]?.author?.name}</div>
          <div className='pub-date'>{convertMoment(data[0]?.pubDate).fromNow()}</div>
          <div className='topic'>Topic: {data[0]?.topic?.label}</div>
        </PostMetaWrapper>
        <PostContentWrapper>
          <PostContentContainer>
            {editingPostDetail &&
              <ReplyTextEditor
                detaultText={data[0]?.detail}
                postDetail={postDetail}
                setPostDetail={setPostDetail}
              >
                <Button
                  color='rainbow'
                  onClick={() => handleUpdatePostDetail()}
                >Update</Button>
                <Button
                  color='darkBlue'
                  onClick={() => setEditingPostDetail(false)}
                >Cancel</Button>
              </ReplyTextEditor>
            }
            {!editingPostDetail && <PostContent>{data[0]?.detail}</PostContent>}
          </PostContentContainer>
          <div className='action-icons delete'>
            <IconWrapper>
              <DeleteIcon />
            </IconWrapper>
          </div>
          <div className='action-icons edit' onClick={() => setEditingPostDetail(true)} >
            {!editingPostDetail &&
              <IconWrapper>
                <EditIcon />
              </IconWrapper>
            }
          </div>
          <div className='action-icons copy' onClick={copyPostUrl}>
            {!copied && <CopyIcon />}
            {copied && <div>Copied!</div>}
          </div>
        </PostContentWrapper>
        <NewReplyWrapper>
          <ReplyTextEditor
            postDetail={postDetail}
            setPostDetail={setPostDetail}
          />
          <div className='reply'>
            <Button
              color='rainbow'
            >Reply</Button>
          </div>
        </NewReplyWrapper>
        <ReplyHistoryContainer>
          <div className='total-replies'>
            <TalkIcon />
            <IconWrapper>
              <span>{39}</span>
            </IconWrapper>
          </div>
          <ReplyHistoryWrapper>
            {[...Array(4).keys()].map(index => (
              <ReplyContent key={index} replyToAuthor={index % 2 !== 0} myReply={index === 1}>
                <PostContentWrapper>
                  <PostContentContainer>
                    {false &&
                      <ReplyTextEditor
                        detaultText={data[0]?.detail}
                        postDetail={null}
                        setPostDetail={null}
                      >
                        <Button
                          color='rainbow'
                          onClick={() => { }}
                        >Update</Button>
                        <Button
                          color='darkBlue'
                          onClick={() => { }}
                        >Cancel</Button>
                      </ReplyTextEditor>
                    }
                    {true && <PostContent reply>{data[0]?.detail}</PostContent>}
                  </PostContentContainer>
                  <div className='action-icons delete'>
                    <IconWrapper>
                      <DeleteIcon />
                    </IconWrapper>
                  </div>
                  <div className='action-icons edit' onClick={() => { }} >
                    {true && 
                      <IconWrapper>
                        <EditIcon />
                      </IconWrapper>
                    }
                  </div>
                </PostContentWrapper>
                <div className='reply-btn'>
                  <Button
                    color='rainbow'
                  >Reply</Button>
                </div>
              </ReplyContent>
            ))}
          </ReplyHistoryWrapper>
        </ReplyHistoryContainer>

      </Wrapper>
    </Layout>
  )
}
