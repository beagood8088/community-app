import React from 'react'
import { useQuery } from "react-query";
import { Layout } from '../Shared/Layout'
import { NextButton } from '../Shared/NextButton'
import { ArrowLeft } from '../Shared/SvgIcons'
import { 
  PostListContent, 
  CenterCol, 
  PostMainSection, 
  LeftCol, 
} from './posts.styled'
import { PostCard } from '../PostCard'
import { getAllPosts } from '../../api';
import { useSession } from '../../contexts/SessionContext';
import { TopicSideBar } from '../TopicSideBar';
import { PostHeader } from '../PostCard/PostHeader';

export const Posts = (props) => {
  const [{auth, isVerified}] = useSession()

  const { data, error, isLoading } = useQuery("posts", getAllPosts);
  
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
        {auth && isVerified && 
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
