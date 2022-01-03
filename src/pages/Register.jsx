import React from "react";
import axios from 'axios';
import styled, { keyframes } from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

const TotalWrapper = styled.div`
  width: 768px;
  height: 780px;
  margin: 72px 15px;
`;

const TextWrapper = styled.div``;

const WelcomeText = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.5;
`;

const InputDescription = styled.span`
  font-size: 1rem;
`;

const FormDiv = styled.div`
  display: flex;
  margin: 48px 0;
  position: relative;
`;

const LabelText = styled.label`
  font-size: 1.125rem;
  margin-bottom: 16px;
  font-weight: bold;
`;
const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const InputText = styled.input`
  font-size: 1.2rem;
  border: none;
  padding-bottom: 8px;
  border-bottom: 1px solid #000;
  background: transparent;
  outline: none;
`;

const Btn = styled.button`
	padding: 1px 18px;
	height: 3rem;
  padding: 0 2rem;
	font-size: 1.5rem;
	font-weight: bold;
	border-radius: 1.5rem;
	cursor: pointer;
  margin-top: 4rem;
`;

const fadeIn = keyframes`
  from { opacity: 1; }
  to { opacity: 0.5; }
`;

const CancelBtn = styled(Btn)`
	color: rgb(73, 80, 87);
	background: rgb(233, 236, 239);
	border: none;
	&:hover {
		animation: ${fadeIn} 0.2s forwards;
	}
`;

const LoginBtn = styled(Btn)`
	color: white;
	background: rgb(18, 184, 134);
  margin-left: 1rem;
	border: none;
	&:hover {
		animation: ${fadeIn} 0.2s forwards;
	}
`;

const ErrorMessage = styled.div`
  position: absolute;
  bottom: 5rem;
  font-size: 1.125rem;
  color: rgb(255, 107, 107);
  font-weight: bold;
  margin-bottom: 1rem;
`;


export default function Register() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      id: "",
      introduction: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("이름을 입력해주세요."),
      email: Yup.string()
        .email("이메일 주소가 유효하지 않습니다")
        .required("이메일을 입력해주세요."),
      id: Yup.string()
        .min(
          3,
          "아이디는 3~16자의 알파벳,숫자,혹은 - _ 으로 이루어져야 합니다."
        )
        .max(
          16,
          "아이디는 3~16자의 알파벳,숫자,혹은 - _ 으로 이루어져야 합니다."
        )
        .required("ID를 입력해주세요."),
      introduction: Yup.string().required("한 줄 소개를 입력해주세요."),
    }),
    onSubmit: (values) => {

      axios
      .post("http://localhost:4000/register", values)
      .then(res => {
        alert("등록 완료!");
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    },
  });

  return (
      <TotalWrapper>
        <TextWrapper>
          <WelcomeText>환영합니다!</WelcomeText>
          <InputDescription>기본 회원 정보를 등록해주세요.</InputDescription>
        </TextWrapper>
        <FormDiv>
          <form onSubmit={formik.handleSubmit}>
            <InputItem>
              <LabelText htmlFor="fullName">이름</LabelText>
              <InputText
                id="fullName"
                name="fullName"
                type="text"
                placeholder="이름을 입력하세요"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
            </InputItem>

            <InputItem>
              <LabelText htmlFor="email">이메일</LabelText>
              <InputText
                id="email"
                name="email"
                type="email"
                placeholder="이메일을 입력하세요"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </InputItem>

            <InputItem>
              <LabelText htmlFor="id">아이디</LabelText>
              <InputText
                id="id"
                name="id"
                type="text"
                placeholder="아이디를 입력하세요"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.id}
              />
            </InputItem>

            <InputItem>
              <LabelText htmlFor="introduction">한 줄 소개</LabelText>
              <InputText
                id="introduction"
                name="introduction"
                type="text"
                placeholder="당신을 한 줄로 소개해보세요"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              value={formik.values.introduction}
              size='25'
              />
            </InputItem>
            <CancelBtn>취소</CancelBtn>
            <LoginBtn type="submit">다음</LoginBtn>
          </form>
          {formik.touched.fullName && formik.errors.fullName ? (
              <ErrorMessage>{formik.errors.fullName}</ErrorMessage>
            ) : formik.touched.email && formik.errors.email ? (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            ) : formik.touched.id && formik.errors.id ? (
              <ErrorMessage>{formik.errors.id}</ErrorMessage>
            ) : formik.touched.introduction && formik.errors.introduction ? (
              <ErrorMessage>{formik.errors.introduction}</ErrorMessage>
            ) : null}
        </FormDiv>
      </TotalWrapper>
  );
}
