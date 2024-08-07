import { useState } from "react";
import { BaseContainer } from "../../Layout/Container";
import { GuideText } from "./Components/GuideText";
import { TestrContainer } from "./Components/TestContainer";
import { QBtn } from "./Components/QBtn";
import ButtonContainer from "./Components/ButtonContainer";
import StyledRadioButton from "./Components/StyledRadioButton";
import ImgBox from "./Components/ImgBox";
import { SubmitBtn } from "../RegisterPage/Components/SubmitBtn";

function StartPage() {
    const [selectedValue, setSelectedValue] = useState('');

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
                {/*워닝 메세지 */}
                <QBtn>
                <StyledRadioButton
        label="네, 읽어보았습니다."
        value="option1"
        checked={selectedValue === 'option1'}
        onChange={handleChange}
      />
                </QBtn>
                <ImgBox images={images} />
                <SubmitBtn>다음으로</SubmitBtn>
            </TestrContainer>
        </BaseContainer>
    )
}

export default StartPage;
