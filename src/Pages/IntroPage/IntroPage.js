import { BaseContainer } from "../../Layout/Container";
import GoogleLoginButton from "../RegisterPage/Components/GoogleLoginButton";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SubmitBtn } from "../../Layout/SubmitBtn";

function IntroPage() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/t_alert');
    };

    const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        infinite: true,
        centerMode: false,
        speed: 500,
        initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <CenteredContainer>
            <SliderWrapper>
                <MySlider {...settings}>
                    <StyledImage src="/Img/IntroPage/Intro.png" alt="테스트" />
                    <StyledImage src="/Img/IntroPage/Intro.png" alt="테스트" />
                    <StyledImage src="/Img/IntroPage/Intro.png" alt="테스트" />
                </MySlider>
            </SliderWrapper>
            <GoogleLoginButton navigate={navigate} />
            <StyledSubmitBtn onClick={handleSubmit}> 
                자가문진 바로가기
            </StyledSubmitBtn>
        </CenteredContainer>
    )
}

export default IntroPage;

const CenteredContainer = styled(BaseContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const SliderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const MySlider = styled(Slider)`
    width: 390px;
    .slick-list {
        width: 390px;
    }
`;

const StyledImage = styled.img`
    width: 390px;
    height: 443px;
    object-fit: cover;
`;

const StyledSubmitBtn = styled(SubmitBtn)`
    margin-top: 20px;
`;
