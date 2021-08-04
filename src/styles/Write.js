import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

//// animation

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

////

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  animation: ${fadeIn} 0.5s forwards;
`;

export const WriteWrapper = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 1025px) {
    width: 50%;
  }

  background: white;
  height: 100vh;
  overflow-y: hidden;
`;

export const WriteHeader = styled.div``;

//// TITLE

export const TitleWrapper = styled.div``;

export const Title = styled.input`
  width: 100%;
  font-size: 2.75rem;
  font-weight: bold;
  border: none;
  outline: none;
  padding: 36px 48px 0 48px;
  word-break: break-all;
  height: 90px;
  overflow-y: hidden;
  resize: none;

  &::placeholder {
    color: rgb(134, 142, 155, 0.7);
  }
`;

export const TitleLine = styled.div`
  width: 64px;
  height: 6px;
  margin: 30px 0px 15px 48px;
  background: rgb(73, 80, 87);
`;

//// TAG

export const TagAlert = styled.div`
  padding: 12px;
  width: 325px;
  font-size: 12px;
  color: white;
  background: rgb(52, 58, 64);
  position: absolute;
  bottom: -50px;
  z-index: -1;
`;

export const TagWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 0 48px;
  display: flex;
  flex-flow: wrap;
  height: auto;

  &:focus-within {
    ${TagAlert} {
      z-index: 1;
      animation: ${fadeIn} 0.3s forwards;
      transform: translate(0, 10px);
      transition-property: all;
      transition-duration: 0.3s;
    }
  }

  &:not(:focus-within) {
    ${TagAlert} {
      z-index: -1;
      animation: ${fadeOut} 0.3s forwards;
      transform: translate(0, -10px);
      transition-property: all;
      transition-duration: 0.3s;
    }
  }
`;

export const TagInput = styled.input`
  border: none;
  outline: none;
  margin-top: 6px;
  margin-bottom: 12px;
  font-size: 1.125rem;
`;


//// TOOL

export const ToolBar = styled.div`
  width: 100%;
  min-width: 700px;
  padding: 0px 48px 18px 48px;
  display: flex;
`;

export const ToolBtn = styled.button`
  color: rgb(134, 142, 150);
  font-size: 1rem;
  font-weight: bold;
  font-family: serif;
  border: none;
  cursor: pointer;
  padding: 8px;
  background: none;

  &:hover {
    background: rgb(239, 239, 243, 0.5);
    color: black;
  }
`;

export const ToolImg = styled.img`
  filter: invert(64%) sepia(13%) saturate(231%) hue-rotate(169deg) brightness(85%) contrast(89%);

  &:hover {
    filter: invert(0%) sepia(9%) saturate(7496%) hue-rotate(69deg) brightness(84%) contrast(97%);
  }
`;

export const HToolWrapper = styled.div`
  &::after {
    content: "|";
    display: inline-block;
    margin: 0px 10px;
    color: rgb(134, 142, 150, 0.5);
  }
`;

export const Header = styled(ToolBtn)`
  padding: 15px;  
`;

export const HeaderNum = styled.label`
  font-size: 8px;
  font-weight: bold;
  font-family: serif;
`;

export const TextDecoWrapper = styled.div`
  &::after {
    content: "|";
    display: inline-block;
    margin: 0px 10px;
    position: relative;
    top: -6px;
    color: rgb(134, 142, 150, 0.5);
  }
`;

export const Bold = styled(ToolBtn)``;
export const Italic = styled(ToolBtn)``;
export const LineThrough = styled(ToolBtn)``;
export const Quotes = styled(ToolBtn)``;
export const HyperLink = styled(ToolBtn)``;
export const Images = styled(ToolBtn)``;
export const Codes = styled(ToolBtn)``;


export const BoldImg = styled(ToolImg)``;
export const ItalicImg = styled(ToolImg)``;
export const LineThroughImg = styled(ToolImg)``;
export const QuotesImg = styled(ToolImg)``;
export const HyperLinkImg = styled(ToolImg)``;
export const ImagesImg = styled(ToolImg)``;
export const CodesImg = styled(ToolImg)``;


//// FOOTER

export const WriteFooter = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
  }  
  width: 50%;
  height: 65px;
  box-shadow: 0px 0px 7px 0px lightgray;
  position: fixed;
  bottom: 0px;
  display: flex;
  align-items: center;
`;

export const FooterBtn = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.125em;
  padding: 8px 20px;
  border-radius: 5px;
  margin-left: 15px;
`;

export const ExitBtn = styled(FooterBtn)`
  background: white;

  &:hover {
    background: rgb(239, 239, 243, 0.7);
  }
`;

export const ExitLink = styled(Link)``;

export const SaveBtn = styled(FooterBtn)`
  font-weight: bold;
  color: rgb(73, 80, 87);
  background: rgb(233, 236, 239);
  position: absolute;
  right: 140px;

  &:hover {
    background: rgb(240, 240, 240, 0.7);
  }
`;

export const PublishBtn = styled(FooterBtn)`
  font-weight: bold;
  background: rgb(18, 184, 134);
  color: white;
  position: absolute;
  right: 15px;

  &:hover {
    background: rgb(18, 184, 134, 0.7);
  }
`;

export const PublishPopupWrapper = styled.div`
  background: #f8f9fa;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
`;