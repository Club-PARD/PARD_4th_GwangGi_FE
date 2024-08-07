import { useEffect, useState } from "react";
import { getSelectedChallengeInfo, postJoinChellenge } from "../../../API/ChallengeAPI";
import { Link, useParams } from "react-router-dom";
import handleChangeGenderWord from "../../../Layout/HandleChange";
import { FlexContainer } from "../../../Layout/Container";
import styled from "styled-components";
import { BestChallengeInfoTitle, DdayBox, FirstColumnBox, FirstRowBox, handleChangeDay, PeopleImg, SecondColumnBox, SecondRowBox, Tag, TagBox, TogetherContent, TogetherCount } from "../../HomePage/Components/ChellengeItem";
function DetailPage() {
    
    const [challengeInfo, setChallengeInfo] = useState({});
    const { challenge_id } = useParams(); // 경로 변수 추출


    useEffect(() => {
        const getData = async () => {
            const response = await getSelectedChallengeInfo(challenge_id);
            // console.log(response); 
            setChallengeInfo(response.response_object);
        };
        getData();
    }, [challenge_id]);

    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };
    
    const handleJoinChallenge = async () => {
        const response = await postJoinChellenge(challenge_id);
    }  
    

    return (
        <FlexContainer>
            <BackContainerComponent text = "목록보기" path = "/list"/>            
            <ChallengeDetailContainer>    
                {/* <p>챌린지 설명 : {challengeInfo.challenge_description}</p>
                <p>챌린지 조직/장소 : {challengeInfo.challenge_org}</p>
                <p>챌린지 성별 : {handleChangeGenderWord(challengeInfo.challenge_gender)}</p>
                <p>챌린지 연령대 : {challengeInfo.challenge_age}대</p>
                <p>{challengeInfo.challenge_start_date}부터</p>
                <p>{challengeInfo.challenge_end_date}까지</p> */}

                <FirstRowBox>
                    <FirstColumnBox>
                        <BestChallengeInfoTitle>{challengeInfo.challenge_name}</BestChallengeInfoTitle>
                        <TagBox>
                            <Tag>{challengeInfo.challenge_age}대</Tag>
                            <Tag>{handleChangeGenderWord(challengeInfo.challenge_gender) || "없음"}</Tag>
                            <Tag $marginRight="0px">{challengeInfo.challenge_org}</Tag>
                        </TagBox>
                    </FirstColumnBox>
                    <SecondColumnBox>
                        <DdayBox>
                            {handleChangeDay(challengeInfo.challenge_end_date)}
                        </DdayBox>
                    </SecondColumnBox>
                </FirstRowBox>

                <ChallengeDescriptionContainer>
                    <ChallengeDescriptionTitle>챌린지 설명</ChallengeDescriptionTitle>
                    <ChallengeDescriptionContent>{challengeInfo.challenge_description || "챌린지 설명 (없음) "}</ChallengeDescriptionContent>
                </ChallengeDescriptionContainer>
                <ChallengeDescriptionContainer>
                    <ChallengeDescriptionTitle>챌린지 기간</ChallengeDescriptionTitle>
                    <ChallengePeriod>
                        {formatDate(challengeInfo.challenge_start_date)} ~ {formatDate(challengeInfo.challenge_end_date)}
                    </ChallengePeriod>
                </ChallengeDescriptionContainer>


                <SecondRowBox>
                    <PeopleImg2 src="/Img/HomePage/people.png"/>
                    <TogetherContentDetail>현재<TogetherCountDetail>{challengeInfo?.user?.length || ""}명</TogetherCountDetail>이 이 챌린지에 동참했어요!</TogetherContentDetail>
                </SecondRowBox>
                
            </ChallengeDetailContainer>
            <JoinButton onClick={handleJoinChallenge}>동참하기</JoinButton>
        </FlexContainer>
    )
}

export const BackContainerComponent = ({text, path}) => {
        return (
            <BackContainer to={path}>
                <BackImg src="/Img/DetailPage/Back.png" alt="뒤로가기" />
                <BackContent>{text}</BackContent>
            </BackContainer>
        );
    }

const BackImg = styled.img`
    width : 7.77px;
    height : 15.7px;
    margin-right: 20px;
`;

const BackContent = styled.p`
    font-family: 'PretendardVariable';
    font-size: 18px;
    font-weight: 600;
    line-height: 21.48px;
    text-align: center;
    color : #C3C3C3;

`;

const BackContainer = styled(Link)`
    display: flex;
    padding: 0px 22px;
    padding-left: 30px;
    text-decoration: none;
    align-items: center;

    &:hover ${BackImg} {
        content: url("/Img/DetailPage/Back2.png");
    }

    &:hover ${BackContent} {
        color: #FF7575;
    }

    margin-bottom: 20px;
`;

const ChallengeDetailContainer = styled.div`
    height : auto;
    margin : 0px 22px;
    box-sizing: border-box;
    background-color: #ffffff;

    padding : 20px 35px;
    border-radius: 25px;

    margin-bottom: 30px;
`;

const TogetherCountDetail = styled(TogetherCount)`
    font-size: 15px;
`;
const TogetherContentDetail = styled(TogetherContent)`
    font-size: 15px;
`;

const ChallengeDescriptionContainer = styled.div`
    margin : 40px 0px;
`;
const ChallengeDescriptionTitle = styled.p`
    font-family: 'PretendardVariable';
    font-size: 12px;
    font-weight: 600;
    line-height: 14.32px;
    letter-spacing: -0.02em;
    text-align: left;
    color : #7B7B7B;

    margin-bottom: 10px;
`;

const ChallengeDescriptionContent = styled.p`
    font-family: 'PretendardVariable';
    font-size: 14px;
    font-weight: 300;
    line-height: 16.71px;
    letter-spacing: -0.02em;
    text-align: left;
    color : #000000;

    background-color: #F9F9F9;
    padding : 30px 10px;
    border-radius: 15px;

`;

const ChallengePeriod = styled.p`
    font-family: 'PretendardVariable';
    font-size: 14px;
    font-weight: 300;
    line-height: 16.71px;
    letter-spacing: -0.02em;
    text-align: left;
    color : #000000;
`;

export const JoinButton = styled.button`
    border : none;
    margin : 0px 22px;
    background-color: #FF7575;
    height : 60px;
    border-radius: 100px;

    font-family: 'Pretendard Variabl';
    font-size: 18px;
    font-weight: 500;
    line-height: 21.48px;
    text-align: center;
    color : #ffffff;

    margin-bottom: 20px;

    &:hover{
        background-color: #ffffff;
        border : 2px solid #E7E7E7;
        color : #000000;
    }

`;

const PeopleImg2 = styled(PeopleImg)`
    width : 18px;
    height : 18px;
`
export default DetailPage;