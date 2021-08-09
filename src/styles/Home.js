import styled, { css, keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background: #f8f9fa!important;
    text-align: center;
  }
`;

/*const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;*/

///

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: #343a40;
  margin-bottom: 60px;
  background: #f8f9fa;
`;

export const HeaderWrapper = styled.div`
  @media (min-width: 1025px) {
    width: 1064px;
  }
  @media (min-width: 1440px) {
    width: 1424px;
  }

  padding: 0px 20px;
  margin-left: auto;
  margin-right: auto;
`;

//// SORT MENU

const Menu = styled.div`
  @media (min-width: 945px) {
    font-size: 18px;
    width: 112px;
    height: 48px;
  }

  width: 84px;
  padding: 8px 0; 
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`;

const IconImg = styled.img`
  width: 20px;
  vertical-align: middle;
  margin-right: 10px;
  filter: invert(20%) sepia(11%) saturate(562%) hue-rotate(169deg) brightness(94%) contrast(91%);
`;

export const TrendingMenu = styled(Menu)``;
export const TrendingImg = styled(IconImg)``;
export const RecentMenu = styled(Menu)``;
export const RecentImg = styled(IconImg)``;


/// PERIOD MENU


export const PeriodMenuWrapper = styled.div`
  position: relative;
`;

export const PeriodSelectBox = styled.div`
  @media (min-width: 945px) {
    font-size: 14px;
    width: 100px;
    height: 32px;
  }

  display: flex;
  background: white;
  width: 80px;
  height: 30px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
  padding: 6.5px;
  box-shadow: 0px 0px 2px 0px lightgray;
  cursor: pointer;
  color: #495057;

  &:hover{
    opacity: 0.8;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  margin-top: 30px;

  ${props => {
    const selectedMenu = props.menu;

    if (selectedMenu === "trending"){
      return (
        css`
          ${RecentImg} { filter: invert(60%) sepia(17%) saturate(188%) hue-rotate(169deg) brightness(91%) contrast(85%) };
          ${RecentMenu} { color: #868e96; font-weight: normal };
          ${PeriodMenuWrapper} { display: flex; }
        `
      )
    }
    else {
      return (
        css`
          ${TrendingImg} { filter: invert(60%) sepia(17%) saturate(188%) hue-rotate(169deg) brightness(91%) contrast(85%) };
          ${TrendingMenu} { color: #868e96; font-weight: normal };
          ${PeriodMenuWrapper} { display: none; }
        `
      )
    }
  }}
`;

export const DropDownMenuImg = styled.img`
  transform: scale(1.5);
  margin-left: auto;
  filter: invert(20%) sepia(11%) saturate(562%) hue-rotate(169deg) brightness(94%) contrast(91%);
`;

const PeriodMenu = styled.div`
  width: 190px;
  height: 44px;
  cursor: pointer;
  background: white;
  line-height: 44px;
  padding: 0px 15px;
  font-size: 14px;
  font-weight: bold;
  border-top: 1px solid #f1f3f5;

  &:hover {
    background: #f8f9fa;
  }
`;

export const TodayMenu = styled(PeriodMenu)``;
export const ThisWeekMenu = styled(PeriodMenu)``;
export const ThisMonthMenu = styled(PeriodMenu)``;
export const ThisYearMenu = styled(PeriodMenu)``;

const DropDownMenu = styled.div`
  position: absolute;
  right: 0px;
  top: 45px;
  width: 190px;
  padding: 0px;
  z-index: 1;
  box-shadow: 0px 0px 7px 0px lightgray;
  background: white;
`;

export const PeriodDropDownMenu = styled(DropDownMenu)`
  ${props => {
    const selectedPeriod = props.selectedPeriod;

    if (selectedPeriod === "오늘")
      return ( css`${TodayMenu} { color: #12b886; }` )
    else if (selectedPeriod === "이번 주")
      return ( css`${ThisWeekMenu} { color: #12b886; }` )
    else if (selectedPeriod === "이번 달")
      return ( css`${ThisMonthMenu} { color: #12b886; }` )
    else if (selectedPeriod === "올해")
      return (css`${ThisYearMenu} { color: #12b886; }`)
  }};
`;


////

export const MenuUnderline = styled.div`
  @media (min-width: 945px) {
    width: 112px;
    left: ${props => {
      if (props.menu === "recent") return "112px";
      else return "0px";
    }};
  }
  

  width: 84px;
  background: #343a40;
  position: absolute;
  height: 1.5px;
  top: 40px;

  left: ${props => {
    if (props.menu === "recent") return "84px";
    else return "0px";
  }};

  transition: left 0.3s;
`;

/// ETC MENU

export const EtcMenuWrapper = styled.div`
  margin-left: auto;
`;

export const EtcMenuIcon = styled.img`
  filter: invert(60%) sepia(17%) saturate(188%) hue-rotate(169deg) brightness(91%) contrast(85%);
  width: 25px;
  cursor: pointer;
`;

export const EtcDropDownMenu = styled(DropDownMenu)``;

export const EtcMenu = styled.div`
  width: 190px;
  height: 44px;
  cursor: pointer;
  background: white;
  line-height: 44px;
  padding: 0px 15px;
  font-size: 14px;
  font-weight: bold;
  border-top: 1px solid #f1f3f5;
`;


//// POST

export const PostWrapper = styled.div`
  @media (min-width: 767px) and (max-width: 1056px) {
    width: 100%;
  }
  @media (min-width: 1057px) and (max-width: 1339px) {
    width: 1056px;
  }
  @media (min-width: 1440px) {
    width: 1408px;
  }
  margin: 0px auto;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;
