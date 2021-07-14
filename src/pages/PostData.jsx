import React, { useState } from "react";
import styled from "styled-components";
import "styles/PostData.css";
import imageIcon from "assets/images/imageIcon.svg";
import globeIcon from "assets/images/globeIcon.svg";
import lockIcon from "assets/images/lockIcon.svg";
import addIcon from "assets/images/addIcon.svg";

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
  justify-content: space-between;
`;

const Info = styled.div``;

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

const URLInput = styled.input.attrs({
  type: "text",
  size: 35,
})`
  display: flex;
  background: white;
  border: none;
  outline: none;
  box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
  padding: 0.5rem 0.875rem;
  line-height: 1.5;
`;

const PublicButtonWrapper = styled.div`
  display: flex;
`;

const ContentSection = styled.section`
  margin-top: 24px;
`;

const Btn = styled.button`
  cursor: pointer;
  font-size: 1.125em;
  padding: 8px 20px;
  border-radius: 5px;
`;

const BigBtn = styled(Btn)`
  outline: none;
  height: 3rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  font-weight: bold;
  background: white;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px 0px;
  cursor: pointer;
`;

const UploadButton = styled(Btn)`
  border: none;
  font-weight: bold;
  background: #fff;
  color: rgb(32, 201, 151);
  margin-top: 1rem;
  &:hover {
    background: rgb(240, 242, 244);
  }
`;

const PublicBtn = styled(BigBtn)`
  border: ${(props) => props.border};
`;

const NonPublicBtn = styled(BigBtn)`
  margin-left: 16px;
  border: ${(props) => props.border};
`;

const BtnText = styled.div`
  flex: 1 1 0%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

const SeriesButton = styled(BigBtn)`
  display: flex;
  justify-content: center;
  border: none;
  color: rgb(32, 201, 151);
  width: 100%;
  &:hover {
    background: rgb(240, 242, 244);
  }
`;

const CancelBtn = styled(Btn)`
  border: none;
  font-weight: bold;
  background: rgb(134, 142, 150);
  color: #fff;
  margin-top: 1rem;
  &:hover {
    background: rgb(173, 181, 189);
  }
`;

const PublishBtn = styled(Btn)`
  border: none;
  font-weight: bold;
  background: rgb(18, 184, 134);
  color: #fff;
  margin-top: 1rem;
  margin-left: 14px;
  &:hover {
    background: rgb(18, 184, 134, 0.7);
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function PostData() {
  const [title, setTitle] = useState("title");
  const [content, setContent] = useState("");
  const [publicBtnStyle, setPublicBtnStyle] = useState(true);
  const [url, setUrl] = useState("");
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
                    ? "1px solid transparent" : "1px solid rgb(32, 201, 151)"
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
              <SeriesButton>
                <img
                  src={addIcon}
                  alt="add series icon"
                  className="series-svg"
                />
                시리즈에 추가하기
              </SeriesButton>
            </ContentSection>
          </Info>
          <ButtonSection>
            <CancelBtn>취소</CancelBtn>
            <PublishBtn>출간하기</PublishBtn>
          </ButtonSection>
        </InfoWrapper>
      </DataForm>
    </DataWrapper>
  );
}