import React from "react";
import styled from "styled-components";

const PostWrapper = styled.div`
  padding-top: 12px;
  padding-bottom: 32px;
`;

const PostThumbNail = styled.img`
  width: 100%;
`;

const PostTitle = styled.div`
  @media (min-width: 769px) {
    font-size: 24px;
  }
  font-weight: bold;
  margin: 8px 0;
`;
const PostContent = styled.div`
  @media (min-width: 769px) {
    font-size: 16px;
  }
  font-size: 0.875rem;
  margin: 6px 0;
  color: #495057;
`;
const TagsWrapper = styled.div`
  margin: 20px 0;
  border: 1px solid gray;
  height: 24px;
`;
const SubInfoWrapper = styled.div`
  @media (min-width: 769px) {
    font-size: 14px;
  }
  display: flex;
  font-size: 0.75rem;
  color: #868e96
`;
const PostDate = styled.div``;
const Separator = styled.div`
  margin: 0px 8px;
`;
const TotalComment = styled.div``;


const Post = () => {
  return (
    <PostWrapper>
      <PostThumbNail
        src="https://media.vlpt.us/images/woo0_hooo/post/ce528f97-e8e4-4aa7-876a-e78d7b1f72e2/2CE11015-D1A5-4FFA-BB26-2B1A02A1020F.png?w=768"
        alt="post thumb nail"
      >
      </PostThumbNail>
      <PostTitle>Post Title</PostTitle>
      <PostContent>Post Content</PostContent>
      <TagsWrapper></TagsWrapper>
      <SubInfoWrapper>
        <PostDate>2021년 2월 24일</PostDate>
        <Separator>·</Separator>
        <TotalComment>0개의 댓글</TotalComment>
      </SubInfoWrapper>
    </PostWrapper>
  )
}

export default Post;