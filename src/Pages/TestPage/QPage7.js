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

function QPage7() {
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
                기간에 관계 없이,아래와 같은 <br/>경험을 하셨나요?
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
        label="암"
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label="심장질환"
        value="option3"
        checked={selectedValue === 'option3'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label="신장질환"
        value="option4"
        checked={selectedValue === 'option4'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="간질환"
    value="option5"
    checked={selectedValue === 'option5'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="호흡기 질환"
    value="option6"
    checked={selectedValue === 'option6'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="혈액질환 (혈우병, 적혈구증다증 등)"
    value="option7"
    checked={selectedValue === 'option7'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="당뇨병"
    value="option8"
    checked={selectedValue === 'option8'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="피부질환 (건선 등)"
    value="option9"
    checked={selectedValue === 'option9'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="알코올 또는 마약 중독"
    value="option10"
    checked={selectedValue === 'option10'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="정신질환"
    value="option11"
    checked={selectedValue === 'option11'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="경련성질환"
    value="option12"
    checked={selectedValue === 'option12'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label="자가면역질환 (류마티즘 등)"
        value="option13"
        checked={selectedValue === 'option13'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label={
        <>
        장기이식 (신장, 간장, 췌장, 심장,
        <br />
        폐, 골수, 안구 등)
      </>
      }
        value="option14"
        checked={selectedValue === 'option14'}
        onChange={handleChange}
      />
                </QBtn>
                <ButtonContainer/>
            </TestrContainer>
        </BaseContainer>
    )
}

export default QPage7;
