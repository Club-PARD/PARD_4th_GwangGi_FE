import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function InfoBoxComponent({ navigate, ableTo }) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}.${month}.${day}`;
    return (    
        <div>
            <InfoBox>
                <InfoTitle>헌혈 가능 여부</InfoTitle>
                {console.log("what", ableTo)}
                {ableTo === null
                    ? 
                        <RowBox>
                            <Img src="/Img/HomePage/Niddle.png" alt="주사바늘 이미지" />
                            <SubRowBox>
                                <FirstSentence>자가 문진 결과</FirstSentence>
                                <SecondSentence>아직 문진 내역이 없어요</SecondSentence>
                            </SubRowBox>
                            <TestBox to = "/test_alert">문진하기</TestBox>
                        </RowBox>
                    : ableTo <= 0
                        ? 
                            <RowBox>
                                <Img src="/Img/HomePage/Blood_true.png" alt="주사바늘 이미지" />
                                <SubRowBox ableTo = {true}>
                                    <FirstSentence>자가 문진 결과</FirstSentence>
                                    <SecondSentence $color = "#FF7575">헌혈 적합 상태</SecondSentence>
                                </SubRowBox>
                                <TodayDate>{formattedDate}기준</TodayDate>
                            </RowBox>
                        : 
                            <RowBox>
                                <Img src="/Img/HomePage/Blood_false.png" alt="주사바늘 이미지" />
                                <SubRowBox ableTo = {true}>
                                    <FirstSentence>자가 문진 결과</FirstSentence>
                                    <SecondSentence>헌혈 부적합 상태</SecondSentence>
                                </SubRowBox>
                                <TodayDate onClick = {() => navigate("/test_fail")}>자세히 보기</TodayDate>
                            </RowBox>
                }
                
            </InfoBox>
            <InfoBox>
                <InfoTitle>헌혈 기록</InfoTitle>
                <RowBox>
                    <Img src="/Img/HomePage/Card.png" alt="자가문진 테스트 이미지" />
                    <SubRowBox>
                        <FirstSentence>헌혈내용 기록과 공유로 동기부여 하기!</FirstSentence>
                        <SecondSentence>기록하고 팀원들과 공유하기 </SecondSentence>
                    </SubRowBox>
                    {/* <TestBox>문진하기</TestBox> */}
                    <RightImg src="/Img/HomePage/Right.png" alt="오른쪽 이미지" width="9px" onClick={() => navigate("/share") } />
                </RowBox>
            </InfoBox>
        </div>
    );
}

export default InfoBoxComponent;

const InfoBox = styled.div`
    width: 346px;
    height : 154.49px;
    border-radius: 25px;
    box-shadow: 0px 0px 5px 0px #00000017;
    background-color : #FFFFFF;
    
    padding : 27px 23px;
    box-sizing: border-box;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const InfoTitle = styled.p`
    font-family: 'PretendardVariable';
    font-size: 22px;
    font-weight: 600;
    line-height: 28.6px;
    letter-spacing: -0.01em;
`;

const RowBox = styled.div`
    display: flex;
    width: 100%;
    height : auto;

    align-items: center;
    justify-content: space-between;
`;

const Img = styled.img`
    width: 38px;
    margin-right: 15px;
    box-sizing: border-box;
    
`;

const RightImg = styled.img`
    width: 9px;

    margin-left: 37px;

    &:hover{
        opacity: 0.5;
    }
`

const SubRowBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: ${({ ableTo }) => (ableTo ? '40px' : '0px')};
`;
const FirstSentence = styled.p`
    font-family: 'PretendardVariable';
    font-size: 13px;
    font-weight: 500;
    line-height: 16.9px;
    text-align: left;
    margin-bottom: 5px;
    color : #8C959C;

`;

const SecondSentence = styled.p`
    font-family: 'PretendardVariable';
    font-size: 17px;
    font-weight: 600;
    line-height: 22.1px;
    text-align: left;
    color : ${props => props.$color || "#6A6A6A"};
`;

const TestBox = styled(Link)`
    width: 64.57px;
    height: 32.9px;
    border-radius: 7px;
    background-color: #FF7575;

    border : none;

    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'PretendardVariable';
    font-size: 13px;
    font-weight: 500;
    line-height: 16.9px;
    text-align: center;
    color : #FFFFFF;

    &:hover{
        opacity: 0.8;
    }
`;

const TodayDate = styled.p`
    font-family: 'PretendardVariable';
    font-size: 12px;
    font-weight: 500;
    line-height: 15.6px;
    letter-spacing: -0.02em;
    text-align: center;
    color : #888888;
    margin-right: 10px;
    box-sizing: border-box;
    text-decoration: underline; 
`;