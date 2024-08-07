import { useState } from "react";
import { BaseContainer } from "../../Layout/Container";
import { GuideText } from "./Components/GuideText";
import { TestrContainer } from "./Components/TestContainer";
import { QBtn } from "./Components/QBtn";
import StyledRadioButton from "./Components/StyledRadioButton";
import { SubmitBtn } from "../RegisterPage/Components/SubmitBtn";
import styled from 'styled-components';

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
                <GuideText>
                    헌혈 자가 문진 <br/><p>동의서</p>
                </GuideText>
                <Line />
                <NoticeContainer>
                    <p>주의사항 1: ...</p>
                    <p>주의사항 2: ...</p>
                    <p>주의사항 3: ...</p>
                    <p>주의사항 4: ...</p>
                    <p>주의사항 5: ...</p>
                    {/* 더 많은 주의사항 추가 */}
                </NoticeContainer>
                <QBtn>
                    <StyledRadioButton
                        label="동의합니다."
                        value="option1"
                        checked={selectedValue === 'option1'}
                        onChange={handleChange}
                    />
                </QBtn>
                <SubmitBtn>다음으로</SubmitBtn>
            </TestrContainer>
        </BaseContainer>
    );
}

export default QPage12;

const Line = styled.hr`
  width: 345px;
  border: 0;
  border-top: 1.5px solid #979797;
  margin-top: 14px;
  margin-bottom: 18.88px;
`;

const NoticeContainer = styled.div`
  width: 345px;
  height: 39px;  // 필요한 높이로 설정
  border: 1px solid #ccc;
  margin-bottom: 18.88px;
  padding: 10px;
  overflow-y: scroll;  // 세로 스크롤 추가
`;
