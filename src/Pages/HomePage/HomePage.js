import styled from "styled-components";
import { FlexContainer } from "../../Layout/Container"
import InfoBoxComponent from "./Components/InfoBoxComponent";
import BestChallengComponent from "./Components/BestChallengComponent";
import { useEffect, useState } from "react";
import { getAllChallengeInfo } from "../../API/ChallengeAPI";

function HomePage() {
    const [BestChallengeInfo, setBestChallengeInfo] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const response = await getAllChallengeInfo(false);
            // console.log(response.response_object); 
            setBestChallengeInfo(response.response_object);
        };

        getData();
    }, []);
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