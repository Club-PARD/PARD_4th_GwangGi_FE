import { useState } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { BaseContainer } from "../../Layout/Container";
import { TestrContainer } from "./Components/TestContainer";
import { SubmitBtn } from "../RegisterPage/Components/SubmitBtn";

function Result_success() {
    const [selectedValue, setSelectedValue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/home');
    };

    const handleChange = (value) => {
        setSelectedValue((prevValue) => (prevValue === value ? '' : value));
    };

    return (
        <BaseContainer>
            <CenteredContainer>
                <Name>
                    전자문진 결과
                </Name>
                <Result>
                    <p>헌혈 적합</p> 대상입니다
                </Result>
                <Img src="/Img/TestPage/success.png" alt="성공 스티커" />
                <Img2 src="/Img/TestPage/성공말풍선.png" alt="성공 말풍선" />
                <Warning>
                    ※ 전자문진에서 헌혈이 가능하다고 판정되어도, 헌혈의 집<br />
                    방문 시 현장 문진 결과에 따라 헌혈이 불가할 수도 있습니다.
                </Warning>
                <SubmitBtn onClick={handleSubmit}>
                    메인 화면으로
                </SubmitBtn>
            </CenteredContainer>
        </BaseContainer>
    );
}

export default Result_success;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  text-align: center; /* 추가: 텍스트 중앙 정렬 */
`;

const Img = styled.img`
  width: 143.428px;
  height: 143.107px;
  flex-shrink: 0;
  margin-bottom: 20px;
`;

const Img2 = styled.img`
  width: 200px;
  height: 64.407px;
  flex-shrink: 0;
  margin-bottom: 20px;
`;

const Name = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 10px;
`;

const Result = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;

  p {
    color: #FF7575;
    display: inline;
  }
`;

const Warning = styled.div`
  color: #C15656;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 19.5px */
  margin-top: 15px;
  margin-bottom: 23px;
  text-align: center;
`;
