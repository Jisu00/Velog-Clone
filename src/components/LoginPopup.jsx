import React, {useState} from "react";
import styled from "styled-components";
import deleteIcon from "assets/images/deleteIcon.svg";
import githubIcon from "assets/images/githubIcon.png";
import googleIcon from "assets/images/googleIcon.png";
import config from "config";

const PopupWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
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
	height: 480px;
`;

const PopupLeftWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgb(241, 243, 245);
	height: 480px;
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
	height: 480px;
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

const LoginAreaWrapper = styled.div`
	display: flex;
	height: 85%;
	flex-direction: column;
	justify-content: space-between;
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

const SocialArea = styled.div`
	margin-top: 40px;
`;

const SocialButtonArea = styled.div`
	display: flex;
	justify-content: space-around;
`;

const IconButton = styled.button`
	background: transparent;
	border: none;
`;

const FooterAreaWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const FooterArea = styled.span``;

const IsMemberText = styled.span`
	margin-right: 4px;
`;

const MemberLink = styled.a`
	color: rgb(18, 184, 134);
	font-weight: bold;
	&:hover {
		text-decoration: underline;
	}
`;

export default function LoginPopup({ isOpen, setIsLoginPopup }) {
	const [isLogin, setIsLogin] = useState(true);
	const GithubRoute = () => {
		window.location.href = `https://github.com/login/oauth/authorize?client_id=${config.GITHUB_CLIENT_ID}&redirect_uri=http://localhost:3001`;
	};

	const toggleState = () => {
		setIsLogin(!isLogin);
	}

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

							<LoginAreaWrapper>
								<LoginArea>
									<LoginText>{isLogin ? "로그인" : "회원가입"}</LoginText>
									<EmailArea>
										<LoginTypeText>이메일로 {isLogin ? "로그인" : "회원가입"}</LoginTypeText>
										<EmailInput></EmailInput>
										<LoginButton>{isLogin ? "로그인" : "회원가입"}</LoginButton>
									</EmailArea>
									<SocialArea>
										<LoginTypeText>소셜 계정으로 {isLogin ? "로그인" : "회원가입"}</LoginTypeText>
										<SocialButtonArea>
											<IconButton onClick={GithubRoute}>
												<img
													src={githubIcon}
													alt="github login icon"
													style={{
														width: "48px",
														height: "48px",
														borderRadius: "50%",
													}}
												/>
											</IconButton>
											<IconButton>
												<img
													src={googleIcon}
													alt="google login icon"
													style={{
														width: "48px",
														height: "48px",
														borderRadius: "50%",
													}}
												/>
											</IconButton>
										</SocialButtonArea>
									</SocialArea>
								</LoginArea>
								<FooterAreaWrapper>
									<FooterArea>
										<IsMemberText>{isLogin ? "아직 회원이 아니신가요?" : "계정이 이미 있으신가요?"}</IsMemberText>
										<MemberLink onClick={toggleState}>{isLogin ? "회원가입" : "로그인"}</MemberLink>
									</FooterArea>
								</FooterAreaWrapper>
							</LoginAreaWrapper>
						</PopupRightWrapper>
					</Popup>
				</PopupWrapper>
			)}
		</>
	);
}
