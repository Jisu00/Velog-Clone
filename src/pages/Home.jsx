import React, { useState } from 'react'
import Header from "components/Header";

import trendingIcon from "assets/images/trendingIcon.svg";
import recentIcon from "assets/images/recentIcon.svg";
import dropDownMenuIcon from "assets/images/dropDownMenuIcon.svg";
import etcMenuIcon from "assets/images/etcMenuIcon.svg";
import {
  GlobalStyles,
  PageWrapper,
  FlexWrapper,
  SortMenuWrapper,
  TrendingMenu,
  TrendingImg,
  RecentMenu,
  RecentImg,
  MenuUnderline,
  PeriodMenu,
  DropDownMenuImg,
  EtcMenu,
} from "styles/Home";
import { DropDownMenuIcon } from 'styles/Header';

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState("recent");
  const [selectedPeriod, setSelectedPeriod] = useState("this week");

  return (
    <>
      <GlobalStyles/>
      <PageWrapper>
        <Header header_mode="main"></Header>
        <FlexWrapper>
          <SortMenuWrapper
            menu={selectedMenu}
          >
            <TrendingMenu
              onClick={()=>{setSelectedMenu("trending")}}
            >
              <TrendingImg src={trendingIcon}/>트렌딩
            </TrendingMenu>
            <RecentMenu
              onClick={()=>{setSelectedMenu("recent")}}
            >
              <RecentImg src={recentIcon}/>최신
            </RecentMenu>
            <MenuUnderline menu={selectedMenu}></MenuUnderline>
            <PeriodMenu>
              이번 주 <DropDownMenuImg src={dropDownMenuIcon}/>
            </PeriodMenu>
            <EtcMenu src={etcMenuIcon}/>
          </SortMenuWrapper>
        </FlexWrapper>
      </PageWrapper>
    </>
  )
}
