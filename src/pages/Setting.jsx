import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import Header from "components/Header";
import {
  GlobalStyle,
  PageWrapper,
  HeaderWrapper,
  FlexWrapper,
  ProfileImgWrapper,
  ProfileImg,
  ImgUploadBtn,
  ImgRemoveBtn,
  ProfileWrapper,
  InfoWrapper,
  InfoSavedWrapper,
  UserName,
  Intro,
  InfoChangeBtn,
  InfoInputWrapper,
  UserNameInput,
  IntroInput,
  InfoSaveBtn,
  TitleWrapper,
  TitleText,
  TitleSavedWrapper,
  Title,
  TitleChangeBtn,
  TitleInputWrapper,
  TitleInput,
  TitleSaveBtn,
  TitleDesc,
  SocialWrapper,
  SocialText,
  SocialSavedWrapper,
  SocialInputWrapper,
  SocialDesc,
  EmailReceiveWrapper,
  EmailReceiveText,
  WithdrawalWrapper,
  WithdrawalText,
  WithdrawalBtn,
  WithdrawalDesc
} from "styles/Setting"

export default function Setting() {
  const [isInfoSavedMode, setIsInfoSavedMode] = useState(true);
  const [isTitleSavedMode, setIsTitleSavedMode] = useState(true);
  const [userName, setUserName] = useState("UserName");
  const [intro, setIntro] = useState("Intro");
  const [title, setTitle] = useState("Title");

  const profile_img = useRef();
  const img_input = useRef();

  const onSaveSubmit = (e, setIsSavedMode) => {
    if (!(e.keyCode === 13 || e.type === "click")) return;
    
    setIsSavedMode(true);
  }

  const onImgUploadBtnClick = () => {
    img_input.current.click();
  }

  const onImgChange = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    
    //const res = await axios.post('', formData);
    //profile_img.props.src = "res.data.image_url";
  }

  const onImgRemove = async () => {
    const formData = new FormData();
    formData.append('file', "");
    
    //const res = await axios.post('', formData);
    profile_img.props.src = "";
  }

  const onDataChange = async () => {
    try {
      const res = await axios.put('',
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <>
      <GlobalStyle/>
      <PageWrapper>
        <HeaderWrapper><Header header_mode="main"></Header></HeaderWrapper>
        <FlexWrapper>
          <ProfileImgWrapper>
            <ProfileImg
              src="https://media.vlpt.us/images/jisu00/profile/cf2284a3-2e41-4371-bcad-143b43975e9c/social.png?w=120"
              ref={profile_img}
            />
            <ImgUploadBtn
              onClick={onImgUploadBtnClick}
            >
              <input 
                type="file"
                id="profileImg"
                accept="image/*"
                ref={img_input}
                onChange={onImgChange}
                style={{ display: "none" }}
              />
              이미지 업로드
            </ImgUploadBtn>
            <ImgRemoveBtn
              onClick={onImgRemove}
            >이미지 제거</ImgRemoveBtn>
          </ProfileImgWrapper>
          <ProfileWrapper>
            <InfoWrapper
              isSavedMode={isInfoSavedMode}
            >
              <InfoSavedWrapper>
                <UserName>{userName}</UserName>
                <Intro>{intro}</Intro>
                <InfoChangeBtn
                  onClick={()=>{setIsInfoSavedMode(false)}}
                >수정</InfoChangeBtn>
              </InfoSavedWrapper>
              <InfoInputWrapper>
                <UserNameInput
                  placeholder="이름"
                  onKeyDown={(e)=>{
                    userName !== "" && 
                    onSaveSubmit(e, setIsInfoSavedMode)
                  }}
                  onChange={(e)=>{setUserName(e.target.value)}}
                  value={userName}
                />
                <IntroInput
                  placeholder="한 줄 소개"
                  onKeyDown={(e)=>{
                    userName !== "" &&
                    onSaveSubmit(e, setIsInfoSavedMode)
                  }}
                  onChange={(e)=>{setIntro(e.target.value)}}
                  value={intro}
                />
                <InfoSaveBtn
                  onClick={(e)=>{
                    userName !== "" &&
                    onSaveSubmit(e, setIsInfoSavedMode)
                  }}
                >
                  저장
                </InfoSaveBtn>
              </InfoInputWrapper>
            </InfoWrapper>
            <TitleWrapper
              isSavedMode={isTitleSavedMode}
            >
              <TitleText>벨로그 제목</TitleText>
              <TitleSavedWrapper>
                <Title>{title}</Title>
                <TitleChangeBtn
                  onClick={()=>{setIsTitleSavedMode(false)}}
                >수정</TitleChangeBtn>
              </TitleSavedWrapper>
              <TitleInputWrapper>
                <TitleInput
                   placeholder=""
                   onKeyDown={(e)=>{
                     title !== "" &&
                     onSaveSubmit(e, setIsTitleSavedMode)
                   }}
                   onChange={(e)=>{setTitle(e.target.value)}}
                   value={title}
                />
                <TitleSaveBtn
                  onClick={(e)=>{
                    title !== "" &&
                    onSaveSubmit(e, setIsTitleSavedMode)
                  }}
                >
                  저장
                </TitleSaveBtn>
              </TitleInputWrapper>
              <TitleDesc>개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다.</TitleDesc>
            </TitleWrapper>
            <SocialWrapper>
              <SocialText>소셜 정보</SocialText>
              <SocialSavedWrapper>

              </SocialSavedWrapper>
              <SocialInputWrapper>

              </SocialInputWrapper>
              <SocialDesc>포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다.</SocialDesc>
            </SocialWrapper>
            <EmailReceiveWrapper>
              <EmailReceiveText>이메일 수신 설정</EmailReceiveText>
            </EmailReceiveWrapper>
            <WithdrawalWrapper>
              <WithdrawalText>회원 탈퇴</WithdrawalText>
              <WithdrawalBtn>회원 탈퇴</WithdrawalBtn>
              <WithdrawalDesc>탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.</WithdrawalDesc>
            </WithdrawalWrapper>
          </ProfileWrapper>
        </FlexWrapper>
      </PageWrapper>
    </>
  );
}
