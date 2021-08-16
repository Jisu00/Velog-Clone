import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import Header from "components/Header";
import WithdrawalPopup from "components/WithdrawalPopup";
import GlobalStyles from "styles/GlobalStyles";

import githubIcon from "assets/images/githubIcon2.svg";
import twitterIcon from "assets/images/twitterIcon.svg";
import facebookIcon from "assets/images/facebookIcon.svg";
import homepageIcon from "assets/images/homepageIcon.svg";
import mailIcon from "assets/images/mailIcon.svg";

import {
  PageWrapper,
  FlexWrapper,
  ProfileWrapper,
  MainInfoWrapper,
  SubInfoWrapper,
  ProfileImgWrapper,
  ProfileImg,
  ImgUploadBtn,
  ImgRemoveBtn,
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
  SocialAddrWrapper,
  MailWrapper,
  MailIcon,
  Mail,
  GithubWrapper,
  GithubIcon,
  Github,
  TwitterWrapper,
  TwitterIcon,
  Twitter,
  FacebookWrapper,
  FacebookIcon,
  Facebook,
  HomepageWrapper,
  HomepageIcon,
  Homepage,
  SocialChangeBtn,
  Input,
  SocialInputWrapper,
  MailInputWrapper,
  GithubInputWrapper,
  TwitterInputWrapper,
  FacebookInputWrapper,
  HomepageInputWrapper,
  SocialSaveBtn,
  SocialDesc,
  EmailReceiveWrapper,
  EmailReceiveText,
  CommentAlertWrapper,
  CommentAlertText,
  CommentAlertToggleWrapper,
  CommentToggleFill,
  CommentToggleSwitch,
  UpdateNewsWrapper,
  UpdateNewsText,
  UpdateNewsToggleWrapper,
  UpdateToggleFill,
  UpdateToggleSwitch,
  WithdrawalWrapper,
  WithdrawalText,
  WithdrawalBtn,
  WithdrawalDesc,
  WithdrawalPopupWrapper
} from "styles/Setting"

export default function Setting() {
  const [isInfoSavedMode, setIsInfoSavedMode] = useState(true);
  const [isTitleSavedMode, setIsTitleSavedMode] = useState(true);
  const [isSocialSavedMode, setIsSocialSavedMode] = useState(true);
  const [isSocialNothing, setIsSocialNothing] = useState(true);
  const [isCommentAlert, setIsCommentAlert] = useState(false);
  const [isUpdateAlert, setIsUpdateAlert] = useState(false);
  const [isWithdrawalPopup, setIsWithdrawalPopup] = useState(false);
  
  const [userName, setUserName] = useState("userName");
  const [intro, setIntro] = useState("");
  const [title, setTitle] = useState("userName.log");
  const [mail, setMail] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [homepage, setHomepage] = useState("");

  const profile_img = useRef();
  const img_input = useRef();

  useEffect(()=>{
    // load data
    
    if (window.localStorage.user_name)
      setUserName(window.localStorage.user_name);
    if (window.localStorage.intro)
      setIntro(window.localStorage.intro);
    if (window.localStorage.blog_title)
      setTitle(window.localStorage.blog_title);
    if (window.localStorage.mail)
      setMail(window.localStorage.mail);
    if (window.localStorage.github)
      setGithub(window.localStorage.github);
    if (window.localStorage.twitter)
      setTwitter(window.localStorage.twitter);
    if (window.localStorage.facebook)
      setFacebook(window.localStorage.facebook);
    if (window.localStorage.homepage)
      setHomepage(window.localStorage.homepage);
    if (window.localStorage.comment_alert)
      setIsCommentAlert(window.localStorage.comment_alert);
    if (window.localStorage.update_alert)
      setIsUpdateAlert(window.localStorage.update_alert);
  }, []);

  useEffect(()=>{
    if (mail === "" && github === "" && twitter === "" && facebook === "" && homepage === "")
      setIsSocialNothing(true);
    else
      setIsSocialNothing(false);
  }, [mail, github, twitter, facebook, homepage]);

  useEffect(()=>{
    window.localStorage.setItem("comment_alert", isCommentAlert);
    window.localStorage.setItem("update_alert", isUpdateAlert);
  }, [isCommentAlert, isUpdateAlert]);

  const toggleCommentAlert = () => {
    isCommentAlert ? setIsCommentAlert(false) : setIsCommentAlert(true);
  }

  const toggleUpdateAlert = () => {
    isUpdateAlert ? setIsUpdateAlert(false) : setIsUpdateAlert(true);
  }

  const onSaveSubmit = (e, setIsSavedMode) => {
    if (!(e.keyCode === 13 || e.type === "click")) return;
    
    setIsSavedMode(true);
    onDataChange();
  }

  const onImgUploadBtnClick = () => {
    img_input.current.click();
  }

  const onDataChange = () => {
    window.localStorage.setItem("user_name", userName);
    window.localStorage.setItem("intro", intro);
    window.localStorage.setItem("blog_title", title);
    window.localStorage.setItem("mail", mail);
    window.localStorage.setItem("github", github);
    window.localStorage.setItem("twitter", twitter);
    window.localStorage.setItem("facebook", facebook);
    window.localStorage.setItem("homepage", homepage);
  }
  

  /*const onImgChange = async (e) => {
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
*/

  return (
    <>
      <GlobalStyles/>
      <PageWrapper>
        <Header header_mode="main"></Header>
        <FlexWrapper>
          <ProfileWrapper>
            <MainInfoWrapper>
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
                    //onChange={onImgChange}
                    style={{ display: "none" }}
                  />
                  이미지 업로드
                </ImgUploadBtn>
                <ImgRemoveBtn
                  //onClick={onImgRemove}
                >이미지 제거</ImgRemoveBtn>
              </ProfileImgWrapper>
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
            </MainInfoWrapper>
            <SubInfoWrapper>
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
                    placeholder="벨로그 제목"
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
              <SocialWrapper
                isSavedMode={isSocialSavedMode}
              >
                <SocialText>소셜 정보</SocialText>
                <SocialSavedWrapper>
                  <SocialAddrWrapper>
                    { mail !== "" && 
                    <MailWrapper>
                      <MailIcon src={mailIcon}/>
                      <Mail>{mail}</Mail>
                    </MailWrapper>}
                    { github !== "" &&
                    <GithubWrapper>
                      <GithubIcon src={githubIcon}/>
                      <Github>{github}</Github>
                    </GithubWrapper>}
                    { twitter !== "" && 
                    <TwitterWrapper>
                      <TwitterIcon src={twitterIcon}/>
                      <Twitter>{twitter}</Twitter>
                    </TwitterWrapper>}
                    { facebook !== "" && 
                    <FacebookWrapper>
                      <FacebookIcon src={facebookIcon}/>
                      <Facebook>{facebook}</Facebook>
                    </FacebookWrapper>}
                    { homepage !== "" &&
                    <HomepageWrapper>
                      <HomepageIcon src={homepageIcon}/>
                      <Homepage>{homepage}</Homepage>
                    </HomepageWrapper>}
                  </SocialAddrWrapper>
                  <SocialChangeBtn
                    onClick={()=>{setIsSocialSavedMode(false)}}
                    isSocialNothing={isSocialNothing}
                  >
                    { isSocialNothing ? "정보 추가" : "수정" }
                  </SocialChangeBtn>
                </SocialSavedWrapper>
                <SocialInputWrapper>
                  <MailInputWrapper>
                    <MailIcon src={mailIcon}/>
                    <Input
                      placeholder="이메일을 입력하세요."
                      onKeyDown={(e)=>{onSaveSubmit(e, setIsSocialSavedMode)}}
                      onChange={(e)=>{setMail(e.target.value)}}
                      value={mail}
                    />
                  </MailInputWrapper>
                  <GithubInputWrapper>
                    <GithubIcon src={githubIcon}/>
                    <Input
                      placeholder="Github 계정을 입력하세요."
                      onKeyDown={(e)=>{onSaveSubmit(e, setIsSocialSavedMode)}}
                      onChange={(e)=>{setGithub(e.target.value)}}
                      value={github}
                    />
                  </GithubInputWrapper>
                  <TwitterInputWrapper>
                    <TwitterIcon src={twitterIcon}/>
                    <Input
                      placeholder="Twitter 계정을 입력하세요."
                      onKeyDown={(e)=>{onSaveSubmit(e, setIsSocialSavedMode)}}
                      onChange={(e)=>{setTwitter(e.target.value)}}
                      value={twitter}
                    />
                  </TwitterInputWrapper>
                  <FacebookInputWrapper>
                    <FacebookIcon src={facebookIcon}/>
                    <Input
                      placeholder = "Facebook 계정을 입력하세요."
                      onKeyDown={(e)=>{onSaveSubmit(e, setIsSocialSavedMode)}}
                      onChange={(e)=>{setFacebook(e.target.value)}}
                      value={facebook}
                    />
                  </FacebookInputWrapper>
                  <HomepageInputWrapper>
                    <HomepageIcon src={homepageIcon}/>
                    <Input
                      placeholder="홈페이지 주소를 입력하세요."
                      onKeyDown={(e)=>{onSaveSubmit(e, setIsSocialSavedMode)}}
                      onChange={(e)=>{setHomepage(e.target.value)}}
                      value={homepage}
                    />
                  </HomepageInputWrapper>
                  <SocialSaveBtn
                    onClick={(e)=>{onSaveSubmit(e, setIsSocialSavedMode)}}
                  >
                    저장
                  </SocialSaveBtn>
                </SocialInputWrapper>
                <SocialDesc>포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다.</SocialDesc>
              </SocialWrapper>
              <EmailReceiveWrapper>
                <EmailReceiveText>이메일 수신 설정</EmailReceiveText>
                <CommentAlertWrapper>
                  <CommentAlertText>댓글 알림</CommentAlertText>
                  <CommentAlertToggleWrapper
                    onClick={toggleCommentAlert}
                    isAlert={isCommentAlert}
                  >
                    <CommentToggleFill/>
                    <CommentToggleSwitch/>
                  </CommentAlertToggleWrapper>
                </CommentAlertWrapper>
                <UpdateNewsWrapper>
                  <UpdateNewsText>벨로그 업데이트 소식</UpdateNewsText>
                  <UpdateNewsToggleWrapper
                    onClick={toggleUpdateAlert}
                    isAlert={isUpdateAlert}
                  >
                    <UpdateToggleFill/>
                    <UpdateToggleSwitch/>
                  </UpdateNewsToggleWrapper>
                </UpdateNewsWrapper>
              </EmailReceiveWrapper>
              <WithdrawalWrapper>
                <WithdrawalText>회원 탈퇴</WithdrawalText>
                <WithdrawalBtn
                  onClick={()=>{setIsWithdrawalPopup(true)}}
                >회원 탈퇴</WithdrawalBtn>
                <WithdrawalDesc>탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.</WithdrawalDesc>
              </WithdrawalWrapper>
            </SubInfoWrapper>
          </ProfileWrapper>
        </FlexWrapper>
      </PageWrapper>

      <WithdrawalPopupWrapper>
        <WithdrawalPopup
          isOpen={isWithdrawalPopup}
          setIsWithdrawalPopup={setIsWithdrawalPopup}
        >
        </WithdrawalPopup>
      </WithdrawalPopupWrapper>
    </>
  );
}
