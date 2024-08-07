import { useState } from "react";
import { BaseContainer } from "../../Layout/Container";
import { D_Blood } from "./Components/D_Blood";
import { GuideText } from "./Components/GuideText";
import { TestrContainer } from "./Components/TestContainer";
import { Num } from "./Components/Num";
import ButtonContainer from "./Components/ButtonContainer";

function DonationType() {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
    };

    return (
        <BaseContainer>
            <TestrContainer>
                <GuideText>
                    문진할 <p>헌혈 종류</p>를 <br/>선택해주세요
                </GuideText>
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
                <ButtonContainer />
            </TestrContainer>
        </BaseContainer>
    )
}

export default DonationType;
