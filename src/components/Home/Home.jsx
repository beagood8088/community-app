import React from 'react'
import { useQuery } from "react-query";
import { useNavigate } from 'react-router-dom';
import { PostsWrapper, MoreBtnWrapper, MoreBtn, Image } from './home.styles'
import { Layout } from '../Shared/Layout'
import { PostCard } from '../Shared/PostCard';
import { getAllPosts } from '../../api';
import { ArrowLeft, ArrowRight } from '../Shared/SvgIcons';
import { useTheme } from 'styled-components';

export const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const { data, error, isLoading, isError } = useQuery("posts", getAllPosts);

  if (isLoading) {
    return (
      <>...loading</>
    );
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Layout>
      <Image src={theme.images.heroBg} alt='' />
      <PostsWrapper>
        {data.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </PostsWrapper>
      <MoreBtnWrapper onClick={() => navigate('/signup')}>
        <MoreBtn>
          <span>More posts</span>
          <ArrowRight />
        </MoreBtn>
      </MoreBtnWrapper>
    </Layout>
  )
}
