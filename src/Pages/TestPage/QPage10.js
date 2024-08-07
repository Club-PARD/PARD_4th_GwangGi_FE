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

function QPage10() {
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
                <p>말라리아</p> 관련 선택지 중 <br/>복용한 경험이 있으신가요?
                </GuideText>
                {/*워닝 메세지 */}
                {/*말라리아 헌혈 제한 안내문*/}
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
            최근 1년 이내에 국내 말라리아 관련
            <br/> 
            헌혈제한지역에서 1일 이상 숙박
            <br/>
            (거주 또는 군복무 포함)
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
            최근 1년 이내에 국외 말라리아 관련 
            <br/>
            헌혈제한지역에서 1일 이상
            <br/>
            6개월 미만 숙박
          </>
          }
        value="option3"
        checked={selectedValue === 'option3'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label={
            <>
            최근 3년 이내에 국외 말라리아 관련
            <br/>
            헌혈제한지역에서 6개월 이상 
            <br/>
            거주 또는 군복무
          </>
          }
        value="option4"
        checked={selectedValue === 'option4'}
        onChange={handleChange}
      />
      </QBtn>
                <ButtonContainer/>
            </TestrContainer>
        </BaseContainer>
    )
}

export default QPage10;
