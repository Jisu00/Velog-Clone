import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PopupPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(249, 249, 249, 0.85);
`;

const PopupWrapper = styled.div`
  @media (min-width: 769px) {
    width: 400px;
  }

  width: 100%;
  height: 200px;
  background: white;
  margin: 0 15px;
  padding: 30px 20px;
  box-shadow: 0px 0px 10px 0px lightgray;
  position: relative;
`;

const Title = styled.div`
  color: #343a40;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Text = styled.div`
  color: #495057;
  margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
`;

const Btn = styled.button`
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px 10px;
  cursor: pointer;
  min-height: 32px;
  width: 75px;
  min-width: 70px;
`;

const CancelBtn = styled(Btn)`
  margin-right: 10px;
  background: #e9ecef;
  color: #495057;

  &:hover {
    background: rgb(233, 236, 239, 0.7);
  }
`;

const AcceptBtn = styled(Btn)`
  background: rgb(18, 184, 134);
  color: white;

  &:hover {
    background: rgb(18, 184, 134, 0.8);
  }
`;


export default function WithdrawalPopup({ isOpen, setIsWithdrawalPopup }) {

  return (
    <>
      {isOpen && (
        <PopupPageWrapper>
          <PopupWrapper>
            <Title>회원 탈퇴</Title>
            <Text>정말로 탈퇴 하시겠습니까?</Text>
            <ButtonWrapper>
              <CancelBtn
                onClick={()=>{setIsWithdrawalPopup(false)}}
              >취소</CancelBtn>
              <AcceptBtn>확인</AcceptBtn>
            </ButtonWrapper>
          </PopupWrapper>
        </PopupPageWrapper>
      )}
    </>
  );
}
