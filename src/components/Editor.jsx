import React from "react";
import styled from "styled-components";

//// WRITE

const WriteArea = styled.textarea`
  width: 100%;
  height: 380px;
  border: none;
  outline: none;
  font-size: 1.125rem;
  padding: 0px 48px 48px 48px;
  resize: none;
  position: relative;

  &::placeholder {
    color: rgb(134, 142, 155, 0.7);
    font-style: italic;
    word-spacing: 0.3em;
  }
`;

const Editor = ({ onInputChange, value }) => {
    return (
      <WriteArea
        onChange={(e) => onInputChange(e)}
        value={value}
        placeholder="당신의 이야기를 적어보세요..."
      />
    );
}

export default Editor;
