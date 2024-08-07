import styled from "styled-components";
import { Link } from "react-router-dom";
import ChallengeItem from "./ChellengeItem";

function BestChallengComponent({ BestChallengeInfo, navigate }) {
    return (
        <BestChallengeContainer>
            <BestChallengeTitle>이번주 인기 챌린지</BestChallengeTitle>
            <BestChallengeList>
                {
                    BestChallengeInfo.map((challengeInfo, index) => (
                        <ChallengeItem navigate={navigate} challengeInfo={challengeInfo} key ={index} marginRight="22px" />
                    ))
                }
            </BestChallengeList>
        </BestChallengeContainer>
    );
}
export default BestChallengComponent;

const BestChallengeContainer = styled(Link)`
    width: 100%;
    height : auto;
    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;
    text-decoration: none;
    color : #000000;
`;

const BestChallengeTitle = styled.p`
    font-family: 'PretendardVariable';
    font-size: 18px;
    font-weight: 600;
    line-height: 23.4px;
    text-align: left;
    padding : 15px 22px;
    color : #000000;
`;

const BestChallengeList = styled.div`
    width: auto;
    height: auto;
    padding-left: 22px;
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
