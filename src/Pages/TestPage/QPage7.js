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

function QPage7() {
    const [selectedValue, setSelectedValue] = useState('');
    const { updateFormData } = useAppContext();
    const navigate = useNavigate();

    const handleSubmit = () => {
        updateFormData('question7', selectedValue === 'option1' ? 0 : selectedValue === 'option2' ? 1 : selectedValue === 'option3' ? 2 : selectedValue === 'option4' ? 3 : selectedValue === 'option5' ? 4 : selectedValue === 'option6' ? 5 : selectedValue === 'option7' ? 6 : selectedValue === 'option8' ? 7 : selectedValue === 'option9' ? 8 : selectedValue === 'option10' ? 9 : selectedValue === 'option11' ? 10 : selectedValue === 'option12' ? 11 : selectedValue === 'option13' ? 12 : 13);
        navigate('/test_8');
    };

    const handleBack = () => {
        navigate('/test_6');
    };

    const handleChange = (value) => {
        setSelectedValue((prevValue) => (prevValue === value ? '' : value));
    };

    return (
        <BaseContainer>
            <TestrContainer>
                <ProgressBar currentPage={6} />
                <GuideText>
                    기간에 관계 없이,아래와 같은 <br/>경험을 하셨나요?
                </GuideText>
                <Warning>
                    ※ 아래와 같은 경험을 하신 분 중 일부는 <br/>
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
                            label="암"
                            value="option2"
                            checked={selectedValue === 'option2'}
                            onChange={() => handleChange('option2')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="심장질환"
                            value="option3"
                            checked={selectedValue === 'option3'}
                            onChange={() => handleChange('option3')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="신장질환"
                            value="option4"
                            checked={selectedValue === 'option4'}
                            onChange={() => handleChange('option4')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="간질환"
                            value="option5"
                            checked={selectedValue === 'option5'}
                            onChange={() => handleChange('option5')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="호흡기 질환"
                            value="option6"
                            checked={selectedValue === 'option6'}
                            onChange={() => handleChange('option6')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="혈액질환 (혈우병, 적혈구증다증 등)"
                            value="option7"
                            checked={selectedValue === 'option7'}
                            onChange={() => handleChange('option7')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="당뇨병"
                            value="option8"
                            checked={selectedValue === 'option8'}
                            onChange={() => handleChange('option8')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="피부질환 (건선 등)"
                            value="option9"
                            checked={selectedValue === 'option9'}
                            onChange={() => handleChange('option9')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="알코올 또는 마약 중독"
                            value="option10"
                            checked={selectedValue === 'option10'}
                            onChange={() => handleChange('option10')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="정신질환"
                            value="option11"
                            checked={selectedValue === 'option11'}
                            onChange={() => handleChange('option11')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="경련성질환"
                            value="option12"
                            checked={selectedValue === 'option12'}
                            onChange={() => handleChange('option12')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label="자가면역질환 (류마티즘 등)"
                            value="option13"
                            checked={selectedValue === 'option13'}
                            onChange={() => handleChange('option13')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label={
                                <>
                                    장기이식 (신장, 간장, 췌장, 심장,
                                    <br />
                                    폐, 골수, 안구 등)
                                </>
                            }
                            value="option14"
                            checked={selectedValue === 'option14'}
                            onChange={() => handleChange('option14')}
                        />
                    </QBtn>
                </ScrollContainer>
                <Container>
                    <Button onClick={handleBack}>이전</Button>
                    <Button2 onClick={handleSubmit} disabled={!selectedValue}>다음으로</Button2>
                </Container>
            </TestrContainer>
        </BaseContainer>
    )
}

export default QPage7;

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
