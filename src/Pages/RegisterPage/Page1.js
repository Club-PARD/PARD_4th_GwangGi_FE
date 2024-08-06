import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { BaseContainer } from "../../Layout/Container";
import { RegisterContainer } from "./Components/RegisterContainer";
import { NumberEclipse } from "./Components/PageNum";
import { GuideText } from "./Components/GuideText";
import TextBox from "./Components/TextBox"; // Ensure this is the correct import path
import { SectionText } from "./Components/SectionText";
import { SubmitBtn as OriginalSubmitBtn } from "./Components/SubmitBtn"; // 원래 SubmitBtn 가져오기
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext";

function Page1() {
    const navigate = useNavigate();
    const { formData, setFormData } = useContext(FormContext);
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

    const handleNicknameChange = (e) => {
        setFormData({
            ...formData,
            name: e.target.value
        });
    };

    const handleNicknameDelete = () => {
        setFormData({
            ...formData,
            name: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name) {
            alert("닉네임을 입력해주세요.");
            return;
        }
        navigate("/r_page2");
    };

    return (
        <BaseContainer>
            <RegisterContainer>
                <NumberEclipse>
                    <p>1</p>
                </NumberEclipse>
                <GuideText>
                    앞으로 사용하게 될 <br/><p>닉네임</p>을 입력해주세요
                </GuideText>
                <SectionText>
                    닉네임
                </SectionText>
                <TextBox
                    placeholder={placeholderVisible ? "닉네임 입력" : ""}
                    value={formData.name}  // Updated to formData.nickname
                    onChange={handleNicknameChange}
                    onDelete={handleNicknameDelete}
                />
                <SubmitBtn onClick={handleSubmit}>
                    다음으로
                </SubmitBtn>
            </RegisterContainer>
        </BaseContainer>
    );
}

export default Page1;

const SubmitBtn = styled(OriginalSubmitBtn)`
  margin-top: 331px;
  margin-bottom: 29px;
`;
