import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled, { keyframes }  from "styled-components";
import Editor from "components/Editor";
import Preview from "components/Preview";

//// animation

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

////

const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const WriteWrapper = styled.div`
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

const WriteHeader = styled.div``;

//// TITLE

const TitleWrapper = styled.div``;

const Title = styled.input`
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

const TitleLine = styled.div`
  width: 64px;
  height: 6px;
  margin: 30px 0px 15px 48px;
  background: rgb(73, 80, 87);
`;

//// TAG

const TagAlert = styled.div`
  padding: 12px;
  width: 325px;
  font-size: 12px;
  color: white;
  background: rgb(52, 58, 64);
  position: absolute;
  bottom: -50px;
  z-index: -1;
`;

const TagWrapper = styled.div`
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

const Tag = styled.div`
  display: inline-box;
  padding: 5px 15px;
  margin-right: 12px;
  margin-bottom: 12px;
  background: #f1f3f5;
  color: rgb(18, 184, 134);
  border-radius: 30px;
  font-size: 16px;
  white-space: nowrap;
  cursor: pointer;
`;

const TagInput = styled.input`
  border: none;
  outline: none;
  margin-top: 6px;
  margin-bottom: 12px;
  font-size: 1.125rem;
`;


//// TOOL

const ToolBar = styled.div`
  width: 100%;
  min-width: 700px;
  padding: 0px 48px 18px 48px;
  display: flex;
`;

const ToolBtn = styled.button`
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

const HToolWrapper = styled.div`
  &::after {
    content: "|";
    display: inline-block;
    margin: 0px 10px;
    color: rgb(134, 142, 150, 0.5);
  }
`;

const Header = styled(ToolBtn)`
  padding: 15px;  
`;

const HeaderNum = styled.label`
  font-size: 8px;
  font-weight: bold;
  font-family: serif;
`;

const TextDecoWrapper = styled.div`
  &::after {
    content: "|";
    display: inline-block;
    margin: 0px 10px;
    position: relative;
    top: -6px;
    color: rgb(134, 142, 150, 0.5);
  }
`;

const Bold = styled(ToolBtn)``;
const Italic = styled(ToolBtn)``;
const LineThrough = styled(ToolBtn)``;

const Quotes = styled(ToolBtn)``;
const HyperLink = styled(ToolBtn)``;
const Images = styled(ToolBtn)``;
const Codes = styled(ToolBtn)``;


//// FOOTER

const WriteFooter = styled.div`
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

const FooterBtn = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.125em;
  padding: 8px 20px;
  border-radius: 5px;
  margin-left: 15px;
`;

const ExitBtn = styled(FooterBtn)`
  background: white;

  &:hover {
    background: rgb(239, 239, 243, 0.7);
  }
`;

const ExitLink = styled(Link)``;

const SaveBtn = styled(FooterBtn)`
  font-weight: bold;
  color: rgb(73, 80, 87);
  background: rgb(233, 236, 239);
  position: absolute;
  right: 140px;

  &:hover {
    background: rgb(240, 240, 240, 0.7);
  }
`;

const PublishBtn = styled(FooterBtn)`
  font-weight: bold;
  background: rgb(18, 184, 134);
  color: white;
  position: absolute;
  right: 15px;

  &:hover {
    background: rgb(18, 184, 134, 0.7);
  }
`;



export default function Write() {
  //const [text, setText] = useState('');
  const [tags, setTag] = useState([]);
  
  const max_tag_id = useRef(0);

  /*const handleChange = (e) => {
    const TypedText = e.target.value;
    setText(TypedText);
    window.localStorage.setItem('text', TypedText);
  }*/

  const handleClick = (e) => {
    deleteTag(e.target.id);
  }

  const handleKeyDown = (e) => {
    if ((e.keyCode === 13 || e.keyCode === 188) 
          && (e.target.value !== '')) { // Enter, ','
      if (!isDuplicateValue(e)) insertTag(e);
    }
    if (e.keyCode === 8 && e.target.value === '') { // BackSpace
      if (tags.length > 0) deleteTag(tags[tags.length-1].props.id);
    }
  }

  const isDuplicateValue = (e) => {
    for (let i=0; i<tags.length; i++) {
      if (tags[i].props.value === e.target.value){
        e.target.value = "";
        return true;
      }
    }
    return false;
  }

  const insertTag = (e) => {
    const inputText = e.target.value;
    max_tag_id.current++;

    const newTag = <Tag 
                      id={max_tag_id.current}
                      key={max_tag_id.current}
                      value={inputText}
                      onClick={handleClick}
                    >{inputText}</Tag>

    setTag([
      ...tags, newTag
    ]);

    e.target.value = "";
  }

  const deleteTag = (selectedID) => {
    setTag(tags.filter(tag => tag.props.id !== selectedID));
  }

  return (
    <>
    <GlobalStyle />
    <PageWrapper>
      <WriteWrapper>
        <WriteHeader>
          <TitleWrapper>
            <Title 
              type="text" 
              placeholder="제목을 입력하세요" 
            />
            <TitleLine></TitleLine>
          </TitleWrapper>
          <TagWrapper>
            {tags}
            <TagInput 
              type="text" 
              placeholder="태그를 입력하세요"
              onKeyDown={handleKeyDown}
            />
            <TagAlert>
              쉼표 혹은 엔터를 입력하여 태그를 등록할 수 있습니다.<br/>
              등록된 태그를 클릭하면 삭제됩니다.
            </TagAlert>
          </TagWrapper>
          <ToolBar>
            <HToolWrapper>
              <Header>H<HeaderNum>1</HeaderNum></Header>
              <Header>H<HeaderNum>2</HeaderNum></Header>
              <Header>H<HeaderNum>3</HeaderNum></Header>
              <Header>H<HeaderNum>4</HeaderNum></Header>
            </HToolWrapper>
            <TextDecoWrapper>
              <Bold><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 18" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"></path></svg></Bold>
              <Italic><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 18" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"></path></svg></Italic>
              <LineThrough><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 18"  height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"></path></svg></LineThrough>
            </TextDecoWrapper>
            <Quotes><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 18"  height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg></Quotes>
            <HyperLink><svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 18"  height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></HyperLink>
            <Images><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 18"  height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></svg></Images>
            <Codes><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 18"  height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></svg></Codes>
          </ToolBar>
        </WriteHeader>
        <Editor
          type="text" 
          placeholder="당신의 이야기를 적어보세요..."
          //onInputChange={handleChange}
        />
        <WriteFooter>
          <ExitLink to="/">
            <ExitBtn><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>&nbsp;&nbsp;나가기</ExitBtn>
          </ExitLink>
          <SaveBtn>임시저장</SaveBtn>
          <PublishBtn>출간하기</PublishBtn>
        </WriteFooter>
      </WriteWrapper>
      <Preview 
        //inputValue={{text}}
      ></Preview>
    </PageWrapper>
    </>
  );
}
