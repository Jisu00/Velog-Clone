import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background: #f8f9fa;
  }
`;

///

export const PageWrapper = styled.div`
  @media (max-width: 1024px) {
    padding: 0px 20px;
  }
  @media (min-width: 1025px) {
    padding: 0px 70px;
  }

  width: 100%;
  height: 100%;
  color: #343a40;
  margin-bottom: 60px;
  background: #f8f9fa;
`;

export const FlexWrapper = styled.div`
  @media (min-width: 769px) {
    align-items: center;
  }

  display: flex;
  height: 100%;
  position: relative;
  flex-direction: column;
  margin-top: 30px;
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

export const PeriodMenu = styled.div`
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

  &:hover{
    opacity: 0.8;
  }
`;

export const DropDownMenuImg = styled.img`
  transform: scale(1.5);
  margin-left: 6px;
  filter: invert(20%) sepia(11%) saturate(562%) hue-rotate(169deg) brightness(94%) contrast(91%);
`;

export const SortMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  ${props => {
    const selectedMenu = props.menu;

    if (selectedMenu === "trending"){
      return (
        css`
          ${RecentImg} { filter: invert(60%) sepia(17%) saturate(188%) hue-rotate(169deg) brightness(91%) contrast(85%) };
          ${RecentMenu} { color: #868e96; font-weight: normal };
          ${PeriodMenu} { display: flex; }
        `
      )
    }
    else {
      return (
        css`
          ${TrendingImg} { filter: invert(60%) sepia(17%) saturate(188%) hue-rotate(169deg) brightness(91%) contrast(85%) };
          ${TrendingMenu} { color: #868e96; font-weight: normal };
          ${PeriodMenu} { display: none; }
        `
      )
    }
  }}
`;

export const MenuUnderline = styled.div`
  width: 84px;
  background: #343a40;
  position: absolute;
  height: 2px;
  top: 40px;

  left: ${props => {
    const selectedMenu = props.menu;

    if (selectedMenu === "recent") return "84px";
    else return "0px";
  }};

  transition: left 0.3s;
`;

export const EtcMenu = styled.img`
  filter: invert(60%) sepia(17%) saturate(188%) hue-rotate(169deg) brightness(91%) contrast(85%);
  width: 25px;
  margin-left: auto;
  cursor: pointer;
`;


////

