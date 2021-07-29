import styled from "styled-components";
import { createGlobalStyle, css } from "styled-components";

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
  @media (max-width: 1024px) {
    padding: 0px 20px;
  }
  @media (min-width: 1025px) {
    padding: 0px 70px;
  }

  width: 100%;
  height: 100%;
  background: white;
  color: #343a40;
  margin-bottom: 60px;
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

export const HeaderWrapper = styled.div``;

//// PROFILE

export const ProfileImgWrapper = styled.div`
  @media (min-width: 769px) {
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
  padding-bottom: 25px;
  border-bottom: 1px solid #e9ecef;
`;

export const ProfileImg = styled.img`
  @media (min-width: 769px) {
    width: 124px;
    height: 124px;
    border-radius: 62px;
  }

  width: 90px;
  height: 90px;
  border-radius: 45px;
  box-shadow: 0px 0px 5px 0px lightgray;
  margin: 10px;
`;

const ImgBtn = styled.button`
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px 25px;
  cursor: pointer;
  width: 160px;
  margin-top: 10px;
`;

export const ImgUploadBtn = styled(ImgBtn)`
  background: rgb(18, 184, 134);
  color: white;

  &:hover {
    background: rgb(18, 184, 134, 0.8);
  }
`;

export const ImgRemoveBtn = styled(ImgBtn)`
  background: transparent;
  color: rgb(18, 184, 134);

  &:hover {
    background: rgb(18, 184, 134, 0.2);
  }
`;


////

const ChangeBtn = styled.div`
  width: 35px;
  font-size: 16px;
  color: rgb(18, 184, 134);
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const SaveBtn = styled.button`
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px 10px;
  cursor: pointer;
  background: rgb(18, 184, 134);
  color: white;
  height: 34px;
  min-height: 34px;
  width: 70px;
  min-width: 70px;

  &:hover {
    background: rgb(18, 184, 134, 0.8);
  }
`;

const Input = styled.input`
  border: 1px solid #dee2e6;
  font-size: 1rem;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  width: 100%;

  &:focus {
    outline: none;
    border: 1px solid #495057;
  }
`;

const Text = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Desc = styled.div`
  font-size: 14px;
  color: #868e96;
  margin-top: 8px;
`;


//// INFO


export const ProfileWrapper = styled.div``;

export const InfoSavedWrapper = styled.div``;

export const InfoInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoWrapper= styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #e9ecef;

  ${props => {
    if (props.isSavedMode){
      return (
        css`
          ${InfoSavedWrapper} { display: block; }
          ${InfoInputWrapper} { display: none; }
        `
    )}
    else {
      return (
        css`
          ${InfoSavedWrapper} { display: none; }
          ${InfoInputWrapper} { display: flex; }
        `
    )}
  }}
`;



export const UserName = styled.div`
  @media (min-width: 769px) {
    margin-top: 30px;
    font-size: 24px;
  }

  font-weight: bold;
  font-size: 1.125rem;
  margin-bottom: 8px;
`;

export const Intro = styled.div`
  @media (min-width: 769px) {
    font-size: 18px;
  }

  font-size: 14px;
  color: #868e96;
  margin-bottom: 12px;
`;

export const InfoChangeBtn = styled(ChangeBtn)``;

export const UserNameInput = styled(Input)`
  font-size: 1.125rem;
  font-weight: bold;
`;

export const IntroInput = styled(Input)`
  font-size: 0.875rem;
`;

export const InfoSaveBtn = styled(SaveBtn)`
  margin-left: auto;
`;

//// TITLE

export const TitleSavedWrapper = styled.div``;

export const TitleInputWrapper = styled.div`
  align-items: center;
`;

export const TitleWrapper = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #e9ecef;

  ${props => {
    if (props.isSavedMode){
      return (
        css`
          ${TitleSavedWrapper} { display: flex; }
          ${TitleInputWrapper} { display: none; }
        `
    )}
    else {
      return (
        css`
          ${TitleSavedWrapper} { display: none; }
          ${TitleInputWrapper} { display: flex; }
        `
    )}
  }}
`;

export const TitleText = styled(Text)``;



export const Title = styled.div`
  font-size: 16px;
  margin-right: auto;
  margin-bottom: 12px;
`;

export const TitleChangeBtn = styled(ChangeBtn)``;

export const TitleInput = styled(Input)`
`;

export const TitleSaveBtn = styled(SaveBtn)`
  margin-bottom: 8px;
  margin-left: 16px;
`;

export const TitleDesc = styled(Desc)``;

//// SOCIAL

export const SocialSavedWrapper = styled.div``;

export const SocialInputWrapper = styled.div``;

export const SocialWrapper = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #e9ecef;
`;

export const SocialText = styled(Text)``;

export const SocialDesc = styled(Desc)``;

//// EMAIL RECEIVE

export const EmailReceiveWrapper = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #e9ecef;

`;

export const EmailReceiveText = styled(Text)``;

//// MEMBERSHIP WITHDRAWAL

export const WithdrawalWrapper = styled.div`
  padding: 15px 0;
`;

export const WithdrawalText = styled(Text)``;

export const WithdrawalBtn = styled(SaveBtn)`
  width: 110px;
  background: #ff6b6b;

  &:hover {
    background: #ff6b6b;
    opacity: 0.8;
  }
`;

export const WithdrawalDesc = styled(Desc)`
  margin-top: 12px;
`;