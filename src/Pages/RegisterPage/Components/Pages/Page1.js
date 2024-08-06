import React, { useState, useEffect } from "react";
import { BaseContainer } from "../../Layout/Container";
import { RegisterContainer } from "./Components/RegisterContainer";

import { NumberEclipse } from "./Components/PageNum";
import { GuideText } from "./Components/GuideText";
import TextBox from "./Components/TextBox"; // Ensure this is the correct import path
import { SectionText } from "./Components/SectionText";
import { SubmitBtn } from "./Components/SubmitBtn";

import { handlePostRegister } from "../../API/LoginAPI";
import { useNavigate } from "react-router-dom";

function Page1() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '', name: '', birthday: '', gender: '',
        height: '',
        weight: '',
        blood_type: '',
        last_donation_date: '',
        nickname: ''
    });

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
                    value={formData.nickname}
                    onChange={handleNicknameChange}
                    onDelete={handleNicknameDelete}
                />
                <SubmitBtn>
                    다음으로
                </SubmitBtn>
            </RegisterContainer>
        </BaseContainer>
    );
}

export default Page1;