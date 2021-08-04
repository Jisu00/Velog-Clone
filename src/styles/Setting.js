import styled, { css } from "styled-components";

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

export const ProfileWrapper = styled.div`
  @media (min-width: 769px) {
    width: 768px;
    padding: 30px 0px;
  }
`;

/// MAIN

export const MainInfoWrapper = styled.div`
  @media (min-width: 769px) {
    display: flex;
    margin-bottom: 50px;
  }
`;

//// PROFILE

export const ProfileImgWrapper = styled.div`
  @media (min-width: 769px) {
    width: 184px;
    border-bottom: none;
    border-right: 1px solid #e9ecef;
    padding-right: 24px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

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

export const Input = styled.input`
  border: 1px solid #dee2e6;
  font-size: 1rem;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  width: 96.3%;

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

export const InfoSavedWrapper = styled.div``;

export const InfoInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoWrapper= styled.div`
  @media (min-width: 769px) {
    margin-left: 24px;
    border-bottom: none;
    width: 100%;
  }

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
    font-size: 36px;
  }

  font-weight: bold;
  font-size: 1.125rem;
  margin-bottom: 8px;
`;

export const Intro = styled.div`
  @media (min-width: 769px) {
    font-size: 16px;
  }

  font-size: 14px;
  color: #868e96;
  margin-bottom: 12px;
`;

export const InfoChangeBtn = styled(ChangeBtn)``;

export const UserNameInput = styled(Input)`
  width: 100%;
  font-size: 1.125rem;
  font-weight: bold;
`;

export const IntroInput = styled(Input)`
  width: 100%;
  font-size: 0.875rem;
`;

export const InfoSaveBtn = styled(SaveBtn)`
  margin-left: auto;
`;

/// SUB

export const SubInfoWrapper = styled.div``;

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

export const SocialSavedWrapper = styled.div`
  align-items: center;
`;

export const SocialInputWrapper = styled.div`
  flex-direction: column;
`;

export const SocialWrapper = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #e9ecef;

  ${props => {
    if (props.isSavedMode){
      return (
        css`
          ${SocialSavedWrapper} { display: flex; }
          ${SocialInputWrapper} { display: none; }
        `
    )}
    else {
      return (
        css`
          ${SocialSavedWrapper} { display: none; }
          ${SocialInputWrapper} { display: flex; }
        `
    )}
  }}
`;

export const SocialText = styled(Text)``;

export const SocialAddrWrapper = styled.div``;

const SocialIcon = styled.img`
  filter: invert(20%) sepia(11%) saturate(562%) hue-rotate(169deg) brightness(94%) contrast(91%);
  width: 16px;
  margin-right: 10px;
  vertical-align: middle;
`;

export const MailWrapper = styled.div``;
export const GithubWrapper = styled.div``;
export const TwitterWrapper = styled.div``;
export const FacebookWrapper = styled.div``;
export const HomepageWrapper = styled.div``;

export const MailIcon = styled(SocialIcon)``;
export const GithubIcon = styled(SocialIcon)``;
export const TwitterIcon = styled(SocialIcon)``;
export const FacebookIcon = styled(SocialIcon)``;
export const HomepageIcon = styled(SocialIcon)``;

const Social = styled.div`
  display: inline-block;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const Mail = styled(Social)``;
export const Github = styled(Social)``;
export const Twitter = styled(Social)``;
export const Facebook = styled(Social)``;
export const Homepage = styled(Social)``;

export const SocialChangeBtn = styled(ChangeBtn)`
  margin-left: ${props => !props.isSocialNothing ? "auto" : ""};
  width: ${props => props.isSocialNothing ? "85px" : ""};
`;

export const MailInputWrapper = styled.div``;
export const GithubInputWrapper = styled.div``;
export const TwitterInputWrapper = styled.div``;
export const FacebookInputWrapper = styled.div``;
export const HomepageInputWrapper = styled.div``;

export const SocialSaveBtn = styled(SaveBtn)`
  margin-top: 16px;
  margin-left: auto;
`;

export const SocialDesc = styled(Desc)``;

//// EMAIL RECEIVE

export const EmailReceiveWrapper = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #e9ecef;

`;

const ToggleFill = styled.div`
  background: #e9ecef;
  width: 50px;
  height: 26px;
  border-radius: 26px;
`;

const ToggleSwitch = styled.div`
  background: white;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: left 0.3s;
`;

export const EmailReceiveText = styled(Text)``;

export const CommentAlertWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

export const CommentAlertText = styled.div`
  width: 230px;
`;

export const CommentToggleFill = styled(ToggleFill)``;

export const CommentToggleSwitch = styled(ToggleSwitch)``;

export const CommentAlertToggleWrapper = styled.div`
  position: relative;
  cursor: pointer;

  ${props => {
    if (props.isAlert === true){
      return (
        css` 
          ${CommentToggleFill} { background: #20c997; }
          ${CommentToggleSwitch} { left: 27px; }
        `
    )}
  }}
`;

//

export const UpdateNewsWrapper = styled.div`
  display: flex;
`;

export const UpdateNewsText = styled.div`
  width: 230px;
`;

export const UpdateToggleFill = styled(ToggleFill)``;

export const UpdateToggleSwitch = styled(ToggleSwitch)``;

export const UpdateNewsToggleWrapper = styled.div`
  position: relative;
  cursor: pointer;

  ${props => {
    if (props.isAlert === true){
      return (
        css` 
          ${UpdateToggleFill} { background: #20c997; }
          ${UpdateToggleSwitch} { left: 27px; }
        `
    )}
  }}
`;

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

export const WithdrawalPopupWrapper = styled.div``;