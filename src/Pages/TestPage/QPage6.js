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

function QPage6() {
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
                최근 1년 이내, 아래와 같은 <br/>경험을 하셨나요?
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
        label="입원"
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label="수술"
        value="option3"
        checked={selectedValue === 'option3'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label="수혈"
        value="option4"
        checked={selectedValue === 'option4'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="경련"
    value="option5"
    checked={selectedValue === 'option5'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="의식소실"
    value="option6"
    checked={selectedValue === 'option6'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="예방접종"
    value="option7"
    checked={selectedValue === 'option7'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="마약주사"
    value="option8"
    checked={selectedValue === 'option8'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="다른 사람이 사용한 주사침에 찔림"
    value="option9"
    checked={selectedValue === 'option9'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label={
        <>
        교도소 (소년교도소 포함), 구치소,
        <br />
        등에 3일 이상 수감
      </>
      }
        value="option10"
        checked={selectedValue === 'option10'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label={
        <>
        불특정 이성과의 성접촉 또는
        <br />
        남성의 경우 남성과의 성접촉
      </>
      }
        value="option11"
        checked={selectedValue === 'option11'}
        onChange={handleChange}
      />
                </QBtn>
                <ButtonContainer/>
            </TestrContainer>
        </BaseContainer>
    )
}

export default QPage6;
