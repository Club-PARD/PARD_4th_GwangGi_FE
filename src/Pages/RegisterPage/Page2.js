import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { BaseContainer } from "../../Layout/Container";
import { RegisterContainer } from "./Components/RegisterContainer";
import { NumberEclipse as OriginalNumberEclipse } from "./Components/PageNum";
import { GuideText } from "./Components/GuideText";
import TextBox from "./Components/TextBox"; // Ensure this is the correct import path
import { SectionText } from "./Components/SectionText";
import { SubmitBtn } from "./Components/SubmitBtn";
import { SelectBtn } from "./Components/SelectBtn";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext";

function Page2() {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormContext);
  const [selectedGender, setSelectedGender] = useState(formData.gender);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('user_email');
    if (storedEmail) {
      setFormData(prevFormData => ({
        ...prevFormData,
        email: storedEmail
      }));
    }
  }, [setFormData]);

  const handleGenderChange = (gender) => {
    setFormData({
      ...formData,
      gender: gender
    });
    setSelectedGender(gender);
  };

  const handleHeightChange = (e) => {
    setFormData({
      ...formData,
      height: e.target.value
    });
  };

  const handleWeightChange = (e) => {
    setFormData({
      ...formData,
      weight: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/r_page3");
  };

  return (
    <BaseContainer>
      <RegisterContainer>
        <Return>
          <NumberEclipse>
            <p>2</p>
          </NumberEclipse>
          <Link onClick={() => navigate("/r_page1")}>이전</Link>
        </Return>
        <GuideText>
          정확한 자가문진을 위해 <br/><p>신체 정보</p>를 입력해주세요
        </GuideText>
        <SectionText>
          성별
        </SectionText>
        <BtnContainer>
          <SelectBtn
            onClick={() => handleGenderChange(0)}
            selected={selectedGender === 0}
          >
            남자
          </SelectBtn>
          <SelectBtn
            onClick={() => handleGenderChange(1)}
            selected={selectedGender === 1}
          >
            여자
          </SelectBtn>
        </BtnContainer>
        <SectionText>
          키
        </SectionText>
        <TextBox
          placeholder={placeholderVisible ? "키를 입력하세요" : ""}
          value={formData.height}
          onChange={handleHeightChange}
        />
        <SectionText>
          몸무게
        </SectionText>
        <TextBox
          placeholder={placeholderVisible ? "몸무게를 입력하세요" : ""}
          value={formData.weight}
          onChange={handleWeightChange}
        />
        <SubmitBtn onClick={handleSubmit}>
          다음으로
        </SubmitBtn>
      </RegisterContainer>
    </BaseContainer>
  );
}

export default Page2;

const BtnContainer = styled.div`
  width: 345px;
  height: 55px;
  margin-bottom: 39px;
  display: flex;
  flex-direction: row;
  gap: 12.31px;
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
    line-height: 19px; /* Ensure this matches the height of the Link */
  }
`;