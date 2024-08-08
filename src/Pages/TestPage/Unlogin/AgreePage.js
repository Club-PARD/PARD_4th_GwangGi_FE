import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { BaseContainer } from "../../../Layout/Container";
import { GuideText } from "../Components/GuideText";
import { TestrContainer } from "../Components/TestContainer";
import { QBtn } from "../Components/QBtn";
import StyledRadioButton from "../Components/StyledRadioButton";
import { SubmitBtn } from "../../RegisterPage/Components/SubmitBtn";

function AgreePage() {
    const [selectedValue, setSelectedValue] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedButton, setSelectedButton] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const { responseData } = location.state || {};

    const handleSubmit = () => {
        if (responseData && responseData.response_object && responseData.response_object.eligibility === false) {
            navigate('/t_fail', { state: { responseData } });
        } else if (responseData && responseData.response_object && responseData.response_object.eligibility === true) {
            navigate('/t_success', { state: { responseData } });
        }
    };

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
                <Warning>
                    「혈액관리법」제4조의4제4항에 따라 헌혈에 관한<br/>
                    유의사항을 설명 받았으며 다음 사항에 동의합니다.
                </Warning>
                <Line />
                <NoticeContainer>
                    <p>나는 생명을 살리고자 하는 고귀한 뜻에 동<br/>참하여 자발적으로 헌혈하는데 동의합니다.</p>
                    <Line2 />
                    <p>나는 문진사항과 헌혈관련증상에 대해 읽고<br/>충분히 이해하였으며, 모든 질문에 정직하게<br/>답하였습니다.</p>
                    <Line2 />
                    <p>나는 수혈받는 환자를 보호하기 위하여 필요<br/>한 검사를 시행하고, 그 결과를 포함하여 과<br/>거의 헌혈 경력, 검사 결과 및 세부사항(헌혈<br/>부적격 관련 정보 등)을 관리, 전산 조회하는<br/>것에 동의합니다.</p>
                    <Line2 />
                    <p>만약 나의 혈액이 수혈에 부적합한 것으로<br/>판정되면, 채혈금지대상자로 등록될 수 있음<br/>에 동의하며 이로 인한 어떠한 불이익도 없<br/>다는 점을 이해합니다.</p>
                    <Line2 />
                    <p>내가 헌혈한 혈액(검체 등 포함)이 최소 10<br/>년간 보관되어야 한다는 사실에 동의하며,<br/>아래와 같은 목적으로 사용될 수 있다는 사<br/>실에 동의합니다. 의학적 연구, 의약품·의료<br/>기기 개발, 혈액관리에 필요한 품질관리 및<br/>시약평가, 수혈부작용 원인규명, 헌혈경력이<br/>있는 군 장병 및 해양경찰청과 그 소속기관<br/>근무자 유해 신원확인, 6.25 전사자 신원확<br/>인 및 유가족 찾기를 위한 DNA 시료 채취</p>
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
                <SubmitBtn onClick={handleSubmit}>결과보기</SubmitBtn>
            </TestrContainer>
        </BaseContainer>
    );
}

export default AgreePage;

const Line = styled.hr`
  width: 345px;
  border: 0;
  border-top: 1.5px solid #979797;
  margin-top: 14px;
`;

const Line2 = styled.hr`
  width: 345px;
  border: 0;
  border-top: 1.5px solid #EFEFEF;
`;

const Warning = styled.div`
    color: #C15656;
font-family: "Pretendard Variable";
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: 130%; /* 19.5px */
margin-top: 15px;
`

const NoticeContainer = styled.div`
  width: 345px;
  height: 396.88px;  // 필요한 높이로 설정
  border: 1px solid #ccc;
  margin-bottom: 18.88px;
  border: none;
  overflow-y: scroll;  // 세로 스크롤 추가

  color: #989898;
font-family: "Pretendard Variable";
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 120%; /* 21.6px */

p{
    margin-left: 24px;
    margin-top: 14px;
    margin-bottom: 14px;
}
`;
