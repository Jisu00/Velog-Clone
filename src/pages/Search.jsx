import React from 'react'
import styled, { keyframes } from 'styled-components';
import { createGlobalStyle } from "styled-components";
import Header from "components/Header";
import searchIcon from "assets/images/searchIcon.svg";

//// animation

const fadeIn = keyframes`
  from { opacity: 0.5; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0.5; }
`;

const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

///

const PageWrapper = styled.div`
  @media (max-width: 1024px) {
    padding: 0px 20px;
  }
  @media (min-width: 1025px) {
    padding: 0px 80px;
  }

  padding: 0px 20px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: white;
`;

const MainWrapper = styled.div``;

const SearchInput = styled.input`
  @media (min-width: 769px) {
    margin-left: 10px;
    font-size: 1.5rem;
  }

  height: 2.25rem;
  border: none;
  outline: none;
  font-size: 1.125rem;
  
  &::placeholder {
    color: #b0b8c0;
  }
`;

const SearchIcon = styled.div`
  margin: 0px 15px;
  margin-top: 3px;
`;

const SearchWrapper = styled.div`
  @media (min-width: 769px) {
    height: 64px;
    width: 768px;
    margin: 48px 310px;
    ${SearchIcon} {
      margin-left: 30px;
      transform: scale(1.4);
    }
  }
  
  display: flex;
  margin-top: 10px;
  margin-bottom: 24px!important;
  align-items: center;
  border: 1px solid black;
  transition: height 0.3s, margin 0.3s;

  &:focus-within {
    animation: ${fadeIn} 0.3s forwards;
  }

  &:not(:focus-within) {
    animation: ${fadeOut} 0.3s forwards;
  }
`;

const ContentWrapper = styled.div`
  @media (min-width: 769px) {
    padding: 0 310px;
  }
`;

const TotalPostText = styled.div``;





export default function Search() {
  const sendTypedText = (e) => {
    /*const typedText = e.target.value;

    window.location.href = "?=" + typedText*/
  }

  return (
    <>
      <GlobalStyle/>
      <PageWrapper>
        <Header></Header>
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
              총 <label style={{ fontWeight: 'bold' }}>0개</label>의 포스트를 찾았습니다.
            </TotalPostText>
          </ContentWrapper>
        </MainWrapper>
      </PageWrapper>
    </>
  )
}
