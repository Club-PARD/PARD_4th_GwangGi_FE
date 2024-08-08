import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../Context';
import { BaseContainer } from '../../../Layout/Container';
import { GuideText } from '../Components/GuideText';
import { TestrContainer } from '../Components/TestContainer';
import { QBtn } from '../Components/QBtn';
import { QBtn2 } from '../Components/QBtn2';
import StyledRadioButton2 from '../Components/StyledRadioButton2';
import StyledRadioButton from '../Components/StyledRadioButton';
import ProgressBar from '../Components/ProgressBar';

function QPage5() {
    const [selectedValue, setSelectedValue] = useState('');
    const { updateFormData } = useAppContext();
    const navigate = useNavigate();

    const handleSubmit = () => {
        updateFormData('question5', selectedValue === 'option1' ? 0 : selectedValue === 'option2' ? 1 : selectedValue === 'option3' ? 2 : selectedValue === 'option4' ? 3 : selectedValue === 'option5' ? 4 : 5);
        navigate('/t_6');
    };

    const handleBack = () => {
        navigate('/t_4');
    };

    const handleChange = (value) => {
        setSelectedValue((prevValue) => (prevValue === value ? '' : value));
    };

    return (
        <BaseContainer>
            <TestrContainer>
                <ProgressBar currentPage={4} />
                <GuideText>
                    최근 6개월 이내, 아래와 같은 <br />경험을 하셨나요?
                </GuideText>
                <Warning>
                    ※ 아래와 같은 경험을 해당 기간 안에 하신 분 중 일부는<br />
                    일정기간 동안 헌혈할 수 없습니다.
                </Warning>
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
                            label="임신"
                            value="option2"
                            checked={selectedValue === 'option2'}
                            onChange={() => handleChange('option2')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="분만"
                            value="option3"
                            checked={selectedValue === 'option3'}
                            onChange={() => handleChange('option3')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="유산"
                            value="option4"
                            checked={selectedValue === 'option4'}
                            onChange={() => handleChange('option4')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="침술, 부항(사혈)"
                            value="option5"
                            checked={selectedValue === 'option5'}
                            onChange={() => handleChange('option5')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label={
                                <>
                                    사마귀, 점제거, 피어싱(귀 뚫음 등),
                                    <br />
                                    문신(반영구화장 포함)
                                </>
                            }
                            value="option6"
                            checked={selectedValue === 'option6'}
                            onChange={() => handleChange('option6')}
                        />
                    </QBtn>
                </ScrollContainer>
                <Container>
                    <Button onClick={handleBack}>이전</Button>
                    <Button2 onClick={handleSubmit} disabled={!selectedValue}>
                        다음으로
                    </Button2>
                </Container>
            </TestrContainer>
        </BaseContainer>
    )
}

export default QPage5;

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
    color: #9C9C9C;
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
