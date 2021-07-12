import React, { useState } from "react";
import styled from "styled-components";
import imageIcon from "assets/images/imageIcon.svg";

const DataWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DataForm = styled.div`
  display: flex;
  flex-direction: row;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 351.5px;
`;

const SeparationLine = styled.div`
  width: 1px;
  min-height: 425px;
  background: rgb(233, 236, 239);
  margin-left: 2rem;
  margin-right: 2rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.3125rem;
  color: rgb(52, 58, 64);
  line-height: 1.5;
  margin-bottom: 0.5rem;
  margin-top: 0px;
`;

const PostTitle = styled.h4`
  line-height: 1.5;
  margin: 0px;
  display: block;
  font-size: 1.125rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ImageBox = styled.div`
  background: rgb(233, 236, 239);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  margin-top: 24px;
`;

const ContentText = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  outline: none;
  box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
  line-height: 1.5;
  font-size: 0.875rem;
  height: 7.375rem;
  padding: 0.75rem 1rem;
  margin-top: 0.5rem;
`;

const ContentCount = styled.div`
  text-align: right;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: rgb(134, 142, 150);
`;

const Btn = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.125em;
  padding: 8px 20px;
  border-radius: 5px;
`;

const BigBtn = styled.button`
  outline: none;
  flex: 1 1 0%;
  height: 3rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  font-weight: bold;
  background: white;
  font-size: 1.125rem;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px 0px;
  padding: 0px 0px 0px 1rem;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid rgb(32, 201, 151);
  color: rgb(32, 201, 151);
`;

const UploadButton = styled(Btn)`
  font-weight: bold;
  background: #fff;
  color: rgb(32, 201, 151);
  margin-top: 1rem;
  &:hover {
    background: rgb(240, 242, 244);
  }
`;

const CancelBtn = styled(Btn)`
  font-weight: bold;
  background: rgb(134, 142, 150);
  color: #fff;
  margin-top: 1rem;
  &:hover {
    background: rgb(173, 181, 189);
  }
`;

const PublishBtn = styled(Btn)`
  font-weight: bold;
  background: rgb(18, 184, 134);
  color: white;
  right: 15px;
  &:hover {
    background: rgb(18, 184, 134, 0.7);
  }
`;

export default function PostData() {
  const [title, setTitle] = useState("title");
  const [content, setContent] = useState("");

  return (
    <DataWrapper>
      <DataForm>
        <PostWrapper>
          <Title>포스트 미리보기</Title>
          <ImageBox>
            <img src={imageIcon} alt="icon of img" />
            <UploadButton>썸네일 업로드</UploadButton>
          </ImageBox>
          <ContentWrapper>
            <PostTitle>{title}</PostTitle>
            <ContentText
              onChange={(e) => {
                setContent(e.target.value);
              }}
            >
              {content}
            </ContentText>
            <ContentCount>{content.length}/150</ContentCount>
          </ContentWrapper>
        </PostWrapper>
        <SeparationLine></SeparationLine>
        <InfoWrapper>
          <Title>공개 설정</Title>
          <Title>URL 설정</Title>
          <Title>시리즈 설정</Title>
          <CancelBtn>취소</CancelBtn>
          <PublishBtn>출간하기</PublishBtn>
        </InfoWrapper>
      </DataForm>
    </DataWrapper>
  );
}
