import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { BaseContainer } from "../../Layout/Container";
import { SubmitBtn } from "../RegisterPage/Components/SubmitBtn";

function Result_fail() {
    const [selectedValue, setSelectedValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/home');
    };

    const handleChange = (value) => {
        setSelectedValue((prevValue) => (prevValue === value ? '' : value));
    };

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <BaseContainer>
            <CenteredContainer>
                <Name>
                    전자문진 결과
                </Name>
                <Result>
                    <p>헌혈 부적합</p> 대상입니다
                </Result>
                <Img src="/Img/TestPage/fail.png" alt="실패 스티커" />
                <Img2 src="/Img/TestPage/실패말풍선.png" alt="실패 말풍선" />
                <ModalBtn onClick={handleModalToggle}>
                    부적합 사유 보기
                </ModalBtn>
                <SubmitBtn onClick={handleSubmit}>
                    메인 화면으로
                </SubmitBtn>
            </CenteredContainer>
            {isModalOpen && (
                <ModalBackdrop onClick={handleModalToggle}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={handleModalToggle}>
                            <img src="/Img/TestPage/DeleteBtn.png" alt="삭제 버튼" />
                        </CloseButton>
                        <Result2>
                        <p>헌혈 부적합 사유</p>가 되는<br/>
                        답변들이에요.
                        </Result2>
                        <Line />
                        <ScrollContainer>
                          <R_Date>
                          작성자님의 <p>마지막 헌혈 날짜</p>는<br/>
                          2024년 5월 12일 입니다.
                          </R_Date>
                            <TextContent>
                                <p>부적합 사유 내용이 여기에 표시됩니다. 여러 이유가 있을 수 있습니다. 예를 들어, 최근의 질병이나 여행, 특정 약물 복용 등 다양한 요소가 헌혈 부적합 사유가 될 수 있습니다.</p>
                                <p>더 자세한 정보는 관련 기관이나 의료 전문가와 상의하시기 바랍니다.</p>
                            </TextContent>
                        </ScrollContainer>
                    </ModalContent>
                </ModalBackdrop>
            )}
        </BaseContainer>
    );
}

export default Result_fail;

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
    color: #929292;
    display: inline;
  }
`;

const Result2 = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 45px;
  margin-left: 18px;
  margin-bottom: 20px;

  p {
    color: #929292;
    display: inline;
  }
`;

const Line = styled.div`
  width: 306px;
  height: 2px;
  flex-shrink: 0;
  background-color: #EDEDED;
  margin-left: 18px;
  margin-bottom: -16px;
`

const ModalBtn = styled.button`
  width: 116.655px;
  height: 41.024px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid #D8D8D8;
  background: #FFF;

  color: #989898;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 16.9px */

  margin-bottom: 91px;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 341px;
  height: 527px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  position: relative;
`;

const ScrollContainer = styled.div`
  width: 310px;
  height: 336px;
  flex-shrink: 0;
  overflow-y: auto;
  margin-top: 42px;
  margin-left: 17px;
  border-radius: 10px;
  background: #fff;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 19px;
  right: 21px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 14.681px;
    height: 16px;
    flex-shrink: 0;
  }
`;

const TextContent = styled.div`
  p {
    margin-bottom: 10px;
    font-family: "Pretendard Variable";
    font-size: 14px;
    color: #000;
    line-height: 1.5;
  }
`;

const R_Date = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

p {
  color: #000;
font-family: "Pretendard Variable";
font-size: 16px;
font-style: normal;
font-weight: 800;
line-height: normal;
letter-spacing: -0.28px;
display: inline;
}
`