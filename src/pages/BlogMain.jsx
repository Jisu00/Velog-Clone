import React, { useState, useRef, useEffect } from "react";
import Header from "components/Header";
import githubIcon from "assets/images/githubIcon2.svg";
import twitterIcon from "assets/images/twitterIcon.svg";
import facebookIcon from "assets/images/facebookIcon.svg";
import homepageIcon from "assets/images/homepageIcon.svg";
import mailIcon from "assets/images/mailIcon.svg";
import searchIcon from "assets/images/searchIcon.svg";
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
  TagListWrapper,
  TagListText,
  TagMenuWrapper,
  TotalTag,
  TagMenu,
  ResultText,
  SearchWrapper,
  SearchBorderWrapper,
  SearchIcon,
  SearchInput,
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
  const [text, setText] = useState('');
  const [posts, setPosts] = useState([ // 임시로 초기화
    <Post
      //img_src="https://media.vlpt.us/images/woo0_hooo/post/ce528f97-e8e4-4aa7-876a-e78d7b1f72e2/2CE11015-D1A5-4FFA-BB26-2B1A02A1020F.png?w=768"
      title="post1"
      content="content"
    ></Post>,
    <Post
      img_src="https://media.vlpt.us/images/hwang-eunji/post/c4464eb3-c965-4a57-a31b-4a71f4fe41f5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-10%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%203.02.16.png?w=768"
      title="post2"
      content="content"
    ></Post>
  ])
  const [searchResult, setSearchResult] = useState([]);
  const [searchResultText, setSearchResultText] = useState('');
  const [isWriteMode, setIsWriteMode] = useState(false);
  const [isSaveMode, setIsSaveMode] = useState(true);
  const [isSearchTyped, setIsSearchTyped] = useState(false);
  
  const textArea = useRef();
  const searchInput = useRef();

  useEffect(()=>{
    if (window.localStorage.text){
      setText(window.localStorage.text);
      setIsWriteMode(true);
      setIsSaveMode(false);
      textArea.current.value = window.localStorage.text;
    }
    else {
      setIsWriteMode(false);
      setIsSaveMode(true);
    }
  }, []);

  const toggleWriteMode = () => {
    setIsWriteMode(true);
  };

  const toggleSaveMode = () => {
    isSaveMode ? setIsSaveMode(false) : setIsSaveMode(true);
  }

  const saveContent = () => {
    if (!isSaveMode) return;

    const typedText = textArea.current.value;

    if (typedText === ""){
      setIsWriteMode(false);
      setIsSaveMode(true);
    }
    else {
      setText(typedText);
      window.localStorage.setItem('text', typedText);
    }
  }

  const searchTitle = (e) => {
    if (e.target.value === "") setIsSearchTyped(false);
    else {
      const newPost = posts.filter(post => post.props.title === e.target.value);

      setIsSearchTyped(true);
      setSearchResult(newPost);
      
      if (newPost.length === 0){    
        setSearchResultText("검색 결과가 없습니다.");
      }
      else{
        setSearchResultText("총 " + newPost.length + "개의 포스트를 찾았습니다.");
      }
    }
  }

  const setNoResultText = (newPost) => {

  }

  return (
    <>
      <GlobalStyle/>
      <PageWrapper>
        <HeaderWrapper><Header></Header></HeaderWrapper>
        <FlexWrapper>
          <TagListWrapper
            menu={menu}
          >
            <TagListText>태그 목록</TagListText>
            </TagListWrapper>
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
              <SearchWrapper>
                <SearchBorderWrapper>
                  <SearchIcon>
                    <img src={searchIcon} alt="search icon" />
                  </SearchIcon>
                  <SearchInput
                    placeholder="검색어를 입력하세요"
                    onKeyUp={searchTitle}
                    ref={searchInput}
                  />
                </SearchBorderWrapper>
              </SearchWrapper>
              <TagMenuWrapper>
                <TotalTag>전체보기 (2)</TotalTag>
                <TagMenu>tag1 (1)</TagMenu>
              </TagMenuWrapper>
              {!isSearchTyped ? "" : <ResultText>{searchResultText}</ResultText>}
              {!isSearchTyped ? posts : 
                (searchResult.length === 0 ? "" : searchResult)}
            </PostWrapper>
            <SeriesWrapper>
              series
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
                    toggleSaveMode(); saveContent(e);
                  }}
                >
                  {isSaveMode ? "저장하기" : "수정하기"}
                </SaveBtn>
                <AboutWriteArea
                  placeholder="당신은 어떤 사람인가요? 당신에 대해서 알려주세요."
                  isSaveMode={isSaveMode}
                  ref={textArea}
                />
                <AboutText
                  isSaveMode={isSaveMode}
                >{text}</AboutText>
              </AboutWriteWrapper>
            </AboutWrapper>
          </MainWrapper>
        </FlexWrapper>
      </PageWrapper>
    </>
  );
}
