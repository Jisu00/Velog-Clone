import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export const PageWrapper = styled.div`
  @media (max-width: 1024px) {
    padding: 0px 20px;
  }
  @media (min-width: 1025px) {
    padding: 0px 80px;
  }

  padding: 0px 20px;
  width: 100%;
  height: 100%;
  background: white;
`;

export const MainWrapper = styled.div`
  width: 100%;
  background: white;
  height: 100vh;
  overflow-y: hidden;
`;

export const ProfileWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 10px;
`;

export const ProfileIcon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  box-shadow: 0px 0px 5px 0px lightgray;
  cursor: pointer;
  margin-bottom: 12px;
`;

export const UserName = styled.div`
  font-weight: bold;
  font-size: 1.125rem;
  margin-bottom: 12px;
`;

export const Intro = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const SocialInfoWrapper = styled.div`
  border-top: 1px solid lightgray;
  padding: 10px 0px;
`;

export const SocialBtn = styled.button`
  color: rgb(134, 142, 150);
  font-size: 1rem;
  font-weight: bold;
  font-family: serif;
  border: none;
  cursor: pointer;
  padding: 8px;
  background: none;
`;

export const SocialImg = styled.img`
  filter: invert(77%) sepia(8%) saturate(279%) hue-rotate(169deg) brightness(92%) contrast(95%);

  &:hover {
    filter: invert(20%) sepia(11%) saturate(562%) hue-rotate(169deg) brightness(94%) contrast(91%);
  }
`;

export const GithubIcon = styled(SocialBtn)``;
export const GithubImg = styled(SocialImg)``;
export const TwitterIcon = styled(SocialBtn)``;
export const TwitterImg = styled(SocialImg)``;
export const FacebookIcon = styled(SocialBtn)``;
export const FacebookImg = styled(SocialImg)``;
export const HomepageIcon = styled(SocialBtn)``;
export const HomepageImg = styled(SocialImg)``;
export const MailIcon = styled(SocialBtn)``;
export const MailImg = styled(SocialImg)``;

export const DividingLine = styled.div`
  @media (min-width: 769px) {
    display: none;
  }

  background: #f1f3f5;
  height: 18px;
  position: relative;
  left: -20px;
  width: 110%;
`;