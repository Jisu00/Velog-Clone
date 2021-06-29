import React from "react";
import styled from "styled-components";
import deleteIcon from "assets/images/deleteIcon.svg";

const PopupWrapper = styled.div`
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	padding-top: 100px; /* Location of the box */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
	background-color: rgba(249, 249, 249, 0.85);
`;

const Popup = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
	height: 432px;
`;

const PopupLeftWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgb(241, 243, 245);
  height: 432px;
	padding: 24px;
`;

const LoginImg = styled.img.attrs({
	src: "https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg",
})`
	width: 168px;
	height: 108.375px;
`;

const LoginGreetingText = styled.span`
	font-size: 28px;
	margin-top: 24px;
`;

const PopupRightWrapper = styled.div`
  height: 432px;
	padding: 24px;
  background-color: #fff;
`;

const ExitButtonWrapper = styled.div`
	display: flex;
  justify-content: flex-end;
`;

const ExitButton = styled.button`

	border: none;

	background-color: transparent;
	margin-bottom: 36px;
	&:hover {
		cursor: pointer;
	}
`;

const LoginArea = styled.div``;

const LoginText = styled.h2`
	margin: 0;
`;

const LoginTypeText = styled.h4`
	margin: 16px 0;
	color: rgb(134, 142, 150);
`;

const EmailArea = styled.div``;

const EmailInput = styled.input.attrs({
	type: "text",
	placeholder: "이메일을 입력하세요",
})`
	width: 246px;
	padding: 16px;
	border: rgb(222, 226, 230) 1px solid;
	font-size: 16px;
	&:focus {
		outline: none;
	}
`;

const LoginButton = styled.button`
	background-color: rgb(18, 184, 134);
	color: rgb(255, 255, 255);
	font-size: 16px;
	font-weight: 700;
	border: none;
	height: 53px;
	width: 96px;
`;

export default function LoginPopup({ isOpen, setIsLoginPopup }) {
	return (
		<>
			{isOpen && (
				<PopupWrapper>
					<Popup>
						<PopupLeftWrapper>
							<LoginImg></LoginImg>
							<LoginGreetingText>환영합니다!</LoginGreetingText>
						</PopupLeftWrapper>
						<PopupRightWrapper>
							<ExitButtonWrapper>
								<ExitButton onClick={() => setIsLoginPopup(false)}>
									<img src={deleteIcon} alt="delete icon" />
								</ExitButton>
							</ExitButtonWrapper>

							<LoginArea>
								<LoginText>로그인</LoginText>
								<LoginTypeText>이메일로 로그인</LoginTypeText>
								<EmailArea>
									<EmailInput></EmailInput>
									<LoginButton>로그인</LoginButton>
								</EmailArea>
								<LoginTypeText>소셜 계정으로 로그인</LoginTypeText>
							</LoginArea>
						</PopupRightWrapper>
					</Popup>
				</PopupWrapper>
			)}
		</>
	);
}
