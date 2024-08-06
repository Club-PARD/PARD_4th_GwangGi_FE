import { Link } from "react-router-dom";
import { getUserInfo } from "../../API/UserAPI";
import styled from "styled-components";
import { FlexContainer } from "../../Layout/Container"
function HomePage() {
    const BestChallengeInfo = [
        {
            bestChallengeId : 1
        },
        {
            bestChallengeId : 2
        },
        {
            bestChallengeId : 3
        }
    ];
    return (
        <HomePageContainer>
            <InfoBox>
                <InfoTitle>헌혈 가능 여부</InfoTitle>
                <RowBox>
                    <Img src="/Img/HomePage/Niddle.png" alt="주사바늘 이미지" />
                    <SubRowBox>
                        <FirstSentence>자가 문진 결과</FirstSentence>
                        <SecondSentence>아직 문진 내역이 없어요</SecondSentence>
                    </SubRowBox>
                    <TestBox>문진하기</TestBox>
                </RowBox>
            </InfoBox>
            <InfoBox>
                <InfoTitle>헌혈증 등록</InfoTitle>
                <RowBox>
                    <Img src="/Img/HomePage/Card.png" alt="자가문진 테스트 이미지" />
                    <SubRowBox>
                        <FirstSentence>판자를 모아, 생명 다리를 만들어요</FirstSentence>
                        <SecondSentence>등록하고 생명 판자 받기</SecondSentence>
                    </SubRowBox>
                    {/* <TestBox>문진하기</TestBox> */}
                    <RightImg src = "/Img/HomePage/Right.png" alt=  "오른쪽 이미지" width = "9px"/>
                </RowBox>
            </InfoBox>
            <BestChallengeContainer>
                <BestChallengeTitle>이번주 인기 챌린지</BestChallengeTitle>
                <BestChallengeList>
                    {BestChallengeInfo.map((challengeInfo, index) => (
                        <BestChallengeItem key={index}>
                            <FirstRowBox>
                                <FirstColumnBox>
                                    {/* {challengeInfo.bestChallengeId} */}
                                    <BestChallengeInfoTitle>함께 하실 분?</BestChallengeInfoTitle>
                                    <TagBox>
                                        <Tag>50대</Tag>
                                        <Tag>남성</Tag>
                                        <Tag marginRight = "0px">대구</Tag>
                                    </TagBox>
                                </FirstColumnBox>
                                <SecondColumnBox>
                                    <DdayBox>
                                        D-7
                                    </DdayBox>
                                </SecondColumnBox>
                            </FirstRowBox>
                            <SecondRowBox>
                                <PeopleImg src = "/Img/HomePage/people.png"/>
                                <TogetherContent>현재 <TogetherCount>5명</TogetherCount>이 이 챌린지에 동참했어요!</TogetherContent>
                            </SecondRowBox>
                        </BestChallengeItem>
                    ))}
                </BestChallengeList>
            </BestChallengeContainer>
            {/* <Button onClick={getUserInfo}>테스트</Button> */}
            {/* <Link to="/mypage">마이 페이지</Link> */}
        </HomePageContainer>
    )
}

const HomePageContainer = styled(FlexContainer)`
    align-items: center;
`;
const Button = styled.button`
    width: 100px;
    height: 30px;
`;
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
    
`;

const RightImg = styled.img`
    width: 9px;

    margin-left: 37px;
`

const SubRowBox = styled.div`
    display: flex;
    flex-direction: column;

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
    color : #6A6A6A;
`;

const TestBox = styled.button`
    width: 64.57px;
    height: 32.9px;
    border-radius: 7px;
    background-color: #FF7575;

    border : none;

    font-family: 'PretendardVariable';
    font-size: 13px;
    font-weight: 500;
    line-height: 16.9px;
    text-align: center;
    color : #FFFFFF;
`;

const BestChallengeContainer = styled.div`
    width: 100%;
    height : 210px;
    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;
`;

const BestChallengeTitle = styled.p`
    font-family: 'PretendardVariable';
    font-size: 18px;
    font-weight: 600;
    line-height: 23.4px;
    text-align: left;
    padding : 15px 23px;
    color : #000000;
`;

const BestChallengeList = styled.div`
    width: auto;
    height : auto;
    padding-left: 23px;

    display: flex;
    overflow-x: auto;  /* 가로 스크롤 활성화 */
    -webkit-overflow-scrolling: touch;  /* 부드러운 스크롤을 위해 추가 */
`;

const BestChallengeItem = styled.div`
    width: 320px;
    height : 132px;

    box-sizing: border-box;
    background-color: #F9F9F9;  

    border-radius: 25px;
    flex-shrink: 0;  /* 아이템들이 줄어들지 않도록 설정 */
    margin-right: 10px;  /* 아이템들 간의 간격 설정 */

    padding : 25px 30px;

    display: flex;
    flex-direction: column;

`;  

const BestChallengeInfoTitle = styled.p`
    font-family: 'PretendardVariable';
    font-size: 17px;
    font-weight: 500;
    line-height: 20.29px;
    text-align: left;
`;

const FirstRowBox = styled.div`
    width: 100%;
    height : auto;
    display: flex;

    margin-bottom: 15px;
`;

const FirstColumnBox = styled.div`
    flex : 8;
    height: 100%;

`;

const SecondColumnBox = styled.div`
    flex : 2;
    height: 100%;

    display: flex;
    justify-content: center;
`;

const DdayBox = styled.div`
    width : 46px;
    height : 46px;
    border-radius: 23px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'PretendardVariable';
    font-size: 18px;
    font-weight: 700;
    line-height: 21.48px;
    letter-spacing: -0.02em;
    text-align: center;

    background-color: #FF7575;

    color : #FFFFFF;

`;  

const SecondRowBox = styled.div`
    width: 100%;
    height : auto;

    display: flex;
`;

const TogetherContent = styled.p`
    font-family: 'PretendardVariable';
    font-size: 13px;
    font-weight: 500;
    line-height: 16.9px;
    letter-spacing: -0.02em;

    color : #989898;
`;

const TogetherCount = styled(TogetherContent)`
    display: inline;
    color : #FF7575;
`;

const PeopleImg = styled.img`
    width: 15px;
    height : 15px;
    margin-right: 5px;
`

const TagBox = styled.div`
    width: auto;
    margin-top: 10px;
`;

const Tag = styled.div`
    font-family: 'PretendardVariable';
    font-size: 12px;
    font-weight: 500;
    line-height: 15.6px;
    letter-spacing: -0.02em;
    text-align: left;
    display: inline-block;
    background-color: #EAEAEA;
    color : #7D7D7D;

    padding : 3px 10px;
    box-sizing: border-box;
    margin-right: ${props => props.marginRight || "10px"};
    border-radius: 5px;
`;
export default HomePage;