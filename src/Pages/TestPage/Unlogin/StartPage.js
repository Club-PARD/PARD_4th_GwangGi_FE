import { useState } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { BaseContainer } from "../../../Layout/Container";
import { TestrContainer } from "../Components/TestContainer";
import { QBtn } from "../Components/QBtn";
import StyledRadioButton from "../Components/StyledRadioButton";
import ImgBox from "../Components/ImgBox";
import { SubmitBtn } from "../../RegisterPage/Components/SubmitBtn";

function StartPage() {
    const [selectedValue, setSelectedValue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (selectedValue === 'option1') {
            navigate('/t_1');
        }
    };

    const handleChange = (value) => {
        setSelectedValue((prevValue) => (prevValue === value ? '' : value));
    };

    const images = [
        'Img/TestPage/안내문1.png',
        'Img/TestPage/안내문2.png',
        'Img/TestPage/안내문3.png',
        'Img/TestPage/안내문4.png',
        'Img/TestPage/안내문5.png',
        'Img/TestPage/안내문6.png'
    ];

    return (
        <BaseContainer>
            <TestrContainer>
                <GuideText>
                    아래 정보에 대한 <p>안내문</p>을 <br/>읽어보셨습니까?
                </GuideText>
                <Warning>
                ※ 안내문 정보: 헌혈금지약물, 헌혈금지약물(태아영향)-요약,<br/>
                감염병, 말라리아 관련 헌혈제한지역, 헌혈관련증상 
                </Warning>
                <QBtn>
                    <StyledRadioButton
                        label="네, 읽어보았습니다."
                        value="option1"
                        checked={selectedValue === 'option1'}
                        onChange={() => handleChange('option1')}
                    />
                </QBtn>
                <ImgBox images={images} />
                <SubmitBtn onClick={handleSubmit} disabled={selectedValue !== 'option1'}>
                    다음으로
                </SubmitBtn>
            </TestrContainer>
        </BaseContainer>
    );
}

export default StartPage;

const Warning = styled.div`
    color: #C15656;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 19.5px */
    margin-top: 15px;
    margin-bottom: 23px;
`;

const GuideText = styled.div`
  margin-top: 77px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 32.5px */

  p {
    color: #FF7575;
    display: inline;
  }
`;