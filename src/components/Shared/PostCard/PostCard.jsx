import { useNavigate } from "react-router-dom"
import { useSession } from "../../../contexts/SessionContext"
import { convertMoment } from "../../../utils"
import { ArrowRight, CommentIcon, SheveronUp } from "../SvgIcons"


import { 
  CardWrapper, 
  PostWrapper, 
  VoteWrapper 
} from "./post-card.styled"

export const PostCard = ({post}) => {

  const navigate = useNavigate()
  const [{auth, isVerified}] = useSession()

  return (
    <CardWrapper>
      <VoteWrapper>
        <div className="vote-icon">
          <SheveronUp />
        </div>
        <div className="vote-num">{post?.voteNum}</div>
      </VoteWrapper>
      <PostWrapper
        onClick={() => navigate(`posts/${post?.slug || post?.postId}`)}
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
  )
}