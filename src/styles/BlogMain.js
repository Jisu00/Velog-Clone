import styled, { css, keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

//// animation

export const fadeIn = keyframes`
  from { opacity: 0.4; }
  to { opacity: 1; }
`;

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0.4; }
`;

////

export const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background: white;
  }
`;

////

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
`;

export const FlexWrapper = styled.div`
  @media (min-width: 769px) {
    align-items: center;
  }

  display: flex;
  height: 100%;
  position: relative;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  @media (min-width: 769px) {
    padding: 0px 70px;
  }

  padding: 0px 20px;
`;

export const ProfileWrapper = styled.div`
  @media (min-width: 769px) {
    width: 800px;
    padding-top: 90px;
  }

  padding: 50px 20px 10px 20px;
`;

export const ProfileIcon = styled.img`
  @media (min-width: 769px) {
    width: 124px;
    height: 124px;
    border-radius: 62px;
    float: left;
    margin-right: 20px;
    margin-bottom: 35px;
  }

  width: 80px;
  height: 80px;
  border-radius: 40px;
  box-shadow: 0px 0px 5px 0px lightgray;
  cursor: pointer;
  margin-bottom: 12px;
`;

export const UserName = styled.div`
  @media (min-width: 769px) {
    margin-top: 30px;
    font-size: 24px;
  }

  font-weight: bold;
  font-size: 1.125rem;
  margin-bottom: 12px;
`;

export const Intro = styled.div`
  @media (min-width: 769px) {
    font-size: 18px;
  }

  font-size: 14px;
  margin-bottom: 16px;
`;

export const SocialInfoWrapper = styled.div`
  @media (min-width: 769px) {
    clear: both;
    margin-top: 20px;
  }

  border-top: 1px solid #e9ecef;
  padding: 10px 0px;
`;

const SocialBtn = styled.button`
  @media (min-width: 769px) {
    transform: scale(1.3);
    margin-right: 8px;
  }

  color: rgb(134, 142, 150);
  font-size: 1rem;
  font-weight: bold;
  font-family: serif;
  border: none;
  cursor: pointer;
  padding: 8px;
  background: none;
`;

const SocialImg = styled.img`
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
  height: 16px;
  position: relative;
  left: -20px;
  width: 2000px;
  box-shadow: 0px 0px 10px lightgray inset;
  opacity: 0.7;
`;

////

export const MenuWrapper = styled.div`
  @media (min-width: 769px) {
    width: 400px;
    margin: 52px 200px;
    margin-bottom: 32px;
  }

  display: flex;
  width: 100%;
  position: relative;
`;

export const Menu = styled.div`
  @media (min-width: 769px) {
    font-size: 21px;
    padding: 5px 0px;
  }

  width: 33.33%;
  text-align: center;
  padding: 10px 0px;
  font-weight: bold;
  cursor: pointer;
  color: #495057;
`;

export const PostMenu = styled(Menu)`
  color: ${props => props.menu === "post" ? "#20c997" : "#495057"}
`;

export const SeriesMenu = styled(Menu)`
  color: ${props => props.menu === "series" ? "#20c997" : "#495057"}
`;

export const AboutMenu = styled(Menu)`
  color: ${props => props.menu === "about" ? "#20c997" : "#495057"}
`;

export const MenuUnderline = styled.div`
  width: 33.333%;
  background: #20c997;
  position: absolute;
  height: 3px;
  top: 42px;

  left: ${props => {
    const selectedMenu = props.menu;

    if (selectedMenu === "post") return "0px";
    else if (selectedMenu === "series") return "33.333%";
    else if (selectedMenu === "about") return "66.666%";
  }};

  transition: left 0.3s;
`;

//// SEARCH

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SearchBorderWrapper = styled.div`
  @media (min-width: 1025px) {
    display: flex;
  }

  display: none;
  margin-top: 20px;
  align-items: center;
  border: 1px solid black;
  height: 38px;
  width: 200px;
  z-index: 2;

  &:focus-within {
    animation: ${fadeIn} 0.3s forwards;
  }
  &:not(:focus-within) {
    animation: ${fadeOut} 0.3s forwards;
  }
`;

export const SearchInput = styled.input`
  height: 2.25rem;
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;

  &::placeholder {
    color: gray;
  }
`;

export const SearchIcon = styled.div`
  margin: 0px 10px;
  margin-top: 3px;
`;

//// POST

export const PostWrapper = styled.div`
  @media (min-width: 769px) {
    width: 800px;
  }

  display: none;
  position: relative;
  top: 20px;
  padding: 0 20px;
  min-height: 200px;
`;

export const TagListWrapper = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }

  width: 184px;
  position: absolute;
  left: 160px;
  top: 560px;
  display: ${props => props.menu === "post" ? "block" : "none"};
`;

export const TagListText = styled.div`
  color: #495057;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0;
  border-bottom: 1px solid #adb5bd;
  margin-bottom: 10px;
`;

export const TagList = styled.div`
  padding: 5px 0;
  font-size: 14px;
  color: #868e96;
`;

export const TagLink = styled.a`
  text-decoration: none;
  color: #343a40;

  &:hover {
    text-decoration: underline;
  }
`;


export const TagMenuWrapper = styled.div`
  @media (min-width: 1201px) {
    display: none;
  }

  position: relative;
  clear: both;
`;

export const TagMenu = styled.div`
  display: inline-box;
  padding: 4px 12px;
  font-size: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  background: #f1f3f5;
  color: #495057;
  border-radius: 30px;
  white-space: nowrap;
  cursor: pointer;
`;

export const TotalTag = styled(TagMenu)`
  color: white;
  background: #12b886;
`;

export const ResultText = styled.div`
  margin-top: 20px;
`;

//// SERIES

export const SeriesWrapper = styled.div`
  @media (min-width: 769px) {
    margin-top: 20px;
  }

  width: 100%;
  display: none;
  clear: both;
`;

//// ABOUT

export const AboutWrapper = styled.div`
  display: none;
`;

export const AboutImg = styled.img`
  width: 320px;
  margin-top: 60px;
`;

export const AboutInitWrapper = styled.div`
  text-align: center;
  display: ${props => !props.isWriteMode ? "block" : "none"};
`;

export const NothingText = styled.div`
  color: #868e96;
  font-size: 2rem;
  margin-top: 60px;
`;

const AboutBtn = styled.button`
  font-weight: bold;
  background: rgb(18, 184, 134);
  color: white;
  cursor: pointer;
  font-size: 1.125em;
  padding: 8px 20px;
  margin-top: 25px;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
  outline: none;

  &:hover {
    background: rgb(18, 184, 134, 0.7);
  }
`;


export const AboutWriteBtn = styled(AboutBtn)``;

export const AboutWriteWrapper = styled.div`
  display: ${props => props.isWriteMode ? "block" : "none"};
`;

export const AboutWriteArea = styled.textarea`
  width: 100%;
  height: 170px;
  border: none;
  resize: none;
  outline: none;
  font-size: 1.125rem;
  font-family: "Fira Mono";
  padding: 20px;
  clear: both;
  color: #343a40;

  display: ${props => props.isSaveMode ? "block" : "none"};
  
  &::placeholder {
    color: rgb(134, 142, 155, 0.7);
    font-style: italic;
  }
`;

export const AboutText = styled.div`
  font-size: 1.125rem;
  padding: 20px;
  width: 100%;
  min-height: 170px;
  clear: both;

  display: ${props => !props.isSaveMode ? "block" : "none"};
`;

export const SaveBtn = styled(AboutBtn)`
  float: right;
  margin-bottom: 20px;
`;

///

export const MainWrapper = styled.div`
  @media (min-width: 769px) {
    width: 800px;
  }

  width: 100%;
  background: white;
  height: 100%;
  overflow-y: hidden;
  margin-bottom: 50px;
  clear: both;

  ${props => {
    const selectedMenu = props.menu;

    if (selectedMenu === "post"){
      return (
        css`
          ${PostWrapper} { display: block; }`
      )
    }
    else if (selectedMenu === "series"){
      return (
        css`
          ${SeriesWrapper} { display: inline-block; }`
      )
    }
    else if (selectedMenu === "about"){
      return (
        css`
          ${AboutWrapper} { display: block; }`
      )
    }
  }}
`;

