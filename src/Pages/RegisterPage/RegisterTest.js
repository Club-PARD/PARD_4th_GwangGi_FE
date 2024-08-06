import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BaseContainer } from "../../Layout/Container";
import { RegisterContainer } from "./Components/RegisterContainer";

import { NumberEclipse } from "./Components/PageNum";
import { GuideText } from "./Components/GuideText";
import TextBox from "./Components/TextBox"; // Ensure this is the correct import path
import { SectionText } from "./Components/SectionText";
import { SubmitBtn } from "./Components/SubmitBtn";
import { SelectBtn } from "./Components/SelectBtn";

import { handlePostRegister } from "../../API/LoginAPI";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '', name: '', birthday: '', gender: '',
    height: '',
    weight: '',
    blood_type: '',
    last_donation_date: '',
    nickname: ''
  });

  const [selectedGender, setSelectedGender] = useState(null);

  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('user_email');
    if (storedEmail) {
      setFormData(prevFormData => ({
        ...prevFormData,
        email: storedEmail
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'gender' ? parseInt(value, 10) : value;
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

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

  const handleNicknameChange = (e) => {
    setFormData({
      ...formData,
      nickname: e.target.value
    });
  };

  const handleNicknameDelete = () => {
    setFormData({
      ...formData,
      nickname: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const transformedData = {
      ...formData,
      height: parseFloat(formData.height),
      weight: parseFloat(formData.weight)
    };

    if (window.confirm("등록하시겠습니까?")) {
      console.log(transformedData);
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
        <NumberEclipse>
          <p>2</p>
        </NumberEclipse>
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

export default RegisterPage;

const BtnContainer = styled.div`
  width: 345px;
  height: 55px;
  margin-bottom: 39px;
  display: flex;
  flex-direction: row;
  gap: 12.31px;
`;
