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

function QPage4() {
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
                최근 1개월 이내, 아래와 같은 <br/>경험을 하셨나요?
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
        label="반복적인 고열, 춥고 떨림, 땀흘림"
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label="외국여행"
        value="option3"
        checked={selectedValue === 'option3'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label="치과 치료"
        value="option4"
        checked={selectedValue === 'option4'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label={
      <>
        의료기관에서 단순 감기 이외의
        <br />
        질병 진단 또는 치료
      </>
    }
    value="option5"
    checked={selectedValue === 'option5'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label={
        <>
        시술(내시경, 조직검사,
        <br />
        레이저 시술 등)
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

export default QPage4;
