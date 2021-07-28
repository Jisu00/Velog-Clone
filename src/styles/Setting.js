import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

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
  cursor: pointer;
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

const changeBtn = styled.div`
  width: 35px;
  font-size: 16px;
  color: rgb(18, 184, 134);
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const saveBtn = styled.button`
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px 10px;
  cursor: pointer;
  width: 70px;
  background: rgb(18, 184, 134);
  color: white;

  &:hover {
    background: rgb(18, 184, 134, 0.8);
  }
`;

////

export const ProfileWrapper= styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #e9ecef;
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

export const ProfileChangeBtn = styled(changeBtn)``;

export const ProfileSaveBtn = styled(saveBtn)``;

////