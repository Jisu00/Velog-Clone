import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

/// animation

const fadeIn = keyframes`
  from { opacity: 0.5; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0.5; }
`;

const setShadow = keyframes`
  from { box-shadow: 0px 0px 5px 0px lightgray; }
  to { box-shadow: 0px 0px 13px 0px lightgray; }
`;

const changeColor = keyframes`
  from { background: white; }
  to { background: #343a40; }
`;

///

export const PopupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0px;
`;

export const LogoIcon = styled.div`
  height: 27px;
  cursor: pointer;
  margin-right: 15px;
`;

export const LogoTitle = styled.div`
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (min-width: 1025px){
    font-size: 24px;
  }
  cursor: pointer;
  color: #343a40;
  @font-face {
    font-family: "Fira Mono";
    src: url("./assets/Fonts/FiraMono-Medium.ttf");
  }
  font-family: "Fira Mono";
`;

export const LoginToggleIcon = styled.div` // 임시로 설정
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
`;

export const SearchBtnLink = styled(Link)``;

export const SearchBtn = styled.div`
  padding: 10px;
  padding-bottom: 5px;
  border-radius: 25px;
  cursor: pointer;
  margin-right: 15px;
  &:hover {
    background: #f1f1f1;
  }
`;

export const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  box-shadow: 0px 0px 7px 0px lightgray;
  cursor: pointer;
`;

export const DropDownMenuIcon = styled.img`
  height: 25px;
  margin-left: 5px;
  cursor: pointer;
  opacity: 0.5;
`;

export const MenuIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: -6px;
  &:hover {
    ${ProfileIcon} {
      animation: ${setShadow} 0.3s forwards;
    }
    ${DropDownMenuIcon} {
      animation: ${fadeIn} 0.3s forwards;
    }
  }
`;

export const DropDownMenuWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 60px;
  width: 190px;
  padding: 0px;
  z-index: 1;
  box-shadow: 0px 0px 7px 0px lightgray;
`;

export const Menu = styled.div`
  width: 190px;
	height: 48px;
  cursor: pointer;
  background: white;
  line-height: 48px;
  padding: 0px 15px;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    background: #f8f9fa;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const MyVelogMenu = styled(Menu)``;
export const WriteMenu = styled(Menu)`
  @media (min-width: 1025px) {
    display: none;
  }
`;
export const SavesMenu = styled(Menu)``;
export const LikedMenu = styled(Menu)``;
export const SettingMenu = styled(Menu)``;
export const LogoutMenu = styled(Menu)``;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
	text-align: left;
`;

export const Btn = styled.button`
  padding: 1px 16px;
  height: 32px;
  font-size: 1em;
  font-weight: bold;
  border-radius: 18px;
  cursor: pointer;
`;

export const WriteBtn = styled(Btn)`
  @media (max-width: 1024px) {
    display: none!important;
  }
  background: white;
  border: 1px solid #343a40;
  color: #343a40;
  margin-right: 20px;
  &:hover {
    animation: ${changeColor} 0.2s forwards;
    color: white;
  }
`;

export const WriteBtnLink = styled(Link)`
  text-decoration: none;
  color: #343a40;
`;

export const LoginBtn = styled(Btn)`
  margin-right: 5px;
  float: right;
  color: white;
  background: #343a40;
  border: none;
  &:hover {
    animation: ${fadeOut} 0.2s forwards;
  }
`;