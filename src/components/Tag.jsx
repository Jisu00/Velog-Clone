import React from "react";
import styled, { css } from "styled-components";

const PostTag = css`
  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 12px;
    margin-right: 8px;
    margin-bottom: 8px;
  }

  &:hover {
    background: #f8f9fa;
  }
`;

const TagWrapper = styled.div`
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

  ${(props) => (props.mode === "post" ? PostTag : '')}
`;

const Tag = ({ value, mode, handleClick }) => {
  return (
    <TagWrapper
      onClick={handleClick}
      mode={mode}
    >{value}</TagWrapper>   
  )
}

export default Tag;