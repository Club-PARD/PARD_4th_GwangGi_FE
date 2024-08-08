import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseContainer } from "../../../Layout/Container";
import { TestrContainer } from "../Components/TestContainer";
import { SubmitBtn } from "../../RegisterPage/Components/SubmitBtn";
import styled from 'styled-components';

function AlertPage() {
    const [selectedValue, setSelectedValue] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedButton, setSelectedButton] = useState(null);
    const navigate = useNavigate();

    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
    };

    const handleChange = (value) => {
        setSelectedValue((prevValue) => (prevValue === value ? '' : value));
    };

    const handleSubmit = () => {
        navigate('/t_start');
    };

    return (
        <BaseContainer>
            <TestrContainer>
                <GuideText>
                    헌혈 자가 문진 <br/><p>동의서</p>
                </GuideText>
                <Warning>
                ※ 헌혈자와 수혈자의 건강을 보호하기 위해<br/>
                반드시 필요한 문진사항들입니다.
                </Warning>
                <Line />
                <NoticeContainer>
                    <p>헌혈자의 부정확한 정보제공 및 답변이 수혈<br/>자에게 나쁜 영향을 미칠 수 있으므로, 반드<br/>시 정직하고 성실하게 답변해 주시길 바랍니<br/>다.</p>
                    <Line2 />
                    <p>혈액관리법 제4조의4 제2항에 따라 헌혈<br/>자는 안전한 혈액의 채혈 및 공급을 위하여<br/>신상 및 병력에 대한 정보를 사실대로 성실<br/>하게 제공하여야 합니다.</p>
                    <Line2 />
                    <p>후천성면역결핍증(에이즈) 검사를 목적으로<br/>한 헌혈은 엄격히 금지되어 있으며, 혈액관<br/>리법 시행규칙 제8조제4항에 의해 후천성<br/>면역결핍증 검사결과는 통보되지 않습니다.</p>
                    <Line2 />
                    <p>혈액관리법 시행령 제10조의2에 따라 헌혈<br/>자의 민감정보 및 고유식별정보(주민등록번<br/>호 등)의 처리가 가능하며, 혈액관리업무 이<br/>외의 다른 목적에 사용 또는 공개되지 않습<br/>니다.</p>
                </NoticeContainer>
                <SubmitBtn onClick={handleSubmit}>확인 하였습니다</SubmitBtn>
            </TestrContainer>
        </BaseContainer>
    );
}

export default AlertPage;

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
font-size: 13px;
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
  //padding-top: 25.17px;

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

const GuideText = styled.div`
  margin-top: 77px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 32.5px */

  p {
    color: #FF7575;
    display: inline;
  }
`;