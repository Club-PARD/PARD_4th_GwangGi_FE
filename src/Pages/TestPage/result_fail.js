import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from "react-router-dom";
import { BaseContainer } from "../../Layout/Container";
import { SubmitBtn } from "../RegisterPage/Components/SubmitBtn";
import { getUserAbleTo } from '../../API/UserAPI';

function Result_fail() {
    const [selectedValue, setSelectedValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { responseData } = location.state || {};

    const handleSubmit = () => {
        navigate('/home');
    };

    const handleChange = (value) => {
        setSelectedValue((prevValue) => (prevValue === value ? '' : value));
    };

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // getMonth() returns 0-indexed month
        const day = date.getDate();
        return `${year}년 ${month}월 ${day}일`;
    };

    const formatBloodTypeReason = (reason) => {
        if (!reason) return null;
        const midpoint = Math.ceil(reason.length / 2);
        return [reason.slice(0, midpoint), reason.slice(midpoint)];
    };

    const bloodTypeReason = formatBloodTypeReason(responseData?.response_object?.reason?.blood_type_reason);
    const dueDate = responseData?.response_object?.reason?.due_date;

    const reasons = [
        { key: 'reason1', label: '오늘 아래와 같은 경험을 하셨기 때문에 헌혈할 수 없습니다.' },
        { key: 'reason2', label: '아래와 같은 경험을 해당 기간 안에 하신 분 중 일부는 일정기간 동안 헌혈할 수 없습니다.' },
        { key: 'reason3', label: '아래와 같은 경험을 해당 기간 안에 하신 분 중 일부는 일정기간 동안 헌혈할 수 없습니다.' },
        { key: 'reason4', label: '아래와 같은 경험을 해당 기간 안에 하신 분 중 일부는 일정기간 동안 헌혈할 수 없습니다.' },
        { key: 'reason5', label: '아래와 같은 경험을 해당 기간 안에 하신 분 중 일부는 일정기간 동안 헌혈할 수 없습니다.' },
        { key: 'reason6', label: '아래와 같은 경험을 해당 기간 안에 하신 분 중 일부는 일정기간 동안 헌혈할 수 없습니다.' },
        { key: 'reason7', label: '아래와 같은 경험을 해당 기간 안에 하신 분 중 일부는 일정기간 동안 헌혈할 수 없습니다.' },
        { key: 'reason8', label: '헌혈관련 안내문을 참조하시어 아래 사항 중 선택해 주십시오.' },
        { key: 'reason9', label: '헌혈관련 안내문을 참조하시어 아래 사항 중 선택해 주십시오.' },
        { key: 'reason10', label: '헌혈관련 안내문을 참조하시어 아래 사항 중 선택해 주십시오.' },
        { key: 'reason11', label: '헌혈관련 안내문을 참조하시어 아래 사항 중 선택해 주십시오.' },
    ];

    const nonNullReasons = reasons.filter(reason => responseData?.response_object?.reason[reason.key]);
    
    const [ableTo, setAbleTo] = useState(); 
    useEffect(() => {
        const fetchData2 = async () => {
            const response = await getUserAbleTo();
            // console.log(response);
            if (response?.response_object === null || response?.response_object === undefined) {
                // alert("헌혈 내역이 없습니다.");
                console.log("헌혈 내역이 없습니다.");
                setAbleTo(null);
            } else if (response === 500) {
                alert("[에러] 관리자에게 문의하세요 (서버 500) / getUserAbleTo")
            } else {
                // console.log(response.response_object.dueDate);
                setAbleTo(response.response_object.dueDate);
            }
        }
        fetchData2();
    }, []);


    return (
        <BaseContainer>
            <CenteredContainer>
                <Name>
                    전자문진 결과
                </Name>
                <Result>
                    <p>헌혈 부적합</p> 대상입니다
                </Result>
                <Img src="/Img/TestPage/fail.png" alt="실패 스티커" />
                <Img2 src="/Img/TestPage/실패말풍선.png" alt="실패 말풍선" />
                <ModalBtn onClick={handleModalToggle}>
                    부적합 사유 보기
                </ModalBtn>
                <SubmitBtn onClick={handleSubmit}>
                    메인으로
                </SubmitBtn>
            </CenteredContainer>
            {isModalOpen && (
                <ModalBackdrop onClick={handleModalToggle}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={handleModalToggle}>
                            <img src="/Img/TestPage/DeleteBtn.png" alt="삭제 버튼" />
                        </CloseButton>
                        <Result2>
                            <p>헌혈 부적합 사유</p>가 되는<br />
                            답변들이에요.
                        </Result2>
                        <Line />
                        <ScrollContainer>
                            <R_Date>
                                작성자님의 <p>마지막 헌혈 날짜</p>로부터<br /> 가능한 날짜까지 남은 시간들이 존재합니다.
                            </R_Date>
                            <TextContent>
                                {bloodTypeReason && (
                                    <BloodTypeReason>
                                        <p>{bloodTypeReason[0]}</p>
                                        <p>{bloodTypeReason[1]}</p>
                                    </BloodTypeReason>
                                )}
                                {dueDate ? (
                                    <DueDate>
                                        <HighlightedText>{dueDate}</HighlightedText><p>일 후</p>에 헌혈을 할 수 있습니다.
                                    </DueDate>
                                ) : (
                                    <DueDate>
                                        <HighlightedText>{ableTo}</HighlightedText><p>일 후</p>에 헌혈을 할 수 있습니다.
                                    </DueDate>
                                )
                              }
                                
                                <Line2 />
                                {nonNullReasons.map((reason, index) => (
                                    <React.Fragment key={reason.key}>
                                        {index > 0 && <Line2 />}
                                        {reason.label && <ReasonLabel>{reason.label}</ReasonLabel>}
                                        <ReasonBox>
                                            <DisabledRadioButton />
                                            <ReasonText>
                                                <p>{responseData.response_object.reason[reason.key]}</p>
                                            </ReasonText>
                                        </ReasonBox>
                                    </React.Fragment>
                                ))}
                            </TextContent>
                        </ScrollContainer>
                    </ModalContent>
                </ModalBackdrop>
            )}
        </BaseContainer>
    );
}

export default Result_fail;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  text-align: center; /* 추가: 텍스트 중앙 정렬 */
`;

const Img = styled.img`
  width: 143.428px;
  height: 143.107px;
  flex-shrink: 0;
  margin-bottom: 20px;
`;

const Img2 = styled.img`
  width: auto;
  height: 64.407px;
  flex-shrink: 0;
  margin-bottom: 20px;
`;

const Name = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 10px;
`;

const Result = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;

  p {
    color: #929292;
    display: inline;
  }
`;

const Result2 = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 45px;
  margin-left: 18px;
  margin-bottom: 20px;

  p {
    color: #929292;
    display: inline;
  }
`;

const Line = styled.div`
  width: 306px;
  height: 2px;
  flex-shrink: 0;
  background-color: #EDEDED;
  margin-left: 18px;
`;

const Line2 = styled.div`
  width: 306px;
  height: 2px;
  flex-shrink: 0;
  background-color: #EDEDED;
  margin-top: 23px;
  margin-bottom: 23px;
`;

const ModalBtn = styled.button`
  width: 116.655px;
  height: 41.024px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid #D8D8D8;
  background: #FFF;

  color: #989898;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 16.9px */

  margin-bottom: 91px;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 341px;
  height: 527px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  position: relative;
`;

const ScrollContainer = styled.div`
  width: 310px;
  height: 336px;
  flex-shrink: 0;
  overflow-y: auto;
  margin-top: 42px;
  margin-left: 17px;
  border-radius: 10px;
  background: #fff;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 19px;
  right: 21px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 14.681px;
    height: 16px;
    flex-shrink: 0;
  }
`;

const TextContent = styled.div`
  p {
    margin-bottom: 5px; /* 간격을 줄임 */
    font-family: "Pretendard Variable";
    font-size: 14px;
    color: #000;
    line-height: 1.2; /* 줄 간격을 줄임 */
  }
`;

const R_Date = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  margin-bottom: 30px;

p {
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.28px;
  display: inline;
}
`;

const DueDate = styled.div`
  margin-top: 10px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  p {
    color: #FF7575; /* 텍스트 색상을 변경 */
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    display: inline;
  }
`;

const BloodTypeReason = styled.div`
p{
  color: #A1A1A1;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 80%; /* 22.4px */
  letter-spacing: -0.28px;
  margin-bottom: 5px; /* 추가: 간격을 줄임 */
}
`;

const HighlightedText = styled.span`
  color: #FF7575; /* 텍스트 색상을 변경 */
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  display: inline;
`;

const ReasonLabel = styled.p`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ReasonBox = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #FF7575;
  border-radius: 8px;
  background-color: #fff;
  padding: 18.43px;
`;

const DisabledRadioButton = styled.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border: 2px solid #FF7575;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
  &:after {
    content: '';
    width: 8px;
    height: 8px;
    background: #FF7575;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ReasonText = styled.div`
  flex-grow: 1; /* 텍스트 부분이 남은 공간을 차지하도록 설정 */
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;

  p {
    margin: 0; /* 텍스트 간격을 조절 */
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }
`;
