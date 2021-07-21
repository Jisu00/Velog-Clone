import React, { useState, useRef } from "react";
import Header from "components/Header";
import githubIcon from "assets/images/githubIcon2.svg";
import twitterIcon from "assets/images/twitterIcon.svg";
import facebookIcon from "assets/images/facebookIcon.svg";
import homepageIcon from "assets/images/homepageIcon.svg";
import mailIcon from "assets/images/mailIcon.svg";
import Post from "components/Post"


import {
  GlobalStyle,
  PageWrapper,
  FlexWrapper,
  HeaderWrapper,
  ProfileWrapper,
  ProfileIcon,
  UserName,
  Intro,
  SocialInfoWrapper,
  GithubIcon,
  GithubImg,
  TwitterIcon,
  TwitterImg,
  FacebookIcon,
  FacebookImg,
  HomepageIcon,
  HomepageImg,
  MailIcon,
  MailImg,
  DividingLine,
  MainWrapper,
  MenuWrapper,
  PostMenu,
  SeriesMenu,
  AboutMenu,
  MenuUnderline,
  TagMenuWrapper,
  TotalTag,
  TagMenu,
  PostWrapper,
  SeriesWrapper,
  AboutWrapper,
  AboutInitWrapper,
  AboutImg,
  NothingText,
  AboutWriteBtn,
  AboutWriteWrapper,
  AboutWriteArea,
  AboutText,
  SaveBtn
} from "styles/BlogMain"

export default function BlogMain() {
  const [menu, setMenu] = useState("post");
  const [isWriteMode, setIsWriteMode] = useState(false);
  const [isSaveMode, setIsSaveMode] = useState(true);
  
  const textArea = useRef();

  const toggleWriteMode = () => {
    setIsWriteMode(true);
  };

  const toggleSaveMode = () => {
    isSaveMode ? setIsSaveMode(false) : setIsSaveMode(true);
  }

  const saveAboutContent = (e) => {
    window.localStorage.setItem('text', textArea.current.value);
  }

  const getAboutContent = (e) => {
    const TEXT = window.localStorage.title;
  }

  return (
    <>
      <GlobalStyle/>
      <PageWrapper>
        <HeaderWrapper><Header></Header></HeaderWrapper>
        <FlexWrapper>
        <ProfileWrapper>
          <ProfileIcon
            src="https://media.vlpt.us/images/jisu00/profile/cf2284a3-2e41-4371-bcad-143b43975e9c/social.png?w=120"
            alt="profile icon"
          />
          <UserName>UserName</UserName>
          <Intro>ㅎㅇ</Intro>
          <SocialInfoWrapper>
            <a 
              href="https://www.github.com/"
              target="_blank"
            >
              <GithubIcon><GithubImg src={githubIcon}></GithubImg></GithubIcon>
            </a>
            <a 
              href="https://www.twitter.com/"
              target="_blank"
            >
            <TwitterIcon><TwitterImg src={twitterIcon}></TwitterImg></TwitterIcon>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
            >
            <FacebookIcon><FacebookImg src={facebookIcon}></FacebookImg></FacebookIcon>
            </a>
            <a 
              href="/"
              target="_blank"
            >
            <HomepageIcon><HomepageImg src={homepageIcon}></HomepageImg></HomepageIcon>
            </a>
            <a 
              href="/"
              target="_blank"
            >
            <MailIcon><MailImg src={mailIcon}></MailImg></MailIcon>
            </a>
          </SocialInfoWrapper>
        </ProfileWrapper>
        <DividingLine></DividingLine>
        <MainWrapper
          menu={menu}
        >
          <MenuWrapper>
            <PostMenu menu={menu} onClick={()=>{setMenu("post")}}>글</PostMenu>
            <SeriesMenu menu={menu} onClick={()=>{setMenu("series")}}>시리즈</SeriesMenu>
            <AboutMenu menu={menu} onClick={()=>{setMenu("about")}}>소개</AboutMenu>
            <MenuUnderline
              menu={menu}
            ></MenuUnderline>
          </MenuWrapper>
          <PostWrapper>
            <TagMenuWrapper>
              <TotalTag>전체보기 (2)</TotalTag>
              <TagMenu>tag1 (1)</TagMenu>
            </TagMenuWrapper>
            <Post></Post>
            <Post></Post>
          </PostWrapper>
          <SeriesWrapper>

          </SeriesWrapper>
          <AboutWrapper>
            <AboutInitWrapper
              isWriteMode={isWriteMode}
            >
              <AboutImg src="https://static.velog.io/static/media/undraw_empty.5fd6f2b8.svg"></AboutImg>
              <NothingText>소개가 작성되지 않았습니다.</NothingText>
              <AboutWriteBtn
                onClick={toggleWriteMode}
              >소개 글 작성하기</AboutWriteBtn>
            </AboutInitWrapper>
            <AboutWriteWrapper
              isWriteMode={isWriteMode}
            >
              <SaveBtn
                onClick={(e)=>{
                  toggleSaveMode(); saveAboutContent(e);
                }}
              >
                {isSaveMode ? "수정하기" : "저장하기"}
              </SaveBtn>
              <AboutWriteArea
                placeholder="당신은 어떤 사람인가요? 당신에 대해서 알려주세요."
                ref={textArea}
              />
              <AboutText></AboutText>
            </AboutWriteWrapper>
          </AboutWrapper>
        </MainWrapper>
        </FlexWrapper>
      </PageWrapper>
    </>
  );
}
