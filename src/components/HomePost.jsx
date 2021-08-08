import React from "react";
import styled from "styled-components";

const PostWrapper = styled.div`
  @media (max-width: 768px) {
    width: 94.4%;
  }
  @media (min-width: 769px) and (max-width: 1055px) {
    min-width: 320px;
    width: 45%;
  }

  display: inline-block;
  width: 320px;
  padding: 16px;
  margin: 16px;
  background: white;
  border-radius: 5px;
  border: 1px solid gray;
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


const HomePost = ({ img_src, title, content }) => {
  return (
    <PostWrapper>
      {img_src && 
        <PostThumbNail
          src={img_src}
          alt="post thumb nail"
        >
        </PostThumbNail>
      }
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
      <SubInfoWrapper>
        <PostDate>2021년 2월 24일</PostDate>
        <Separator>·</Separator>
        <TotalComment>0개의 댓글</TotalComment>
      </SubInfoWrapper>
    </PostWrapper>
  )
}

export default HomePost;