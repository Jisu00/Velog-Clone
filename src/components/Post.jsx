import React from "react";
import styled from "styled-components";
import Tag from "components/Tag";

const PostWrapper = styled.div`
  @media (min-width: 769px) {
    padding-bottom: 60px;
    margin-bottom: 48px;
  }

  padding-top: 12px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e9ecef;
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
  margin-top: 26px;
  margin-bottom: 1px;
`;

const PostTag = styled(Tag)``;

const SubInfoWrapper = styled.div`
  @media (min-width: 769px) {
    font-size: 14px;
  }
  display: flex;
  font-size: 0.75rem;
  color: #868e96;
  margin-top: 10px;
`;

const PostDate = styled.div``;
const Separator = styled.div`
  margin: 0px 8px;
`;

const TotalComment = styled.div``;


const Post = ({ img_src, title, content }) => {
  return (
    <PostWrapper>
      {img_src && 
        <PostThumbNail
          src={img_src}
          alt="post thumb nail"
        >
        </PostThumbNail>}
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
      <TagsWrapper>
        <PostTag
          value="tag1"
          mode="post"
          //handleClick={}
        ></PostTag>
        <PostTag
          value="tag2"
          mode="post"
          //handleClick={}
        ></PostTag>
      </TagsWrapper>
      <SubInfoWrapper>
        <PostDate>2021년 2월 24일</PostDate>
        <Separator>·</Separator>
        <TotalComment>0개의 댓글</TotalComment>
      </SubInfoWrapper>
    </PostWrapper>
  )
}

export default Post;