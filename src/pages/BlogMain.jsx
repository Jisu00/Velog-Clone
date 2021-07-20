import React from "react";
import Header from "components/Header";
import githubIcon from "assets/images/githubIcon2.svg";
import twitterIcon from "assets/images/twitterIcon.svg";
import facebookIcon from "assets/images/facebookIcon.svg";
import homepageIcon from "assets/images/homepageIcon.svg";
import mailIcon from "assets/images/mailIcon.svg";


import {
  GlobalStyle,
  PageWrapper,
  MainWrapper,
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
  DividingLine
} from "styles/BlogMain"

export default function BlogMain() {
  return (
    <>
      <GlobalStyle/>
      <PageWrapper>
        <Header></Header>
        <ProfileWrapper>
          <ProfileIcon
            src="https://media.vlpt.us/images/jisu00/profile/cf2284a3-2e41-4371-bcad-143b43975e9c/social.png?w=120"
            alt="profile icon"
          />
          <UserName>UserName</UserName>
          <Intro>ㅎㅇ</Intro>
          <SocialInfoWrapper>
            <GithubIcon><GithubImg src={githubIcon}></GithubImg></GithubIcon>
            <TwitterIcon><TwitterImg src={twitterIcon}></TwitterImg></TwitterIcon>
            <FacebookIcon><FacebookImg src={facebookIcon}></FacebookImg></FacebookIcon>
            <HomepageIcon><HomepageImg src={homepageIcon}></HomepageImg></HomepageIcon>
            <MailIcon><MailImg src={mailIcon}></MailImg></MailIcon>
          </SocialInfoWrapper>
        </ProfileWrapper>
        <DividingLine></DividingLine>
        <MainWrapper></MainWrapper>
      </PageWrapper>
    </>
  );
}
