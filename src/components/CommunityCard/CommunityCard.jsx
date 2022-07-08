import { useTheme } from "styled-components"
import { ArrowRight, CommentIcon, SheveronUp } from "../Shared/SvgIcons"


import { 
  CardWrapper, 
  PostWrapper, 
  VoteWrapper 
} from "./community-card.styled"

export const CommunityCard = (props) => {
  const theme = useTheme()
  return (
    <CardWrapper>
      <VoteWrapper>
        <div className="vote-icon">
          <SheveronUp />
        </div>
        <div className="vote-num">5</div>
      </VoteWrapper>
      <PostWrapper>
        <div className="user-info">
          <div className="user-name">{'user name'}</div>
          <div className="city">{'city name'}</div>
        </div>
        <div className="post">
          <div className="header">
            <div className="date">{'07/07/2022'}</div>
            <div className="icon"><ArrowRight /></div>
            <div className="topic-name">{'topic-name'}</div>
          </div>
          <div className="title">{'How I made $430 in sales in 7 days with just a landing page'}</div>
          <div className="body">{''} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae maxime magnam amet tempore necessitatibus commodi cupiditate consequatur dolore optio rerum eaque dolorum quos sunt esse repellendus, neque earum sed possimus.</div>
          <div className="bottom">
            <div className="icon">
              <CommentIcon />
            </div>
            <div className="reply-num">23</div>
          </div>
        </div>
      </PostWrapper>
    </CardWrapper>
  )
}