import React from "react";
import styled from "styled-components";

const SeriesWrapper = styled.div`
  @media (min-width: 769px) {
    width: 50%;
  }

  display: inline-block;
  width: 100%;
  padding: 25px 15px;
`;

const SeriesImg = styled.img`
  width: 100%;
  margin-bottom: 12px;

  &:hover {
    cursor: pointer;
  }
`;

const SeriesName = styled.div`
  color: #343a40;
  font-weight: bold;
  margin-bottom: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const SeriesInfoWrapper = styled.div``;

const SeriesTotalPost = styled.label`
  color: #343a40;
  font-size: 14px;
`;

const SeriesLastUpdate = styled.label`
  color: #868e96;
  font-size: 14px;
`;


const Series = ({ name, total_post, last_update }) => {
  return (
    <SeriesWrapper>
      <SeriesImg
        src="https://static.velog.io/static/media/series-thumbnail.4c53a750.svg"
      />
      <SeriesName>{name}</SeriesName>
      <SeriesInfoWrapper>
        <SeriesTotalPost>{total_post}개의 포스트</SeriesTotalPost>
        <SeriesLastUpdate> · 마지막 업데이트 {last_update}</SeriesLastUpdate>
      </SeriesInfoWrapper>
    </SeriesWrapper>
  )
}

export default Series;