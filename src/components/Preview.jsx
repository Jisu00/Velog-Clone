import React from "react";
import showdown from "showdown";
import styled from "styled-components";

//// PREVIEW

const PreviewWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }  
  @media (min-width: 1025px) {
    width: 50%;
  }

  height: 98vh;
  padding: 48px;
  background: rgb(251, 253, 252);
  overflow-y: scroll;
`;

const PreviewTitle = styled.div`
  width: 100%;
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 27px;
  margin-bottom: 64px;
`;

const PreviewText = styled.div`
  margin: 20px 0px;
  font-size: 1.125rem;
`;

const Preview = ({ titleValue, inputValue }) => {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(inputValue);

  return (
    <PreviewWrapper>
      <PreviewTitle dangerouslySetInnerHTML={{ __html: titleValue }}></PreviewTitle>
      <PreviewText dangerouslySetInnerHTML={{ __html: html }}></PreviewText>
    </PreviewWrapper>
  );
}

export default Preview;