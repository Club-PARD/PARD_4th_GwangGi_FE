import styled from "styled-components";
import handleChangeGenderWord from "../../../Layout/HandleChange";
import { Link } from "react-router-dom";
import { getSelectedChallengeInfo } from "../../../API/ChallengeAPI";
import { formatDate } from "../../Community/DetailPage/DetailPage";
import { BestChallengeInfoTitle, BestChallengeItem, DdayBox, FirstColumnBox, FirstRowBox, handleChangeDay, PeopleImg, SecondColumnBox, SecondRowBox, Tag, TagBox, TogetherContent, TogetherCount } from "./ChellengeItemCP";

function ChallengeItem({ version, navigate, challengeInfo, index, width, marginRight, marginBottom, backgroundColor}) {

    const handleCheckJoined = () => {
        const getData = async () => {
            const response = await getSelectedChallengeInfo(challengeInfo.challenge_id);
            if (response?.response_object?.challenge_user_joined === true) {
                navigate("/show/" + challengeInfo.challenge_id);
            } else {
                navigate("/detail/" + challengeInfo.challenge_id);
            }
        };
        getData();
    }
// to={"/detail/" + challengeInfo.challenge_id} 
    return (
        <BestChallengeItem key={index} width={width} $marginRight={marginRight} $marginBottom={marginBottom} $backgroundColor={backgroundColor} onClick={handleCheckJoined}>
            <FirstRowBox>
                <FirstColumnBox>
                    {/* {challengeInfo.bestChallengeId} */}
                    <BestChallengeInfoTitle>{challengeInfo.challenge_name}</BestChallengeInfoTitle>
                    <TagBox>
                        <Tag>{challengeInfo.challenge_age}대</Tag>
                        <Tag>{handleChangeGenderWord(challengeInfo.challenge_gender)}</Tag>
                        <Tag $marginRight="0px">{challengeInfo.challenge_org}</Tag>
                    </TagBox>
                </FirstColumnBox>
                <SecondColumnBox>
                    <DdayBox challengeEndDate={challengeInfo.challenge_end_date}>
                        {handleChangeDay(challengeInfo.challenge_end_date)}
                    </DdayBox>
                </SecondColumnBox>
            </FirstRowBox>
            {
                version === false
                    ? 
                        <SecondRowBox flexDirection = "column">
                            <Period>챌린지 기간</Period>
                            <PeriodData>
                                {formatDate(challengeInfo.challenge_start_date)} ~ {formatDate(challengeInfo.challenge_end_date)}
                            </PeriodData>
                        </SecondRowBox>
                    : 
                        <SecondRowBox>
                            <PeopleImg src="/Img/HomePage/people.png"/>
                            {console.log(challengeInfo)}
                            <TogetherContent>현재
                                <TogetherCount>{challengeInfo.user_count || "N"}명</TogetherCount>이 이 챌린지에 동참했어요!</TogetherContent>
                        </SecondRowBox>
            }
            
        </BestChallengeItem>
    );
}


const Period = styled.p`
    font-family: 'PretendardVariable';
    font-size: 12px;
    font-weight: 600;
    line-height: 14.32px;
    letter-spacing: -0.02em;
    text-align: left;

    margin-bottom: 5px;

    color : #7B7B7B;
`;

const PeriodData = styled.p`
    font-family: 'PretendardVariable';
    font-size: 14px;
    font-weight: 300;
    line-height: 16.71px;
    letter-spacing: -0.02em;
    text-align: left;

`;

export default ChallengeItem;