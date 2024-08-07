import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './Context';
import { BaseContainer } from '../../Layout/Container';
import { GuideText } from './Components/GuideText';
import { TestrContainer } from './Components/TestContainer';
import { QBtn } from './Components/QBtn';
import { QBtn2 } from './Components/QBtn2';
import StyledRadioButton2 from './Components/StyledRadioButton2';
import StyledRadioButton from './Components/StyledRadioButton';
import ProgressBar from './Components/ProgressBar';
import Modal from './Components/Modal'; // Import the Modal component

function QPage8() {
    const [selectedValue, setSelectedValue] = useState('');
    const { updateFormData } = useAppContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        updateFormData('question8', selectedValue === 'option1' ? 0 : selectedValue === 'option2' ? 1 : selectedValue === 'option3' ? 2 : selectedValue === 'option4' ? 3 : selectedValue === 'option5' ? 4 : selectedValue === 'option6' ? 5 : 6);
        navigate('/test_9');
    };

    const handleBack = () => {
        navigate('/test_7');
    };

    const handleChange = (value) => {
        setSelectedValue((prevValue) => (prevValue === value ? '' : value));
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <BaseContainer>
            <TestrContainer>
                <ProgressBar currentPage={7} />
                <GuideText>
                    헌혈 금지 약물을 <p>현재 또는 과거에</p> <br/>복용한 경험이 있으신가요?
                </GuideText>
                <Warning>
                    ※ 헌혈 관련 안내문을 참조하신 후, 아래 사항 중<br/>
                    복용 경험 약물이 있는 경우 선택해 주시길 바랍니다.
                </Warning>                
                <ContextModalBtn onClick={handleModalOpen}>
                    <p>헌혈 관련 안내문</p>
                    <img src="/Img/TestPage/문서모양.png" alt="문서모양 버튼" />
                </ContextModalBtn>
                <ScrollContainer>
                    <QBtn2>
                        <StyledRadioButton2
                            label="해당없음"
                            value="option1"
                            checked={selectedValue === 'option1'}
                            onChange={() => handleChange('option1')}
                        />
                    </QBtn2>
                    <QBtn>
                        <StyledRadioButton
                            label={
                                <>
                                    건선치료제(에트레티네이트,
                                    <br />
                                    아시트레틴)
                                </>
                            }
                            value="option2"
                            checked={selectedValue === 'option2'}
                            onChange={() => handleChange('option2')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label={
                                <>
                                    전립선 치료제 (두타스테라이드,
                                    <br />
                                    피나스테라이드)
                                </>
                            }
                            value="option3"
                            checked={selectedValue === 'option3'}
                            onChange={() => handleChange('option3')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="소에서 유래한 인슐린"
                            value="option4"
                            checked={selectedValue === 'option4'}
                            onChange={() => handleChange('option4')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="탈모증 치료제 (피나스테라이드)"
                            value="option5"
                            checked={selectedValue === 'option5'}
                            onChange={() => handleChange('option5')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="뇌하수체 유래 성장호르몬"
                            value="option6"
                            checked={selectedValue === 'option6'}
                            onChange={() => handleChange('option6')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="여드름 치료제 (이소트레티노인)"
                            value="option7"
                            checked={selectedValue === 'option7'}
                            onChange={() => handleChange('option7')}
                        />
                    </QBtn>
                </ScrollContainer>
                <Container>
                    <Button onClick={handleBack}>이전</Button>
                    <Button2 onClick={handleSubmit} disabled={!selectedValue}>다음으로</Button2>
                </Container>
                {isModalOpen && <Modal onClose={handleModalClose} />}
            </TestrContainer>
        </BaseContainer>
    );
}

export default QPage8;

const ContextModalBtn = styled.button`
  width: 343.691px;
  height: 55.145px;
  display: flex;
  justify-content: space-between; /* To align text left and image right */
  align-items: center; /* To vertically center the content */
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid #FF7575;
  background: #FFF;
  margin-bottom: 20px;
  color: #FF7575;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 23.4px */
  text-align: left;
  padding-left: 20px; /* Padding for left alignment */
  cursor: pointer;

  img {
    width: 17px;
    height: 21.928px;
    margin-right: 20px; /* Adjust this value if needed */
    flex-shrink: 0;
  }
`;

const ScrollContainer = styled.div`
  height: 347px;
  overflow-y: auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 345px;
  height: 60px;
  gap: 10px;
  margin-top: 10.24px;
`;

const Button = styled.button`
  display: flex;
  width: 92px;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 100px;
  border: 2px solid #E7E7E7;
  background: #FFF;
  color: #9C9C9C;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

const Button2 = styled.button`
  display: flex;
  width: 243px;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 100px;
  border: none;
  background: #FF7575;
  color: #FFF;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  &:disabled {
    background: #E7E7E7;
    color: #fff;
    cursor: not-allowed;
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
`;
