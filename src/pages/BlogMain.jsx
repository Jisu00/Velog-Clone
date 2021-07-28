import React, { useState, useRef, useEffect } from "react";
import Header from "components/Header";
import githubIcon from "assets/images/githubIcon2.svg";
import twitterIcon from "assets/images/twitterIcon.svg";
import facebookIcon from "assets/images/facebookIcon.svg";
import homepageIcon from "assets/images/homepageIcon.svg";
import mailIcon from "assets/images/mailIcon.svg";
import searchIcon from "assets/images/searchIcon.svg";
import Post from "components/Post";
import Series from "components/Series";
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
  TagList,
  TagLink,
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
    { 
      img_src: null,
      title: "post1",
      content: "content" 
    },
    { 
      img_src: "https://media.vlpt.us/images/hwang-eunji/post/c4464eb3-c965-4a57-a31b-4a71f4fe41f5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-10%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%203.02.16.png?w=768",
      title: "post2",
      content: "content" 
    }
  ])
  const [searchResult, setSearchResult] = useState([]);
  const [searchResultText, setSearchResultText] = useState('');
  const [isWriteMode, setIsWriteMode] = useState(false);
  const [isSaveMode, setIsSaveMode] = useState(true);
  const [isSearchTyped, setIsSearchTyped] = useState(false);

  const textArea = useRef();

  useEffect(()=>{
    if (window.localStorage.about_text){
      setText(window.localStorage.about_text);
      setIsWriteMode(true);
      setIsSaveMode(false);
      textArea.current.value = window.localStorage.about_text;
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

    window.localStorage.setItem('about_text', typedText);

    if (typedText === ""){
      setIsWriteMode(false);
      setIsSaveMode(true);
    }
    else 
      setText(typedText);
  }

  const searchPost = (e) => {
    if (e.target.value === "") setIsSearchTyped(false);
    else {
      const newPost = posts.filter(post => {
        return (
          (post.title.indexOf(e.target.value) !== -1) ||
          (post.content.indexOf(e.target.value) !== -1)
        )
      });

      setIsSearchTyped(true);
      setSearchResult(newPost);
      
      if (newPost.length === 0){    
        setSearchResultText("검색 결과가 없습니다.");
      }
      else{
        setSearchResultText("총 <b>" + newPost.length + "</b>개의 포스트를 찾았습니다.");
      }
    }
  }

  return (
    <>
      <GlobalStyle/>
      <PageWrapper>
        <HeaderWrapper><Header header_mode="blog"></Header></HeaderWrapper>
        <FlexWrapper
          menu={menu}
        >
          <TagListWrapper
            menu={menu}
          >
            <TagListText>태그 목록</TagListText>
            <TagList><TagLink href="#" style={{ color: "#20c997", fontWeight: 'bold'}}>전체 보기</TagLink> (2)</TagList>
            <TagList><TagLink href="#">tag1</TagLink> (1)</TagList>
            <TagList><TagLink href="#">tag2</TagLink> (1)</TagList>
          </TagListWrapper>
          <ProfileWrapper>
            <ProfileIcon
              src="https://media.vlpt.us/images/jisu00/profile/cf2284a3-2e41-4371-bcad-143b43975e9c/social.png?w=120"
              onClick={()=>{setMenu("post")}}
              alt="profile icon"
            />
            <UserName>UserName</UserName>
            <Intro>Intro</Intro>
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
                    onKeyUp={searchPost}
                  />
                </SearchBorderWrapper>
              </SearchWrapper>
              <TagMenuWrapper>
                <TotalTag>전체보기 (2)</TotalTag>
                <TagMenu>tag1 (1)</TagMenu>
              </TagMenuWrapper>
              {!isSearchTyped ? "" : <ResultText dangerouslySetInnerHTML={{__html: searchResultText}}></ResultText>}
              {!isSearchTyped ? 
                  posts.map(post => (
                      <Post
                        img_src={post.img_src}
                        title={post.title}
                        content={post.content}></Post>
                  )) : 
                (searchResult.length === 0 ? "" : 
                  searchResult.map(post => (
                    <Post
                      img_src={post.img_src}
                      title={post.title}
                      content={post.content}></Post>
                  ))
                )}
            </PostWrapper>
            <SeriesWrapper>
              <Series
                name="series1"
                total_post="1"
                last_update="방금 전"
              ></Series>
              <Series
                name="series2"
                total_post="2"
                last_update="2일 전"
              ></Series>
              <Series
                name="series3"
                total_post="4"
                last_update="4일 전"
              ></Series>
              <Series
                name="series4"
                total_post="2"
                last_update="6일 전"
              ></Series>
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
