import styled from "styled-components";
import { FlexContainer } from "../../Layout/Container"
import InfoBoxComponent from "./Components/InfoBoxComponent";
import BestChallengComponent from "./Components/BestChallengComponent";
function HomePage() {
    const BestChallengeInfo = [
        {
            bestChallengeId: 1,
            bestChallengeTitle: "함께 하실 분?",
            bestChallengeAge: 50,
            bestChallengeGender: 0,
            bestChallengeOrg: "대구",
            bestChallengeDate: "2024-08-01",
            bestChallengePeopleCount : 5
        },
        {
            bestChallengeId: 2,
            bestChallengeTitle: "여고생 모여라",
            bestChallengeAge: 10,
            bestChallengeGender: 1,
            bestChallengeOrg: "포항",
            bestChallengeDate : "2024-08-12",
            bestChallengePeopleCount : 8
        },
        {
            bestChallengeId: 3,
            bestChallengeTitle: "신혼 부부 환영",
            bestChallengeAge: 30,
            bestChallengeGender: 2,
            bestChallengeOrg: "서울 동작구 헌혈의 집",
            bestChallengeDate : "2024-08-06",
            bestChallengePeopleCount : 10
        }
    ];
    return (
        <HomePageContainer>
            <InfoBoxComponent/>
            <BestChallengComponent BestChallengeInfo={BestChallengeInfo} />
            {/* <Button onClick={getUserInfo}>테스트</Button> */}
            {/* <Link to="/mypage">마이 페이지</Link> */}
        </HomePageContainer>
    )
}

const HomePageContainer = styled(FlexContainer)`
    align-items: center;
`;
export default HomePage;