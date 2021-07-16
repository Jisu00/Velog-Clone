import { createGlobalStyle } from "styled-components";
import styled, { keyframes } from "styled-components";

//// animation

export const fadeIn = keyframes`
  from { opacity: 0.5; }
  to { opacity: 1; }
`;

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0.5; }
`;

export const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background: white;
  }
`;

///

export const PageWrapper = styled.div`
  @media (max-width: 1024px) {
    padding: 0px 20px;
  }
  @media (min-width: 1025px) {
    padding: 0px 80px;
  }

  padding: 0px 20px;
  width: 100%;
  height: 100%;
  background: white;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainWrapper = styled.div`
  @media (min-width: 769px) {
    width: 768px;
  }

  display: flex;
  width: 100%;
  margin-bottom: 40px;
  flex-direction: column;
`;

export const SearchInput = styled.input`
  @media (min-width: 769px) {
    margin-left: 10px;
    font-size: 1.5rem;
    width: 768px;
  }

  height: 2.25rem;
  border: none;
  outline: none;
  font-size: 1.125rem;

  &::placeholder {
    color: #b0b8c0;
  }
`;

export const SearchIcon = styled.div`
  margin: 0px 15px;
  margin-top: 3px;
`;

export const SearchWrapper = styled.div`
  @media (min-width: 769px) {
    height: 64px;
    width: 768px;
    margin-top: 50px;

    ${SearchIcon} {
      margin-left: 30px;
      transform: scale(1.4);
    }
  }

  display: flex;
  margin-top: 10px;
  margin-bottom: 24px !important;
  align-items: center;
  border: 1px solid black;
  height: 38px;
  transition: height 0.2s;

  &:focus-within {
    animation: ${fadeIn} 0.3s forwards;
  }

  &:not(:focus-within) {
    animation: ${fadeOut} 0.3s forwards;
  }
`;

export const ContentWrapper = styled.div``;
export const TotalPostText = styled.div`
  @media (min-width: 769px) {
    font-size: 18px;
  }

  padding-bottom: 5px;
  background: white;
  width: 100%;
  position: relative;
  top: 1px;
`;
export const SearchPostWrapper = styled.div``;

