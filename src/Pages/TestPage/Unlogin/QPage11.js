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
import Modal from '../Components/Modal4'; // Import the Modal component

function QPage11() {
    const [selectedValue, setSelectedValue] = useState('');
    const { updateFormData } = useAppContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        updateFormData('question11', selectedValue === 'option1' ? 0 : selectedValue === 'option2' ? 1 : selectedValue === 'option3' ? 2 : selectedValue === 'option4' ? 3 : 4);
        navigate('/t_12');
    };

    const handleBack = () => {
        navigate('/t_10');
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
                <ProgressBar currentPage={10} />
                <GuideText>
                    <p>야콥병</p> 관련 선택지 중 <br/>해당사항이 있으신가요?
                </GuideText>
                <Warning>
                    ※ 야콥병 헌혈 제한 안내문을 참조하신 후, 해당사항이 있는 분들은<br/>
                    일정기간 동안 헌혈할 수 없습니다.
                </Warning>
                <ContextModalBtn onClick={handleModalOpen}>
                    <p>야콥병 헌혈 제한 안내문</p>
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
                                    1980년~1996년까지 1개월 이상
                                    <br/> 
                                    “영국” 거주/방문/여행
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
                                    1997년~현재까지 3개월 이상 
                                    <br/>
                                    “영국” 거주/방문/여행
                                </>
                            }
                            value="option3"
                            checked={selectedValue === 'option3'}
                            onChange={() => handleChange('option3')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label={
                                <>
                                    1980년~현재까지 5년 이상
                                    <br/>
                                    “유럽국가” 거주/방문/여행 
                                </>
                            }
                            value="option4"
                            checked={selectedValue === 'option4'}
                            onChange={() => handleChange('option4')}
                        />
                    </QBtn>
                    <QBtn>
                        <StyledRadioButton
                            label={
                                <>
                                    1980년 이후 “영국, 프랑스”
                                    <br/>
                                    에서의 수혈
                                </>
                            }
                            value="option5"
                            checked={selectedValue === 'option5'}
                            onChange={() => handleChange('option5')}
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
    )
}

export default QPage11;

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
