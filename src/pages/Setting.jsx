import React, { useRef } from "react";
import axios from 'axios';
import Header from "components/Header";
import {
  GlobalStyle,
  PageWrapper,
  HeaderWrapper,
  FlexWrapper,
  ProfileImgWrapper,
  ProfileImg,
  ImgUploadBtn,
  ImgRemoveBtn,
  ProfileWrapper,
  UserName,
  Intro,
  ProfileChangeBtn,
  ProfileSaveBtn
} from "styles/Setting"

export default function Setting() {
  const profile_img = useRef();
  const img_input = useRef();

  const onImgUploadBtnClick = () => {
    img_input.current.click();
  }

  const onImgChange = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    
    const res = await axios.post('', formData);
    //profile_img.props.src = "res.data.image_url";
  }

  const onImgRemove = async () => {
    const formData = new FormData();
    formData.append('file', "");
    
    const res = await axios.post('', formData);
    profile_img.props.src = "";
  }
  

  return (
    <>
      <GlobalStyle/>
      <PageWrapper>
        <HeaderWrapper><Header header_mode="main"></Header></HeaderWrapper>
        <FlexWrapper>
          <ProfileImgWrapper>
            <ProfileImg
              src="https://media.vlpt.us/images/jisu00/profile/cf2284a3-2e41-4371-bcad-143b43975e9c/social.png?w=120"
              ref={profile_img}
            />
            <ImgUploadBtn
              onClick={onImgUploadBtnClick}
            >
              <input 
                type="file"
                id="profileImg"
                accept="image/*"
                ref={img_input}
                onChange={onImgChange}
                style={{ display: "none" }}
              />
              이미지 업로드
            </ImgUploadBtn>
            <ImgRemoveBtn
              onClick={onImgRemove}
            >이미지 제거</ImgRemoveBtn>
          </ProfileImgWrapper>
          <ProfileWrapper>
            <UserName>UserName</UserName>
            <Intro>Intro</Intro>
            <ProfileChangeBtn>수정</ProfileChangeBtn>
            <ProfileSaveBtn>저장</ProfileSaveBtn>
          </ProfileWrapper>
        </FlexWrapper>
      </PageWrapper>
    </>
  );
}
