import { Link } from "react-router-dom"
import { Button } from "../Shared/Buttons"
import { IconWrapper } from "../Shared/IconWrapper"
import { Layout } from "../Shared/Layout"
import { NextButton } from "../Shared/NextButton"
import { ArrowLeft, DeleteIcon, EditIcon } from "../Shared/SvgIcons"
import { 
  HistoryCard,
  HistoryCardWrapper, 
  HistoryWrapper, 
  InfoController, 
  RowContainer, 
  UserInfoWrapper } from "./profile.styled"

export const Profile = (props) => {
  return (
    <Layout>
      <UserInfoWrapper>
        <div className="title">Info:</div>
        <RowContainer>
          <InfoController>
            <label>Name</label>
            <div className="edit-wrapper">
              <div>{'Ali Alaymi'}</div>
              <Link to={'edit'}>
                <IconWrapper>
                  <EditIcon />
                </IconWrapper>
              </Link>
            </div>
          </InfoController>
          <InfoController>
            <label>Position</label>
            <div>{'Restaurant Owner'}</div>
          </InfoController>
        </RowContainer>
        <RowContainer>
          <InfoController>
            <label>City</label>
            <div>{'Riyadh'}</div>
          </InfoController>
          <InfoController>
            <label>Registration Date</label>
            <div>{'Restaurant Owner'}</div>
          </InfoController>
        </RowContainer>
        <RowContainer>
          <InfoController>
            <label># Mobile Phone</label>
            <div>{'00966536399333'}</div>
          </InfoController>
          <InfoController>
            <label>Email</label>
            <div>{'kitchenbuy3@gmail.com'}</div>
          </InfoController>
        </RowContainer>
        <RowContainer>
          <Button
            withIcon
            naked
            color="darkBlue"
            borderRadius='3px'
          >
            <span>Delete Account</span>
            <DeleteIcon />
          </Button>
        </RowContainer>
      </UserInfoWrapper>
      <HistoryWrapper>
        <div className="title">History</div>
        <HistoryCardWrapper>
          {[...Array(5).keys()].map(index => (
            <HistoryCard key={index}>
              <div className="reply-date">A reply on June, 2022</div>
              <div className="post-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro eveniet doloremque veniam praesentium provident aspernatur, asperiores vitae repudiandae tenetur eum soluta corporis maxime in optio iusto velit? Deleniti, commodi.</div>
            </HistoryCard>
          ))}
          
          <NextButton
            onClick={() => {}}
          >
            <div>Next Page</div>
            <div className='icon'><ArrowLeft /></div>
          </NextButton>
        </HistoryCardWrapper>
      </HistoryWrapper>
    </Layout>
  )
} 