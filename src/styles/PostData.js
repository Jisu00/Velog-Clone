import styled from 'styled-components';

export const DataWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DataForm = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 351.5px;
`;

export const SeparationLine = styled.div`
  width: 1px;
  min-height: 425px;
  background: rgb(233, 236, 239);
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.div``;

export const Title = styled.h3`
  font-size: 1.3125rem;
  color: rgb(52, 58, 64);
  line-height: 1.5;
  margin-bottom: 0.5rem;
  margin-top: 0px;
`;

export const PostTitle = styled.h4`
  line-height: 1.5;
  margin: 0px;
  display: block;
  font-size: 1.125rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ImageBox = styled.div`
  background: rgb(233, 236, 239);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  margin-top: 24px;
`;

export const ContentText = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  outline: none;
  box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
  line-height: 1.5;
  font-size: 0.875rem;
  height: 7.375rem;
  padding: 0.75rem 1rem;
  margin-top: 0.5rem;
`;

export const ContentCount = styled.div`
  text-align: right;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: rgb(134, 142, 150);
`;

export const URLInput = styled.input.attrs({
  type: "text",
  size: 35,
})`
  display: flex;
  background: white;
  border: none;
  outline: none;
  box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
  padding: 0.5rem 0.875rem;
  line-height: 1.5;
`;

export const PublicButtonWrapper = styled.div`
  display: flex;
`;

export const ContentSection = styled.section`
  margin-top: 24px;
`;

export const Btn = styled.button`
  cursor: pointer;
  font-size: 1.125em;
  padding: 8px 20px;
  border-radius: 5px;
`;

export const BigBtn = styled(Btn)`
  outline: none;
  height: 3rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  font-weight: bold;
  background: white;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px 0px;
  cursor: pointer;
`;

export const UploadBtn = styled(Btn)`
  border: none;
  font-weight: bold;
  background: #fff;
  color: rgb(32, 201, 151);
  margin-top: 1rem;
  &:hover {
    background: rgb(240, 242, 244);
  }
`;

export const PublicBtn = styled(BigBtn)`
  border: ${(props) => props.border};
`;

export const NonPublicBtn = styled(BigBtn)`
  margin-left: 16px;
  border: ${(props) => props.border};
`;

export const BtnText = styled.div`
  flex: 1 1 0%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

export const SeriesBtn = styled(BigBtn)`
  display: flex;
  justify-content: center;
  border: none;
  color: rgb(32, 201, 151);
  width: 100%;
  &:hover {
    background: rgb(240, 242, 244);
  }
`;

export const CancelBtn = styled(Btn)`
  border: none;
  font-weight: bold;
  background: rgb(134, 142, 150);
  color: #fff;
  margin-top: 1rem;
  &:hover {
    background: rgb(173, 181, 189);
  }
`;

export const PublishBtn = styled(Btn)`
  border: none;
  font-weight: bold;
  background: rgb(18, 184, 134);
  color: #fff;
  margin-top: 1rem;
  margin-left: 14px;
  &:hover {
    background: rgb(18, 184, 134, 0.7);
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;