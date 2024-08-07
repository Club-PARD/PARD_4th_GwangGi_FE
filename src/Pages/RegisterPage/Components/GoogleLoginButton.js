import React from 'react';
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { handleLogin } from "../../../API/LoginAPI";
import styled from "styled-components";

const GoogleLoginButton = ({ navigate }) => {
    const handleSuccess = async (res) => {
        try {
            const decodedToken = jwtDecode(res.credential);
            const result_email = decodedToken.email;

            sessionStorage.setItem('user_email', result_email);

            // 로그인 요청 처리
            const response = await handleLogin(result_email);
            const is_new_user = response.data.response_object._new_user;
            if (is_new_user === true) {
                alert("신규 회원입니다.");
                navigate("/r_page1");
            } else {
                alert("기존 회원입니다.");
                navigate("/home");
            }

        } catch (error) {
            console.error("로그인 처리 중 오류 발생:", error);
        }
    };

    return (
        <StyledGoogleLoginWrapper>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                <StyledGoogleLoginButton
                    onSuccess={handleSuccess}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </StyledGoogleLoginWrapper>
    );
};

export default GoogleLoginButton;

const StyledGoogleLoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    padding: 10px;
    border: 2px solid #4285F4;
    border-radius: 5px;
    margin: 20px 0;
    cursor: pointer;
`;

const StyledGoogleLoginButton = styled(GoogleLogin)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #4285F4;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: #357ae8;
    }
`;
