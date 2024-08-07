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

function QPage9() {
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
                아래 감염병을 앓았던 <br/>경험이 있으신가요?
                </GuideText>
                {/*워닝 메세지 */}
                {/*감염병 관련 안내문*/}
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
        label="간염 (B형, C형 등)"
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label="에이즈"
        value="option3"
        checked={selectedValue === 'option3'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
                <StyledRadioButton
        label="말라리아"
        value="option4"
        checked={selectedValue === 'option4'}
        onChange={handleChange}
      />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="성병 (임질, 매독 등)"
    value="option5"
    checked={selectedValue === 'option5'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="한센증"
    value="option6"
    checked={selectedValue === 'option6'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="샤가스병"
    value="option8"
    checked={selectedValue === 'option8'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="바베시아증"
    value="option9"
    checked={selectedValue === 'option9'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="변종 크로이츠펠트-야콥병(vCJD)"
    value="option7"
    checked={selectedValue === 'option7'}
    onChange={handleChange}
  />
                </QBtn>
                <QBtn>
  <StyledRadioButton
    label="브루셀라증"
    value="option10"
    checked={selectedValue === 'option10'}
    onChange={handleChange}
  />
                </QBtn>
                <ButtonContainer/>
            </TestrContainer>
        </BaseContainer>
    )
}

export default QPage9;
