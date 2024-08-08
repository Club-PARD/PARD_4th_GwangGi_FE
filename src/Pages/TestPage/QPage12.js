import { useState } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAppContext } from './Context';
import { BaseContainer } from "../../Layout/Container";
import { GuideText } from "./Components/GuideText";
import { TestrContainer } from "./Components/TestContainer";
import ProgressBar from "./Components/ProgressBar";
import { D_Blood } from "./Components/D_Blood";
import { Num } from "./Components/Num";
import Modal from "./Components/ModalBubbel";
import Modal2 from "./Components/ModalBubbel2";
import Modal3 from "./Components/ModalBubbel3";
import CalendarModal from "./Components/CalendarModal";

function QPage12() {
    const [selectedValue, setSelectedValue] = useState('');
    const [currentPage, setCurrentPage] = useState(11);
    const [selectedButton, setSelectedButton] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const { updateFormData, state } = useAppContext();
    const navigate = useNavigate();

    const server = process.env.REACT_APP_URL;

    const handleSubmit = async () => {
        updateFormData('last_donation_date', selectedDate);
        updateFormData('donation_type', selectedButton);
        const formData = {
            ...state,
            last_donation_date: selectedDate,
            donation_type: selectedButton,
        };
    
        // 콘솔에 수집된 데이터를 출력
        console.log("Form Data:", formData);
    
        // 서버로 전송
        try {
            const response = await axios.post(`${server}api/questionnaire/login`, formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("Server Response:", response.data);
    
            // 응답 데이터를 상태로 전달하며 페이지 이동
            navigate('/test_agree', { state: { responseData: response.data } });
        } catch (error) {
            console.error('Error submitting data', error);
    
            // 에러 객체에 대한 추가 정보 로그
            if (error.response) {
                // 서버가 응답을 반환했지만 상태 코드가 2xx 범위를 벗어남
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                // 요청이 이루어졌지만 응답을 받지 못함
                console.error('Request data:', error.request);
            } else {
                // 요청을 설정하는 도중에 문제가 발생함
                console.error('Error message:', error.message);
            }
            console.error('Error config:', error.config);
        }
    };
    

    const handleBack = () => {
        navigate('/test_11');
    };

    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
        setSelectedValue(buttonNumber); // Ensure selectedValue is set when a button is clicked
    };

    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalType(null);
    };

    const openCalendar = () => {
        setIsCalendarOpen(true);
    };

    const closeCalendar = () => {
        setIsCalendarOpen(false);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsCalendarOpen(false);
    };

    return (
        <BaseContainer>
            <TestrContainer>
                <ProgressBar currentPage={currentPage} />
                <GuideText>
                    <p>마지막 헌혈 일자</p>와 당시의 <br/>헌혈 종류를 기입해주세요.
                </GuideText>
                <Title>
                    마지막 헌혈 일자
                </Title>
                <Date>
                    <DateText isDateSelected={!!selectedDate}>
                        {selectedDate ? selectedDate.toLocaleDateString() : 'XXXX / XX / XX'}
                    </DateText>
                    <CalendarButton onClick={openCalendar}>
                        <img src="Img/TestPage/calendar-icon.png" alt="calendar icon" />
                    </CalendarButton>
                </Date>
                <BubbleContainer>
                    <img src="/Img/TestPage/말풍선_회.png" alt="회색" />
                    <BubbleText>헌혈 종류의 설명을 확인 해보세요!</BubbleText>
                </BubbleContainer>
                <Title>
                    헌혈 종류
                </Title>
                <D_Blood 
                    isSelected={selectedButton === 0}
                    onClick={() => handleButtonClick(0)}
                >
                    <Num>1</Num>
                    <p>전혈</p>
                    <img src="Img/TestPage/Info.png" alt="info icon" onClick={() => openModal('type1')} />
                </D_Blood>
                <D_Blood 
                    isSelected={selectedButton === 1}
                    onClick={() => handleButtonClick(1)}
                >
                    <Num>2</Num>
                    <p>혈장 성분 헌혈</p>
                    <img src="Img/TestPage/Info2.png" alt="info icon" onClick={() => openModal('type2')} />
                </D_Blood>
                <D_Blood 
                    isSelected={selectedButton === 2}
                    onClick={() => handleButtonClick(2)}
                >
                    <Num>3</Num>
                    <p>혈소판 성분 헌혈</p>
                    <img src="Img/TestPage/Info3.png" alt="info icon" onClick={() => openModal('type3')} />
                </D_Blood>
                <Container>
                    <Button onClick={handleBack}>이전</Button>
                    <Button2 onClick={handleSubmit} disabled={!selectedDate || selectedButton === null}>다음으로</Button2>
                </Container>
            </TestrContainer>
            {isModalOpen && modalType === 'type1' && <Modal onClose={closeModal} />}
            {isModalOpen && modalType === 'type2' && <Modal2 onClose={closeModal} />}
            {isModalOpen && modalType === 'type3' && <Modal3 onClose={closeModal} />}
            {isCalendarOpen && <CalendarModal onClose={closeCalendar} onDateChange={handleDateChange} />}
        </BaseContainer>
    )
}

export default QPage12;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 345px;
  height: 60px;
  gap: 10px;
  margin-top: 73px;
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

const BubbleContainer = styled.div`
  width: 345px;
  position: relative;
  display: flex;
  justify-content: flex-end; /* Aligns the image to the right */
  top: 38px;
  img {
    width: 180px;
    height: 30px;
    flex-shrink: 0;
    margin-bottom: 2px;
  }
`;

const BubbleText = styled.div`
  position: absolute;
  width: 300px;
  top: 12px;
  left: 106px; /* Adjust this value to position text correctly */
  transform: translateY(-50%);
  text-align: center;

  color: #9A9A9A;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Title = styled.div`
color: #7B7B7B;
font-family: "Pretendard Variable";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 130%; /* 18.2px */
margin-bottom: 6px;
margin-top: 17px;
`;

const Date = styled.div`
  width: 305px;
  height: 71px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1.5px solid #E7E7E7;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const DateText = styled.span`
  color: ${({ isDateSelected }) => (isDateSelected ? 'black' : '#BCBCBC')};
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CalendarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
`;