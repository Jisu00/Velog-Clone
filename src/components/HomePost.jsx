import React from "react";
import styled from "styled-components";
import likeIcon from "assets/images/likeIcon.svg";

const PostWrapper = styled.div`
  @media (max-width: 766px) {
    width: 94.4%;
  }
  @media (min-width: 767px) and (max-width: 1056px) {
    min-width: 320px;
    width: 45%;
  }
  @media (min-width: 1057px) {
    height: 326px;
  }
  display: inline-block;
  width: 320px;
  margin: 16px;
  background: white;
  border-radius: 5px;
  color: #495057;
  position: relative;
`;

const ThumbNail = styled.img`
  width: 100%;
  border-radius: 5px 5px 0px 0px;
  margin-bottom: -8px;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  padding: 0px 16px;
  text-align: left;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;
  cursor: pointer;
`;

const Content = styled.div`
  font-size: 14px;
  margin: 4px 0;
  color: #495057;
  cursor: pointer;
`;

const PostInfoWrapper = styled.div`
  display: flex;
  font-size: 12px;
  color: #868e96;
  margin-top: 24px;
  margin-bottom: 50px;
  padding: 0px 16px;
`;

const PostDate = styled.div``;
const Separator = styled.div`
  margin: 0px 8px;
`;

const TotalComment = styled.div``;

const WriterInfoWrapper = styled.div`
  display: flex;
  border-top: 1px solid #f8f9fa;
  font-size: 12px;
  padding: 8px 16px;
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

const UserIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  vertical-align: middle;
  cursor: pointer;
`;

const ByText = styled.label`
  color: #868e96;
  margin-left: 8px;
  margin-right: 4px;
  margin-top: 2px;
`;

const WriterName = styled.div`
  font-weight: bold;
  cursor: pointer;
  margin-top: 2px;
`;

const LikeWrapper = styled.div`
  margin-left: auto;
  margin-top: 2px;
`;

const LikeIcon = styled.img`
  width: 12px;
  vertical-align: middle;
  invert(30%) sepia(11%) saturate(456%) hue-rotate(169deg) brightness(92%) contrast(89%);
  margin-right: 6px;
`;

const Like = styled.label`
  display: inline-box;
  position: relative;
  top: 1px;
`;



const HomePost = ({ thumbNail_src, title, content, userIcon_src, userName, like }) => {
  return (
    <PostWrapper>
      {thumbNail_src && 
        <ThumbNail
          src={thumbNail_src}
          alt="post thumb nail"
        >
        </ThumbNail>
      }
      <ContentWrapper>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </ContentWrapper>
      <PostInfoWrapper>
        <PostDate>2021년 2월 24일</PostDate>
        <Separator>·</Separator>
        <TotalComment>0개의 댓글</TotalComment>
      </PostInfoWrapper>
        <WriterInfoWrapper>
          <UserIcon
            src={userIcon_src}
          />
          <ByText>by</ByText><WriterName>{userName}</WriterName>
          <LikeWrapper>
            <LikeIcon src={likeIcon}/>
            <Like>{like}</Like>
          </LikeWrapper>
        </WriterInfoWrapper>
    </PostWrapper>
  )
}

export default HomePost;