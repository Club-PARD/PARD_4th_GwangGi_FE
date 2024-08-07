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
        navigate('/test_alert');
    };

    const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <CenteredBaseContainer>
            <MySlider {...settings}>
                <Container>
                    <StyledImage src="/Img/IntroPage/hc.jpeg" alt="테스트" />
                </Container>
                <Container>
                    <StyledImage src="/Img/IntroPage/jh.jpeg" alt="테스트" />
                </Container>
                <Container>
                    <StyledImage src="/Img/IntroPage/mk.jpeg" alt="테스트" />
                </Container>
            </MySlider>
            <GoogleLoginButton navigate={navigate} />
            <StyledSubmitBtn onClick={handleSubmit}> 
                자가문진 바로가기
            </StyledSubmitBtn>
        </CenteredBaseContainer>
    )
}

export default IntroPage;

const CenteredBaseContainer = styled(BaseContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    margin: 0 auto; /* 가운데 정렬을 위해 마진을 auto로 설정 */
    max-width: 390px;
    width: 100vw;
    height: 443.776px;
    background-color: #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MySlider = styled(Slider)`
    width: 100%;
    max-width: 390px; /* 슬라이더의 최대 너비를 설정 */
    .slick-list {
        width: 100%;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const StyledSubmitBtn = styled(SubmitBtn)`
    margin-top: 20px;
`;
