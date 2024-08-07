import React from "react";
import styled from "styled-components";
import { BaseContainer } from "../../Layout/Container";
import { RegisterContainer } from "./Components/RegisterContainer";
import { useNavigate } from "react-router-dom";

function Page4() {
  const navigate = useNavigate();

  const goToTestPage = () => {
    navigate(`/test_alert`);
  };

  const goToHomePage = () => {
    navigate(`/home`);
  };

  return (
    <BaseContainer>
      <RegisterContainer>
        <FinishText>
            회원가입이 완료 되었어요!
        </FinishText>
        <GuideText>
          우리가 만들어가는 생명의 다리, <br/><p>블릿지</p>에 가입하신 것을 환영해요!
        </GuideText>
        <TestBtn onClick = {goToTestPage}>
          자가문진 바로가기
        </TestBtn>
        <HomeBtn onClick = {goToHomePage}>
          홈으로
        </HomeBtn>
      </RegisterContainer>
    </BaseContainer>
  );
}

export default Page4;

const FinishText = styled.div`
    color: #FF7575;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;   
    line-height: 130%; /* 16.9px */
    margin-top: 288.45px;
    margin-bottom: 10px;
`

const GuideText = styled.div`
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 26px */

    p {
        color: #FF7575;
        display: inline;
    }
`

const TestBtn = styled.button`
  display: flex;
  width: 346px;
  height: 60px;
  padding: 19px 108px;
  border: none;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #FF7575;
  margin-top: 188px;
  margin-bottom: 8px;

  color: #FFF;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  cursor: pointer;
`;

const HomeBtn = styled.button`
  display: flex;
  width: 346px;
  height: 60px;
  padding: 19px 108px;
  border: 1.5px solid #E3E3E3;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #fff;
  margin-bottom: 28.95px;

  color: #000;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  cursor: pointer;
`;