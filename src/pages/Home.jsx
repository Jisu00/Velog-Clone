import React from 'react'
import styled from 'styled-components';
import Header from "components/Header";

const HomeWrapper = styled.div`
  height: 1800px;
  text-align: center;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <Header></Header>
      Home page
    </HomeWrapper>
  )
}
