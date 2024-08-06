import styled from "styled-components";
import { FlexContainer } from "../../Layout/Container"
import InfoBoxComponent from "./Components/InfoBoxComponent";
import BestChallengComponent from "./Components/BestChallengComponent";
import { useState } from "react";
import MockUpBestChallengeInfo from "./Components/MockupData";

function HomePage() {
    const [BestChallengeInfo, setBestChallengeInfo] =  useState(MockUpBestChallengeInfo || []);
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