import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { BaseContainer } from "../../Layout/Container";
import { RegisterContainer } from "./Components/RegisterContainer";
import { NumberEclipse as OriginalNumberEclipse } from "./Components/PageNum";
import { GuideText } from "./Components/GuideText";
import { SectionText } from "./Components/SectionText";
import { SubmitBtn as OriginalSubmitBtn } from "./Components/SubmitBtn";
import { SelectBtn } from "./Components/SelectBtn";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext";

function Page3() {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormContext);
  const [selectedBloodType, setSelectedBloodType] = useState(formData.blood_type.split('')[0] || null);
  const [selectedRHFactor, setSelectedRHFactor] = useState(formData.blood_type.split('')[1] || null);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('user_email');
    if (storedEmail) {
      setFormData(prevFormData => ({
        ...prevFormData,
        email: storedEmail
      }));
    }
  }, [setFormData]);

  const handleBloodTypeChange = (blood_type) => {
    setSelectedBloodType(blood_type);
  };

  const handleRHFactorChange = (rhFactor) => {
    setSelectedRHFactor(rhFactor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedBloodType === null || selectedRHFactor === null) {
      alert("혈액형과 Rh 인자를 모두 선택해주세요.");
      return;
    }

    const bloodTypes = ["A", "B", "O", "AB"];
    const rhFactors = ["+", "-"];
    const combinedBloodType = `${bloodTypes[selectedBloodType]}${rhFactors[selectedRHFactor]}`;

    setFormData({
      ...formData,
      blood_type: combinedBloodType
    });

    navigate("/r_page4");
  };

  return (
    <BaseContainer>
      <RegisterContainer>
        <Return>
          <NumberEclipse>
            <p>3</p>
          </NumberEclipse>
          <Link onClick={() => navigate("/r_page2")}>이전</Link>
        </Return>
        <GuideText>
          안전한 헌혈을 위해 <br/><p>정확한 혈액형</p>을 입력해주세요
        </GuideText>
        <SectionText>
          혈액형
        </SectionText>
        <BtnContainer>
          <SelectBtn
            onClick={() => handleBloodTypeChange(0)}
            selected={selectedBloodType === 0}
          >
            A형
          </SelectBtn>
          <SelectBtn
            onClick={() => handleBloodTypeChange(1)}
            selected={selectedBloodType === 1}
          >
            B형
          </SelectBtn>
        </BtnContainer>
        <BtnContainer3>
          <SelectBtn
            onClick={() => handleBloodTypeChange(2)}
            selected={selectedBloodType === 2}
          >
            O형
          </SelectBtn>
          <SelectBtn
            onClick={() => handleBloodTypeChange(3)}
            selected={selectedBloodType === 3}
          >
            AB형
          </SelectBtn>
        </BtnContainer3>
        <SectionText>
          유형
        </SectionText>
        <BtnContainer2>
          <SelectBtn
            onClick={() => handleRHFactorChange(0)}
            selected={selectedRHFactor === 0}
          >
            RH+
          </SelectBtn>
          <SelectBtn
            onClick={() => handleRHFactorChange(1)}
            selected={selectedRHFactor === 1}
          >
            RH-
          </SelectBtn>
        </BtnContainer2>
        <SubmitBtn onClick={handleSubmit}>
          완료하기
        </SubmitBtn>
      </RegisterContainer>
    </BaseContainer>
  );
}

export default Page3;

const BtnContainer = styled.div`
  width: 345px;
  height: 55px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  gap: 12.31px;
`;

const BtnContainer3 = styled.div`
  width: 345px;
  height: 55px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: row;
  gap: 12.31px;
`;

const BtnContainer2 = styled.div`
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

const SubmitBtn = styled(OriginalSubmitBtn)`
  margin-top: 165px;
  margin-bottom: 29px;
`
