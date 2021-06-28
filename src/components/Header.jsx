import React, { useState } from "react";
import LoginPopup from 'components/LoginPopup';
import styled from "styled-components";

const PopupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Header() {
  const [isLoginPopup, setIsLoginPopup] = useState(false);

  const loginPopup = () => {
    setIsLoginPopup(true);
  };
	return (
		<div
			style={{
				display: "flex",
        flexDirection: "row",
        justifyContent: "center"
			}}
		>
			<div>header</div>
      <button onClick={loginPopup}>로그인</button>
      <PopupWrapper>
      <LoginPopup isOpen={isLoginPopup} setIsLoginPopup={setIsLoginPopup}></LoginPopup>
      </PopupWrapper>
      
		</div>
	);
}
