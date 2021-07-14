import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

//// animation

const alertFadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const iconFadeIn = keyframes`
  from { opacity: 0.8; }
  to { opacity: 1; }
`;

const iconFadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0.8; }
`;

//// ALERT

const AlertWrapper = styled.div`
  width: 310px;
  height: 64px;
  padding: 20px 10px;
  color: white;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  animation: ${alertFadeIn} 0.3s forwards;
  background: ${props => props.color === "green" ? '#07bc0c' : '#e74c3c'};
`;

const AlertCancel = styled.div`
  width: 20px;
  height: 20px;
  font-size: 15px;
  font-weight: bold;
  opacity: 0.8;
  position: absolute;
  top: 8px;
  right: 0px;

  &:hover {
    animation: ${iconFadeIn} 0.3s forwards;
  }
  &:not(:hover) {
    animation: ${iconFadeOut} 0.3s forwards;
  }
`;

const AlertTimer = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  top: 60px;
  left: 0px;

  background: ${props => props.color === "green" ? '#b5ebb7' : '#f8cac5'};
`;



const Alert = ({ color, text, isShow, setIsAlert }) => {
  const timer = useRef(null);

  useEffect(()=>{
    if (isShow === false || timer.current === null) 
      return;
    
    timeOutAnimation();
    // eslint-disable-next-line
  }, [isShow]);

  const timeOutAnimation = () => {
    let time = 100;
    if (timer.current === null) return;

    let timerID = setInterval(()=>{
      timer.current.style.width = (time--) + '%';

      if (time === -1){
        clearInterval(timerID);
        setIsAlert(false);
      }
    }, 20);
  }


  return(
    <>
      {isShow && (
        <AlertWrapper
          color={color}
          isShow={isShow}
        >
          {text}
          <AlertCancel>✖</AlertCancel>
          <AlertTimer
            color={color}
            ref={timer}
          >
          </AlertTimer>
        </AlertWrapper>
      )}
    </>
  )
}

export default Alert;