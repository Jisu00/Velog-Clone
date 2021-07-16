import React, { useState, useRef, useEffect } from "react";
import Editor from "components/Editor";
import Preview from "components/Preview";
import Alert from "components/Alert";
import boldIcon from "assets/images/boldIcon.svg";
import italicIcon from "assets/images/italicIcon.svg";
import lineThroughIcon from "assets/images/lineThroughIcon.svg";
import quotesIcon from "assets/images/quotesIcon.svg";
import hyperLinkIcon from "assets/images/hyperLinkIcon.svg";
import imagesIcon from "assets/images/imagesIcon.svg";
import codesIcon from "assets/images/codesIcon.svg";
import {
  GlobalStyle,
  PageWrapper,
  WriteWrapper,
  WriteHeader,
  TitleWrapper,
  Title,
  TitleLine,
  TagAlert,
  TagWrapper,
  Tag,
  TagInput,
  ToolBar,
  HToolWrapper,
  Header,
  HeaderNum,
  TextDecoWrapper,
  Bold,
  Italic,
  LineThrough,
  Quotes,
  HyperLink,
  Images,
  Codes,
  BoldImg,
  ItalicImg,
  LineThroughImg,
  QuotesImg,
  HyperLinkImg,
  ImagesImg,
  CodesImg,
  WriteFooter,
  ExitBtn,
  ExitLink,
  SaveBtn,
  PublishBtn
} from "styles/Write"

export default function Write() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tags, setTag] = useState([]);
  const [isAlert, setIsAlert] = useState(false);
  const [alertText, setAlertText] = useState(null);
  const [alertColor, setAlertColor] = useState(null);
  
  const max_tag_id = useRef(0);

  useEffect(()=>{
    if (window.localStorage.title)
      setTitle(window.localStorage.title);
    if (window.localStorage.text)
      setText(window.localStorage.text);
  }, []);

  useEffect(()=>{
    if (alertColor === null) return;
  });
  

  const handleTitleChange = (e) => {
    const TypedTitle = e.target.value;
    setTitle(TypedTitle);
  }

  const handleTextChange = (e) => {
    const TypedText = e.target.value;
    setText(TypedText);
  }

  const handleTagClick = (e) => {
    deleteTag(e.target.id);
  }

  const handleTagKeyDown = (e) => {
    if ((e.keyCode === 13 || e.keyCode === 188) 
          && (e.target.value !== '')) // Enter, ','
    { 
      let inputText = e.target.value;

      e.target.value = "";

      if (inputText[0] === "#")
        inputText = inputText.substr(1);

      if (!isExistValue(e, inputText)) 
        insertTag(inputText);
    }
    
    if (e.keyCode === 8 && e.target.value === '') { // BackSpace
      if (tags.length > 0) 
        deleteTag(tags[tags.length-1].props.id);
    }
  }

  const isExistValue = (inputText) => {
    for (let i=0; i<tags.length; i++) {
      if (tags[i].props.value === inputText) 
        return true;
    }
    
    return false;
  }

  const insertTag = (inputText) => {
    max_tag_id.current++;

    const newTag = <Tag 
                      id={max_tag_id.current}
                      key={max_tag_id.current}
                      value={inputText}
                      onClick={handleTagClick}
                    >{inputText}</Tag>

    setTag([
      ...tags, newTag
    ]);
  }

  const deleteTag = (selectedID) => {
    setTag(tags.filter(tag => tag.props.id !== selectedID));
  }

  const saveContent = () => {
    if (title === '' || text === ''){
      setAlertColor("red");
      setAlertText("제목 또는 내용이 비어있습니다.");
    }
    else {
      window.localStorage.setItem('title', title);
      window.localStorage.setItem('text', text);
      setAlertColor("green");
      setAlertText("포스트가 임시저장되었습니다.");
    }
    toggleAlert();
  }

  const toggleAlert = () => {
    setIsAlert(true);
  }


  return (
    <>
    <GlobalStyle />
    <PageWrapper>
      <Alert
        color={alertColor}
        text={alertText}
        isShow={isAlert}
        setIsAlert={setIsAlert}
      >
      </Alert>
      <WriteWrapper>
        <WriteHeader>
          <TitleWrapper>
            <Title 
              type="text" 
              value={title}
              placeholder="제목을 입력하세요"
              onChange={handleTitleChange}
            />
            <TitleLine></TitleLine>
          </TitleWrapper>
          <TagWrapper>
            {tags}
            <TagInput 
              type="text" 
              placeholder="태그를 입력하세요"
              onKeyDown={handleTagKeyDown}
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
              <Bold><BoldImg src={boldIcon}></BoldImg></Bold>
              <Italic><ItalicImg src={italicIcon}></ItalicImg></Italic>
              <LineThrough><LineThroughImg src={lineThroughIcon}></LineThroughImg></LineThrough>
            </TextDecoWrapper>
            <Quotes><QuotesImg src={quotesIcon}></QuotesImg></Quotes>
            <HyperLink><HyperLinkImg src={hyperLinkIcon}></HyperLinkImg></HyperLink>
            <Images><ImagesImg src={imagesIcon}></ImagesImg></Images>
            <Codes><CodesImg src={codesIcon}></CodesImg></Codes>
          </ToolBar>
        </WriteHeader>
        <Editor
          type="text" 
          editorValue={text}
          onInputChange={handleTextChange}
          placeholder="당신의 이야기를 적어보세요..."
        />
        <WriteFooter>
          <ExitLink to="/">
            <ExitBtn><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>&nbsp;&nbsp;나가기</ExitBtn>
          </ExitLink>
          <SaveBtn
            onClick={saveContent}
          >
            임시저장
          </SaveBtn>
          <PublishBtn>출간하기</PublishBtn>
        </WriteFooter>
      </WriteWrapper>
      <Preview 
        titleValue={title}
        inputValue={text}
      ></Preview>
    </PageWrapper>
    </>
  );
}
