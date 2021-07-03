import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";

const TextWrapper = styled.div``;

const WelcomeText = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.5;
`;

const InputDescription = styled.span`
  font-size: 1.5rem;
`;

export default function LoginInfo() {
  return (
    <div>
      <TextWrapper>
        <WelcomeText>환영합니다!</WelcomeText>
        <InputDescription>기본 회원 정보를 등록해주세요.</InputDescription>
      </TextWrapper>
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  );
}
