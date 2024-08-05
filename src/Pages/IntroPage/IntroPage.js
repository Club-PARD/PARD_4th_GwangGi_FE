import { BaseContainer } from "../../Layout/Container";
import GoogleLoginButton from "../RegisterPage/Components/GoogleLoginButton";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import React, {Component} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SubmitBtn } from "../../Layout/SubmitBtn";

function IntroPage() {

    const navigate = useNavigate();

    // 상단으로 부터 47px 떨어짐
    const settings = {
        //arrows: false,
        autoplay: true,
        autoplaySpeed: 100,
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 400,
        initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <BaseContainer>
            IntroPage
        <Container>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </Container>
        <GoogleLoginButton navigate={navigate} />
            <SubmitBtn>
                자가문진 바로가기
            </SubmitBtn>
        </BaseContainer>
    )
}

export default IntroPage;

const Container=styled.div`
    width: 200px;
    height: 900px;
`;