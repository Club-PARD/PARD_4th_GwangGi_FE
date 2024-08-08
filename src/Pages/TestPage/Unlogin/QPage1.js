// QPage1.js
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

function QPage1() {
    const [selectedValue, setSelectedValue] = useState('');
    const { updateFormData } = useAppContext();
    const navigate = useNavigate();

    const handleSubmit = () => {
        updateFormData('question1', selectedValue === 'option1' ? 0 : 1);
        navigate('/t_2');
    };

    const handleBack = () => {
        navigate('/t_start');
    };

    const handleChange = (value) => {
        setSelectedValue((prevValue) => (prevValue === value ? '' : value));
    };

    return (
        <BaseContainer>
            <TestrContainer>
                <ProgressBar currentPage={0} />
                <GuideText>
                    오늘 몸 상태는 <br/>어떠신가요?
                </GuideText>
                <Warning>
                    ※ 몸 상태가 좋지 않으신 분 중 일부는 일정기간 동안<br/>
                    헌혈을 할 수 없습니다.
                </Warning>
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
                        label="몸 상태 좋지 않음"
                        value="option2"
                        checked={selectedValue === 'option2'}
                        onChange={() => handleChange('option2')}
                    />
                </QBtn>
                <Container>
                    <Button onClick={handleBack}>이전</Button>
                    <Button2 onClick={handleSubmit} disabled={!selectedValue}>다음으로</Button2>
                </Container>
            </TestrContainer>
        </BaseContainer>
    );
}

export default QPage1;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 345px;
  height: 60px;
  gap: 10px;
  margin-top: 265px;
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