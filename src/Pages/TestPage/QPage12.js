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
import { D_Blood } from "./Components/D_Blood";
import { Num } from "./Components/Num";

function QPage12() {
    const [selectedValue, setSelectedValue] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
    };

  const handleChange = (value) => {
    setSelectedValue((prevValue) => (prevValue === value ? '' : value));
  };


    return (
        <BaseContainer>
            <TestrContainer>
            <ProgressBar currentPage={currentPage} />
                <GuideText>
                <p>마지막 헌혈 일자</p>와 당시의 <br/>헌혈 종류를 기입해주세요.
                </GuideText>
                {/*마지막 헌혈 일자 */}
                <D_Blood 
                    isSelected={selectedButton === 1}
                    onClick={() => handleButtonClick(1)}
                >
                    <Num>
                        1
                    </Num>
                    <p>전혈</p>
                </D_Blood>
                <D_Blood 
                    isSelected={selectedButton === 2}
                    onClick={() => handleButtonClick(2)}
                >
                    <Num>
                        2
                    </Num>
                    <p>혈장 성분 헌혈</p>
                </D_Blood>
                <D_Blood 
                    isSelected={selectedButton === 3}
                    onClick={() => handleButtonClick(3)}
                >
                    <Num>
                        3
                    </Num>
                    <p>혈소판 성분 헌혈</p>
                </D_Blood>
                <ButtonContainer/>
            </TestrContainer>
        </BaseContainer>
    )
}

export default QPage12;
