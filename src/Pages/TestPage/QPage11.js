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

function QPage11() {
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
                <p>야콥병</p> 관련 선택지 중 <br/>해당사항이 있으신가요?
                </GuideText>
                {/*워닝 메세지 */}
                {/*야콥병 헌혈 제한 안내문*/}
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
            1980년~1996년까지 1개월 이상
            <br/> 
            “영국” 거주/방문/여행
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
            1997년~현재까지 3개월 이상 
            <br/>
            “영국” 거주/방문/여행
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
            1980년~현재까지 5년 이상
            <br/>
            “유럽국가” 거주/방문/여행 
          </>
          }
        value="option4"
        checked={selectedValue === 'option4'}
        onChange={handleChange}
      />
      </QBtn>
      <QBtn>
                <StyledRadioButton
        label={
            <>
            1980년 이후 “영국, 프랑스”
            <br/>
            에서의 수혈
          </>
          }
        value="option5"
        checked={selectedValue === 'option5'}
        onChange={handleChange}
      />
      </QBtn>
                <ButtonContainer/>
            </TestrContainer>
        </BaseContainer>
    )
}

export default QPage11;
