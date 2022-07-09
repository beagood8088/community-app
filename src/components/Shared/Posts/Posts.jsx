import React, { useEffect, useState } from 'react'
import { useQuery } from "react-query";
import { Layout } from '../Layout'
import { NextButton } from '../NextButton'
import { ArrowLeft } from '../SvgIcons'
import { 
  PostListContent, 
  CenterCol, 
  PostMainSection, 
  LeftCol, 
  RightCol, 
} from './posts.styled'
import { PostHeader } from '../PostCard/PostHeader'
import { PostCard } from '../PostCard'
import { getAllPosts } from '../../../api';
import { useSession } from '../../../contexts/SessionContext';
import { TopicSideBar } from '../TopicSideBar';

export const Posts = (props) => {
  const [{auth, isVerified}] = useSession()

  const { data, error, isLoading, isError } = useQuery("posts", getAllPosts);
  
  if (isLoading) {
    return (
      <>...loading</>
    );
  }

  if ( error ) {
    return <span>Error: {error.message}</span>;
  }
    

  return (
    <Layout>
      <PostListContent>
        {true && 
          <LeftCol>
            <TopicSideBar />
          </LeftCol>
        }
        <CenterCol>
          {auth && <PostHeader />}
          <PostMainSection>
            {data.map((post, index) => (
              <PostCard post={post} key={index}/>
            ))}
          </PostMainSection>
          <NextButton
            onClick={() => {}}
          >
            <div>Next Page</div>
            <div className='icon'><ArrowLeft /></div>
          </NextButton>
        </CenterCol>
      </PostListContent>

    </Layout>
  )
}
