import React from "react";
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
  TotalPostText,
  SearchPostWrapper
} from "styles/Search"


export default function Search() {
  const sendTypedText = (e) => {
    /*const typedText = e.target.value;

    window.location.href = "?=" + typedText*/
  };

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
                onKeyDown={sendTypedText}
              />
            </SearchWrapper>
            <ContentWrapper>
              <TotalPostText>
                총 <label style={{ fontWeight: "bold" }}>0개</label>의 포스트를
                찾았습니다.
              </TotalPostText>
              <SearchPostWrapper>
                <SearchPost
                  //user_icon_src={}
                  //user_name={}
                ></SearchPost>
                <SearchPost></SearchPost>
              </SearchPostWrapper>
            </ContentWrapper>
          </MainWrapper>
        </FlexWrapper>
      </PageWrapper>
    </>
  );
}
