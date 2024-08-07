import { useState } from "react";
import { BaseContainer } from "../../Layout/Container";
import { GuideText } from "./Components/GuideText";
import { TestrContainer } from "./Components/TestContainer";
import { QBtn } from "./Components/QBtn";
import StyledRadioButton from "./Components/StyledRadioButton";
import ImgBox from "./Components/ImgBox";
import { SubmitBtn } from "../RegisterPage/Components/SubmitBtn";
import ButtonContainer from "./Components/ButtonContainer";
import ProgressBar from "./Components/ProgressBar";

function QPage1() {
    const [selectedValue, setSelectedValue] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

  const handleChange = (value) => {
    setSelectedValue((prevValue) => (prevValue === value ? '' : value));
  };


    return (
        <BaseContainer>
            <TestrContainer>
            <ProgressBar currentPage={currentPage} />
                <GuideText>
                오늘 몸 상태는 <br/>어떠신가요?
                </GuideText>
                {/*워닝 메세지 */}
                <QBtn>
                <StyledRadioButton
        label="해당없음"
        value="option1"
        checked={selectedValue === 'option1'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label="몸 상태 좋지 않음"
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={handleChange}
      />
                </QBtn>
                <ButtonContainer/>
            </TestrContainer>
        </BaseContainer>
    )
}

export default QPage1;
