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

function TestPage() {
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
                헌혈 금지 약물을 <p>현재 또는 과거에</p> <br/>복용한 경험이 있으신가요?
                </GuideText>
                {/*워닝 메세지 */}
                {/*헌혈 안내문 모달*/}
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
        label={
            <>
            건선치료제(에트레티네이트,
            <br />
            아시트레틴)
          </>
          }
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label={
            <>
            전립선 치료제 (두타스테라이드,
            <br />
            피나스테라이드)
          </>
          }
        value="option3"
        checked={selectedValue === 'option3'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label="소에서 유래한 인슐린"
        value="option4"
        checked={selectedValue === 'option4'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="탈모증 치료제 (피나스테라이드)"
    value="option5"
    checked={selectedValue === 'option5'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="뇌하수체 유래 성장호르몬"
    value="option6"
    checked={selectedValue === 'option6'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="여드름 치료제 (이소트레티노인)"
    value="option7"
    checked={selectedValue === 'option7'}
    onChange={handleChange}
  />
                </QBtn>
                <ButtonContainer/>
            </TestrContainer>
        </BaseContainer>
    )
}

export default TestPage;
