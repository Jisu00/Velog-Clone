import React from "react";
import styled from "styled-components";

//// WRITE

const WriteArea = styled.textarea`
  @font-face {
    font-family: "Fira Mono";
    src: url("./assets/Fonts/FiraMono-Medium.ttf") format("truetype");
  }

  width: 100%;
  height: 380px;
  border: none;
  outline: none;
  font-size: 1.125rem;
  font-family: "Fira Mono";
  padding: 0px 48px 48px 48px;
  resize: none;
  position: relative;
  color: #343a40;
  line-height: 1.4;

  &::placeholder {
    color: rgb(134, 142, 155, 0.7);
    font-style: italic;
    word-spacing: 0.3em;
  }
`;

const Editor = ({ onInputChange, editorValue }) => {
    return (
      <WriteArea
        placeholder="당신의 이야기를 적어보세요..."
        onChange={onInputChange}
        value={editorValue}
      />
    );
}

export default Editor;
