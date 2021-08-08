import React, { useState } from 'react'
import Header from "components/Header";
import HomePost from "components/HomePost";

import trendingIcon from "assets/images/trendingIcon.svg";
import recentIcon from "assets/images/recentIcon.svg";
import dropDownMenuIcon from "assets/images/dropDownMenuIcon.svg";
import etcMenuIcon from "assets/images/etcMenuIcon.svg";
import {
  GlobalStyles,
  PageWrapper,
  HeaderWrapper,
  MenuWrapper,
  TrendingMenu,
  TrendingImg,
  RecentMenu,
  RecentImg,
  MenuUnderline,
  PeriodMenuWrapper,
  PeriodSelectBox,
  PeriodDropDownMenu,
  TodayMenu,
  ThisWeekMenu,
  ThisMonthMenu,
  ThisYearMenu,
  DropDownMenuImg,
  EtcMenuWrapper,
  EtcMenuIcon,
  EtcDropDownMenu,
  EtcMenu,
  PostWrapper
} from "styles/Home";

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState("trending");
  const [selectedPeriod, setSelectedPeriod] = useState("이번 주");
  const [isPeriodMenuOpen, setIsPeriodMenuOpen] = useState(false);
  const [isEtcMenuOpen, setIsEtcMenuOpen] = useState(false);

  const togglePeriodMenu = () => {
    isPeriodMenuOpen ? setIsPeriodMenuOpen(false) : setIsPeriodMenuOpen(true)
  }

  const toggleEtcMenu = () => {
    isEtcMenuOpen ? setIsEtcMenuOpen(false) : setIsEtcMenuOpen(true)
  }

  return (
    <>
      <GlobalStyles/>
      <PageWrapper>
        <HeaderWrapper>
          <Header header_mode="main"></Header>
          <MenuWrapper
            menu={selectedMenu}
          >
            <TrendingMenu
              onClick={()=>{setSelectedMenu("trending")}}
            >
              <TrendingImg src={trendingIcon}/>트렌딩
            </TrendingMenu>
            <RecentMenu
              onClick={()=>{setSelectedMenu("recent"); setIsPeriodMenuOpen(false)}}
            >
              <RecentImg src={recentIcon}/>최신
            </RecentMenu>
            <MenuUnderline menu={selectedMenu}></MenuUnderline>
            <PeriodMenuWrapper>
              <PeriodSelectBox
                onClick={togglePeriodMenu}
              >
                {selectedPeriod}<DropDownMenuImg src={dropDownMenuIcon}/>
              </PeriodSelectBox>
              { isPeriodMenuOpen && 
              <PeriodDropDownMenu
                selectedPeriod={selectedPeriod}
              >
                <TodayMenu
                  onClick={()=>{setSelectedPeriod("오늘"); togglePeriodMenu()}}
                >
                  오늘
                </TodayMenu>
                <ThisWeekMenu
                  onClick={()=>{setSelectedPeriod("이번 주"); togglePeriodMenu()}}
                >
                  이번 주
                </ThisWeekMenu>
                <ThisMonthMenu
                  onClick={()=>{setSelectedPeriod("이번 달"); togglePeriodMenu()}}
                >
                  이번 달
                </ThisMonthMenu>
                <ThisYearMenu
                  onClick={()=>{setSelectedPeriod("올해"); togglePeriodMenu()}}
                >
                  올해
                </ThisYearMenu>
              </PeriodDropDownMenu>
              }
            </PeriodMenuWrapper>
            <EtcMenuWrapper>
              <EtcMenuIcon 
                onClick={toggleEtcMenu}
                src={etcMenuIcon}
              />
            </EtcMenuWrapper>
            { isEtcMenuOpen && 
            <EtcDropDownMenu>
              <EtcMenu>공지사항</EtcMenu>
              <EtcMenu>태그 목록</EtcMenu>
              <EtcMenu>서비스 정책</EtcMenu>
              <EtcMenu>Slack</EtcMenu>
              <EtcMenu>문의</EtcMenu>
            </EtcDropDownMenu> 
            }
          </MenuWrapper>
        </HeaderWrapper>
        <PostWrapper>
          <HomePost></HomePost>
          <HomePost></HomePost>
          <HomePost></HomePost>
          <HomePost></HomePost>
        </PostWrapper>
      </PageWrapper>
    </>
  )
}
