import styled from "styled-components";

function BestChallengComponent({BestChallengeInfo}) {
    const handleChangeGender = (gender) => {
        if (gender == 0)
            return "남자"
        else if (gender == 1)
            return "여자"
        else if (gender == 2)
            return "남녀"
    }
    const handleChangeDay = (date) => {
        const today = new Date();
        const challengeDate = new Date(date);
        
        // 시간 차이를 일 단위로 계산
        const timeDiff = challengeDate.getTime() - today.getTime();
        const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        if (dayDiff === 0) {
            return "오늘";
        } else if (dayDiff > 0) {
            return `D-${dayDiff}`;
        } else {
            return `D+${Math.abs(dayDiff)}`;
        }
    }
    return (
        <BestChallengeContainer>
            <BestChallengeTitle>이번주 인기 챌린지</BestChallengeTitle>
            <BestChallengeList>
                {
                    BestChallengeInfo.map((challengeInfo, index) => (
                        <BestChallengeItem key={index}>
                            <FirstRowBox>
                                <FirstColumnBox>
                                    {/* {challengeInfo.bestChallengeId} */}
                                    <BestChallengeInfoTitle>{challengeInfo.bestChallengeTitle}</BestChallengeInfoTitle>
                                    <TagBox>
                                        <Tag>{challengeInfo.bestChallengeAge}대</Tag>
                                        <Tag>{handleChangeGender(challengeInfo.bestChallengeGender)}</Tag>
                                        <Tag marginRight="0px">{challengeInfo.bestChallengeOrg}</Tag>
                                    </TagBox>
                                </FirstColumnBox>
                                <SecondColumnBox>
                                    <DdayBox>
                                        {handleChangeDay(challengeInfo.bestChallengeDate)}
                                    </DdayBox>
                                </SecondColumnBox>
                            </FirstRowBox>
                            <SecondRowBox>
                                <PeopleImg src="/Img/HomePage/people.png"/>
                                <TogetherContent>현재
                                    <TogetherCount>{challengeInfo.bestChallengePeopleCount}명</TogetherCount>이 이 챌린지에 동참했어요!</TogetherContent>
                            </SecondRowBox>
                        </BestChallengeItem>
                    ))
                }
            </BestChallengeList>
        </BestChallengeContainer>
    );
}
export default BestChallengComponent;

const BestChallengeContainer = styled.div`
    width: 100%;
    height : auto;
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
    height: auto;
    padding-left: 23px;
    padding-bottom: 10px; // 하단에 약간의 패딩 추가

    display: flex;
    overflow-x: auto;  /* 가로 스크롤 활성화 */
    overflow-y: hidden; /* 세로 스크롤 비활성화 */
    -webkit-overflow-scrolling: touch;  /* 부드러운 스크롤을 위해 추가 */

    /* 스크롤바 숨기기 */
    scrollbar-width: none;  /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    &::-webkit-scrollbar {  /* WebKit */
        display: none;
    }

    /* 스크롤 스냅 추가 */
    scroll-snap-type: x mandatory;
    scroll-padding: 0 23px;
`;

const BestChallengeItem = styled.div`
    width: 320px; 
    height : auto;

    box-sizing: border-box;
    background-color: #F9F9F9;  

    border-radius: 25px;
    flex-shrink: 0;  /* 아이템들이 줄어들지 않도록 설정 */
    margin-right: 10px;  /* 아이템들 간의 간격 설정 */

    padding : 25px 30px;

    display: flex;
    flex-direction: column;

    scroll-snap-align: start;

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
    margin-left: 3px;
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
    margin-bottom: 5px; // 아래쪽 마진 추가
    border-radius: 5px;
    
    // 줄바꿈 시 간격을 위한 속성 추가
    vertical-align: top;
    line-height: 1.5; // 줄 간격 조정
`;