import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSession } from "../../../contexts/SessionContext"
import { convertMoment } from "../../../utils"
import { ArrowRight, CommentIcon, SheveronUp } from "../SvgIcons"
import { Modal } from "../Modal"


import { 
  CardWrapper, 
  PostWrapper, 
  VoteWrapper 
} from "./post-card.styled"
import { VerifyStep } from "../../VerifyStep"

export const PostCard = ({post}) => {
  const navigate = useNavigate()
  const [{auth, isVerified}] = useSession()
  const [open, setOpen] = useState(false)


  const toggleUpvote = async (postId) => {
    /** toggle api to revert */
  }

  const handleClickPost = () => {
    if (!auth) {
      navigate('/login')
      return false
    }
    if (isVerified) navigate(`/posts/${post?.slug || post?.postId}`)
    else setOpen(true)
  }

  return (
    <>
      <CardWrapper>
        <VoteWrapper>
          <div className="vote-icon `active`">
            <SheveronUp onClick={toggleUpvote(post.id)}/>
          </div>
          <div className="vote-num">{post?.voteNum}</div>
        </VoteWrapper>
        <PostWrapper
          onClick={() => handleClickPost()}
        >
          <div className="author-info">
            <div className="name">{auth && isVerified ? post?.author?.name : (post?.author?.isVerified ? 'Verified user' : 'Unverified user')}</div>
            {auth && isVerified && <>
            <div className="city">{post?.author?.city}</div>
            </>}
          </div>
          <div className="post">
            <div className="header">
              <div className="pub-date">{convertMoment(post?.pubDate).fromNow()}</div>
              {auth && isVerified && <>
              <div className="icon"><ArrowRight /></div>
              <div className="topic-name">{post?.topic?.label}</div>
              </>}
            </div>
            <div className="title">{post?.title}</div>
            <div className="detail">{post?.detail} </div>
            <div className="bottom">
              <div className="icon">
                <CommentIcon />
              </div>
              <div className="reply-num">{post?.replyNum || 0}</div>
            </div>
          </div>
        </PostWrapper>
      </CardWrapper>
      <Modal
        width='500px'
        open={open}
        borderRadius='8px'
        onClose={() => setOpen(false)}
      >
        <VerifyStep />
      </Modal>
    </>
  )
}