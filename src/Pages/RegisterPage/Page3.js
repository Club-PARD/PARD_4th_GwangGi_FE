import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { BaseContainer } from "../../Layout/Container";
import { RegisterContainer } from "./Components/RegisterContainer";
import { NumberEclipse } from "./Components/PageNum";
import { GuideText } from "./Components/GuideText";
import TextBox from "./Components/TextBox"; // Ensure this is the correct import path
import { SectionText } from "./Components/SectionText";
import { SubmitBtn } from "./Components/SubmitBtn";
import { SelectBtn } from "./Components/SelectBtn";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext";
import { handlePostRegister } from "../../API/LoginAPI";

function Page3() {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormContext);
  const [selectedBloodType, setSelectedBloodType] = useState(formData.blood_type[0] || null);
  const [selectedRHFactor, setSelectedRHFactor] = useState(formData.blood_type[1] || null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bloodTypes = ["A", "B", "O", "AB"];
    const rhFactors = ["+", "-"];
    const combinedBloodType = `${bloodTypes[selectedBloodType]}${rhFactors[selectedRHFactor]}`;

    const transformedData = {
      ...formData,
      blood_type: combinedBloodType,
      height: parseFloat(formData.height),
      weight: parseFloat(formData.weight)
    };

    if (window.confirm("등록하시겠습니까?")) {
      console.log(transformedData);
      try {
        const response = await handlePostRegister(transformedData);
        if (response.response_object._new_user === false) {
          alert("등록되었습니다.");
          navigate("/r_page4");
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
        <NumberEclipse>
          <p>3</p>
        </NumberEclipse>
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
        <BtnContainer>
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
        </BtnContainer>
    
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

const BtnContainer2 = styled.div`
  width: 345px;
  height: 55px;
  margin-bottom: 39px;
  display: flex;
  flex-direction: row;
  gap: 12.31px;
`;
