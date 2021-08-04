import React, { useEffect, useState } from "react";
import LoginPopup from "components/LoginPopup";
import logoIcon from "assets/images/logoIcon.svg";
import searchIcon from "assets/images/searchIcon.svg";
import dropDownMenuIcon from "assets/images/dropDownMenuIcon.svg";
import "../index.css";
import {
  HeaderWrapper,
  LogoIcon,
  LogoIconLink,
  LogoTitle,
  LogoTitleLink,
  LoginToggleIcon,
  SearchBtnLink,
  SearchBtn,
  LoginBtn,
  WriteBtnLink,
  WriteBtn,
  MenuWrapper,
  MenuIconWrapper,
  ProfileIcon,
  DropDownMenuIcon,
  DropDownMenuWrapper,
  MyVelogMenuLink,
  MyVelogMenu,
  MenuLink,
  WriteMenu,
  SavesMenu,
  LikedMenu,
  SettingMenuLink,
  SettingMenu,
  LogoutMenu,
  PopupWrapper
} from "styles/Header"

export default function Header({ header_mode }) {
  const [isLoginPopup, setIsLoginPopup] = useState(false);
  const [isMenuPopup, setIsMenuPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [title, setTitle] = useState("");
  const [mode, setMode] = useState("main");

  useEffect(()=>{
    setMode(header_mode);
    setTitle(window.localStorage.blog_title);
  }, []);

  const loginPopup = () => {
    setIsLoginPopup(true);
  };

  const menuPopup = () => {
    isMenuPopup ? setIsMenuPopup(false) : setIsMenuPopup(true);
  };

  const toggleLogin = () => {
    if (isLogin === true) {
      setIsLogin(false);
      setIsMenuPopup(false);
    } else if (isLogin === false) {
      setIsLogin(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <HeaderWrapper>
        <div
          class="logo_wrapper"
          style={{ display: "flex", alignItems: "center" }}
        >
          <LogoIconLink to="/">
            <LogoIcon 
              style={mode === "main" ? {display:'none'} : {display:'block'}}
            >
              <img src={logoIcon} alt="logo icon" />
            </LogoIcon>
          </LogoIconLink>
          <LogoTitleLink to={mode === "main" ? "/" : "/blog-main"}>
            <LogoTitle>
              {mode === "main" ? "velog" : title}
            </LogoTitle>
          </LogoTitleLink>
        </div>
        <div
          class="right_wrapper"
          style={{ display: "flex", alignItems: "center" }}
        >
          <LoginToggleIcon 
            onClick={toggleLogin}
          ></LoginToggleIcon>
          <SearchBtnLink to="/search">
            <SearchBtn>
              <img src={searchIcon} alt="search icon" />
            </SearchBtn>
          </SearchBtnLink>
          
          <LoginBtn 
            style={isLogin ? {display:'none'} : {display:'block'}}
            onClick={loginPopup}>로그인</LoginBtn>
            <WriteBtnLink to="/write">
              <WriteBtn
               style={isLogin ? {display:'block'} : {display:'none'}}>새 글 작성
              </WriteBtn>
            </WriteBtnLink>
          <MenuWrapper 
            style={isLogin ? {display:'block'} : {display:'none'}}>
            <MenuIconWrapper onClick={menuPopup}>
              <ProfileIcon
                src="https://media.vlpt.us/images/jisu00/profile/cf2284a3-2e41-4371-bcad-143b43975e9c/social.png?w=120"
                alt="profile icon"
              />
              <DropDownMenuIcon src={dropDownMenuIcon} alt="menu icon" />
            </MenuIconWrapper>
            <DropDownMenuWrapper 
              style={isMenuPopup ? {display:'block'} : {display:'none'}}>
              <MyVelogMenuLink to="/blog-main">
                <MyVelogMenu>내 벨로그</MyVelogMenu>
              </MyVelogMenuLink>
              <MenuLink to="/write"><WriteMenu>새 글 작성</WriteMenu></MenuLink>
              <SavesMenu>임시 글</SavesMenu>
              <LikedMenu>읽기 목록</LikedMenu>
              <SettingMenuLink to="/setting">
                <SettingMenu>설정</SettingMenu>
              </SettingMenuLink>
              <LogoutMenu onClick={toggleLogin}>로그아웃</LogoutMenu>
            </DropDownMenuWrapper>
          </MenuWrapper>
        </div>
      </HeaderWrapper>

      <PopupWrapper>
        <LoginPopup
          isOpen={isLoginPopup}
          setIsLoginPopup={setIsLoginPopup}
        ></LoginPopup>
      </PopupWrapper>
    </div>
  );
}