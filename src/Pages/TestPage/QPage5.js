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

function QPage5() {
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
                최근 6개월 이내, 아래와 같은 <br/>경험을 하셨나요?
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
        label="임신"
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label="분만"
        value="option3"
        checked={selectedValue === 'option3'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label="유산"
        value="option4"
        checked={selectedValue === 'option4'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="침술, 부항(사혈)"
    value="option5"
    checked={selectedValue === 'option5'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label={
        <>
        사마귀, 점제거, 피어싱(귀 뚫음 등),
        <br />
        문신(반영구화장 포함)
      </>
      }
        value="option6"
        checked={selectedValue === 'option6'}
        onChange={handleChange}
      />
                </QBtn>
                <ButtonContainer/>
            </TestrContainer>
        </BaseContainer>
    )
}

export default QPage5;
