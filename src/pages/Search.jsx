import React, { useState } from "react";
import Header from "components/Header";
import SearchPost from "components/SearchPost";
import searchIcon from "assets/images/searchIcon.svg";
import {
  GlobalStyle,
  PageWrapper,
  FlexWrapper,
  MainWrapper,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  ContentWrapper,
  TotalPostText
} from "styles/Search"


export default function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchResultText, setSearchResultText] = useState('');
  const [isSearchTyped, setIsSearchTyped] = useState(false);
  const [posts, setPosts] = useState([ // 임시로 초기화
    <SearchPost
      title="post1"
      content="content"
    ></SearchPost>,
    <SearchPost
      img_src="https://media.vlpt.us/images/hwang-eunji/post/c4464eb3-c965-4a57-a31b-4a71f4fe41f5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-10%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%203.02.16.png?w=768"
      title="post2"
      content="content"
    ></SearchPost>,
    <SearchPost
      title="post3"
      content="content"
    ></SearchPost>,   
    <SearchPost
      title="post4"
      content="content"
    ></SearchPost>
  ]);

  const searchPost = (e) => {
    if (e.target.value === "") setIsSearchTyped(false);
    else {
      const newPost = posts.filter(post => {
        return (
          (post.props.title.indexOf(e.target.value) !== -1) ||
          (post.props.content.indexOf(e.target.value) !== -1)
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
      <GlobalStyle />
      <PageWrapper>
        <Header></Header>
        <FlexWrapper>
          <MainWrapper>
            <SearchWrapper>
              <SearchIcon>
                <img src={searchIcon} alt="search icon" />
              </SearchIcon>
              <SearchInput
                placeholder="검색어를 입력하세요"
                onKeyUp={searchPost}
              />
            </SearchWrapper>
            <ContentWrapper>
              {!isSearchTyped ? "" : <TotalPostText dangerouslySetInnerHTML={{__html: searchResultText}}></TotalPostText>}
              {!isSearchTyped ? "" : 
                (searchResult.length === 0 ? "" : searchResult)}
            </ContentWrapper>
          </MainWrapper>
        </FlexWrapper>
      </PageWrapper>
    </>
  );
}
