import { BaseContainer } from "../../Layout/Container";
import GoogleLoginButton from "../RegisterPage/Components/GoogleLoginButton";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SubmitBtn } from "../../Layout/SubmitBtn";

function IntroPage() {

    const navigate = useNavigate();

    const settings = {
        //arrows: false,
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
        <BaseContainer>
        <MySlider {...settings}>
          <Container>
            <StyledImage src ="/Img/IntroPage/hc.jpeg" alt = "테스트" />
          </Container>
          <Container>
            <StyledImage src ="/Img/IntroPage/jh.jpeg" alt = "테스트" />
          </Container>
          <Container>
            <StyledImage src ="/Img/IntroPage/mk.jpeg" alt = "테스트" />
          </Container>
        </MySlider>
        <GoogleLoginButton navigate={navigate} />
            <SubmitBtn>
                자가문진 바로가기
            </SubmitBtn>
        </BaseContainer>
    )
}

export default IntroPage;

const Container = styled.div`
    margin-top: 47px;
    margin-bottom: 120px;
    width: 390px;
    height: 443.776px;
    background-color: #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MySlider = styled(Slider)`
`; 

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;