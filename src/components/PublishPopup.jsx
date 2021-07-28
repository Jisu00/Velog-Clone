import React, { useState } from "react";
import "styles/PublishPopup.css";
import axios from "axios";

import imageIcon from "assets/images/imageIcon.svg";
import globeIcon from "assets/images/globeIcon.svg";
import lockIcon from "assets/images/lockIcon.svg";
import addIcon from "assets/images/addIcon.svg";
import {
  DataWrapper,
  DataForm,
  PostWrapper,
  SeparationLine,
  InfoWrapper,
  Info,
  Title,
  PostTitle,
  ImageBox,
  ContentWrapper,
  ContentText,
  ContentCount,
  URLInput,
  PublicButtonWrapper,
  ContentSection,
  UploadBtn,
  PublicBtn,
  NonPublicBtn,
  BtnText,
  SeriesBtn,
  CancelBtn,
  PublishBtn,
  ButtonSection
} from "styles/PublishPopup";

export default function PublishPopup({ isOpen, setIsPublishPopup, postTitle, postContent }) {
  const [content, setContent] = useState("");
  const [publicBtnStyle, setPublicBtnStyle] = useState(true);
  const [url, setUrl] = useState("");

  const postData = async () => {
    try {
      axios.post('', {
        title: postTitle,
        content: postContent
      })
    } catch (e) {
      alert("에러");
    }
  }

  return (
    <>
      {isOpen && (
      <DataWrapper>
        <DataForm>
          <PostWrapper>
            <Title>포스트 미리보기</Title>
            <ImageBox>
              <img src={imageIcon} alt="icon of img" />
              <UploadBtn>썸네일 업로드</UploadBtn>
            </ImageBox>
            <ContentWrapper>
              <ContentText
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                placeholder="당신의 포스트를 짧게 소개해보세요."
              >
                {content}
              </ContentText>
              <ContentCount>{content.length}/150</ContentCount>
            </ContentWrapper>
          </PostWrapper>
          <SeparationLine></SeparationLine>
          <InfoWrapper>
            <Info>
              <Title>공개 설정</Title>
              <PublicButtonWrapper>
                <PublicBtn
                  onClick={() => setPublicBtnStyle(!publicBtnStyle)}
                  className={publicBtnStyle ? "public" : "non-public"}
                  border={
                    publicBtnStyle
                      ? "1px solid rgb(32, 201, 151)"
                      : "1px solid transparent"
                  }
                >
                  <img
                    src={globeIcon}
                    alt="globe icon"
                    className={publicBtnStyle ? "public-svg" : "non-public-svg"}
                    style={{ marginRight: "10px" }}
                  />
                  <BtnText>전체 공개</BtnText>
                </PublicBtn>
                <NonPublicBtn
                  onClick={() => setPublicBtnStyle(!publicBtnStyle)}
                  className={publicBtnStyle ? "non-public" : "public"}
                  border={
                    publicBtnStyle
                      ? "1px solid transparent"
                      : "1px solid rgb(32, 201, 151)"
                  }
                >
                  <img
                    src={lockIcon}
                    alt="lock icon"
                    className={publicBtnStyle ? "non-public-svg" : "public-svg"}
                    style={{ marginRight: "10px" }}
                  />
                  비공개
                </NonPublicBtn>
              </PublicButtonWrapper>
              <ContentSection>
                <Title>URL 설정</Title>
                <URLInput
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                ></URLInput>
              </ContentSection>
              <ContentSection>
                <Title>시리즈 설정</Title>
                <SeriesBtn>
                  <img
                    src={addIcon}
                    alt="add series icon"
                    className="series-svg"
                  />
                  시리즈에 추가하기
                </SeriesBtn>
              </ContentSection>
            </Info>
            <ButtonSection>
              <CancelBtn
                onClick={()=>{setIsPublishPopup(false)}}
              >취소</CancelBtn>
              <PublishBtn
                onClick={postData}
              >출간하기</PublishBtn>
            </ButtonSection>
          </InfoWrapper>
        </DataForm>
      </DataWrapper>
    )}
  </>
  );
}

