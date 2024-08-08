import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { BaseContainer } from "../../Layout/Container";
import { RegisterContainer } from "./Components/RegisterContainer";
import { NumberEclipse as OriginalNumberEclipse } from "./Components/PageNum";
import { GuideText } from "./Components/GuideText";
import { SectionText } from "./Components/SectionText";
import { SubmitBtn as OriginalSubmitBtn } from "./Components/SubmitBtn";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext";
import CalendarModal from "../TestPage/Components/CalendarModal";
import { handlePostRegister } from "../../API/LoginAPI"; // Import the API call

function Page4() {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormContext);
  const [birthday, setBirthday] = useState(formData.birthday || "");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('user_email');
    if (storedEmail) {
      setFormData(prevFormData => ({
        ...prevFormData,
        email: storedEmail
      }));
    }
  }, [setFormData]);

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split('T')[0]; // Format the date as YYYY-MM-DD
    setBirthday(formattedDate);
    setFormData({
      ...formData,
      birthday: formattedDate
    });
    setIsCalendarOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!birthday) {
      alert("생년월일을 입력해주세요.");
      return;
    }

    const transformedData = {
      ...formData,
      birthday: birthday
    };

    if (window.confirm("등록하시겠습니까?")) {
      try {
        const response = await handlePostRegister(transformedData);
        if (response.response_object._new_user === false) {
          alert("등록되었습니다.");
          navigate("/home");
        } else {
          alert("이미 등록된 유저입니다.");
          navigate("/");
        }
      } catch (error) {
        console.error("등록 중 오류 발생:", error);
        alert("등록 실패. 다시 시도해 주세요.");
      }
    }
  };

  return (
    <BaseContainer>
      <RegisterContainer>
        <Return>
          <NumberEclipse>
            <p>4</p>
          </NumberEclipse>
          <Link onClick={() => navigate("/r_page3")}>이전</Link>
        </Return>
        <GuideText>
          <p>생년월일</p>을 <br/>입력해주세요
        </GuideText>
        <SectionText>
          생년월일
        </SectionText>
        <DateContainer>
          <DateText isDateSelected={!!birthday}>
            {birthday ? new Date(birthday).toLocaleDateString() : 'XXXX / XX / XX'}
          </DateText>
          <CalendarButton onClick={openCalendar}>
            <img src="Img/TestPage/calendar-icon.png" alt="calendar icon" />
          </CalendarButton>
        </DateContainer>
        <SubmitBtn onClick={handleSubmit}>
          완료하기
        </SubmitBtn>
      </RegisterContainer>
      {isCalendarOpen && <CalendarModal onClose={closeCalendar} onDateChange={handleDateChange} />}
    </BaseContainer>
  );
}

export default Page4;

const SubmitBtn = styled(OriginalSubmitBtn)`
  margin-top: 69.2px;
`;

const Return = styled.div`
  width: 390px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Link = styled.span`
  cursor: pointer;
  color: #ABABAB;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-top: 72px;
  margin-right: 42px;
`;

const NumberEclipse = styled(OriginalNumberEclipse)`
  width: 19px;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #FF7575;
  color: #FFF;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  p {
    margin: 0;
    line-height: 19px;
  }
`;

const DateContainer = styled.div`
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
