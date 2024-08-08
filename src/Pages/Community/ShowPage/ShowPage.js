import { useEffect, useState } from "react";
import { getSelectedChallengeInfo } from "../../../API/ChallengeAPI";
import { useNavigate, useParams } from "react-router-dom";
import { FlexContainer } from "../../../Layout/Container";
import { BackContainerComponent, formatDate } from "../DetailPage/DetailPage";
import ChallengeItem, { BestChallengeItem } from "../../HomePage/Components/ChellengeItem";
import { ChallengeInfoContainer, CreateImg } from "../ListPage/ListPage";
import styled from "styled-components";

function ShowPage() {
    const [challengeInfo, setChallengeInfo] = useState({});
    const [totalDonations, setTotalDonations] = useState(0);
    const { challenge_id } = useParams(); // 경로 변수 추출
    const navigate = useNavigate();
    
    useEffect(() => {
        const getData = async () => {
            const response = await getSelectedChallengeInfo(challenge_id);
            console.log(response.response_object); 
            setChallengeInfo(response.response_object);
            calculateTotalDonations(response.response_object.user);
        };
        getData();
    }, [challenge_id]);

    const calculateTotalDonations = (users) => {
        let total = 0;
        users.forEach(user => {
            total += user.blood_donation_list.length;
        });
        setTotalDonations(total);
    };


    const typeOptions = [
        { value: 0, label: '전혈' },
        { value: 1, label: '혈장 성분 헌혈' },
        { value: 2, label: '혈소판 성분 헌혈' },
    ];

    
        
    return (
        <ShowPageContainer>
            <HeaderBackPage>
                <BackImg src="/Img/DetailPage/Back.png" alt="뒤로가기" onClick={() => navigate("/list")}/>
                <Title>챌린지 그룹 <PeopleCount>{challengeInfo?.user?.length}</PeopleCount></Title>
            </HeaderBackPage>
            
            <ChallengeItemContainer>
                <ChallengeItem navigate={navigate} challengeInfo={challengeInfo} width={"100%"} marginBottom={"20px"} backgroundColor="#ffffff" version={false} />
            </ChallengeItemContainer>

            <ChallengUserInfoContainer>
                <ChallengeUserInfoTitle>그룹 구성원</ChallengeUserInfoTitle>
                <ChellengeUsersInfo>
                    {challengeInfo?.user?.map((bloodInfo, index) => (
                    <UserBloodInfoContainer key = {index}>    
                        <BloodImage 
                            src={getBloodTypeImage(bloodInfo.blood_type)} 
                            alt={`${bloodInfo.blood_type} 혈액형`}
                        />
                        <UserName>{bloodInfo.name}</UserName>
                    </UserBloodInfoContainer>
                    ))
                    }
                </ChellengeUsersInfo>
            </ChallengUserInfoContainer>
            <ChallengUserInfoContainer>
                <ChallengeUserInfoTitle>우리 그룹의 챌린지 현황</ChallengeUserInfoTitle>
                {totalDonations === 0
                    ?
                        <ChellengeBloodListCotainer>
                            <EmptyBloodList>아직 작성된 기록이 없어요<br />멤버들에게 현황을 공유해볼까요?</EmptyBloodList>
                        </ChellengeBloodListCotainer>
                    :
                        challengeInfo?.user?.map((userData, index1) => (
                            <div key={index1}>
                                {
                                    userData?.blood_donation_list.map((donationData, index2) => (
                                        <ChellengeBloodListCotainer key={index2}>
                                            {/* <p>
                                                {donationData.donation_user_name}님
                                            </p> */}
                                            <FirstRow>
                                                <ColumnBox>
                                                    <BloodImage 
                                                        src={getBloodTypeImage(userData.blood_type)} 
                                                        alt={`${userData.blood_type} 혈액형`}
                                                        width="33.26px"
                                                        height="33.26px"
                                                        />
                                                    <UserInfoBox>
                                                        <UserName2>{donationData.donation_user_name}</UserName2>
                                                        <BloodDate>{formatDate(donationData.donation_date)}</BloodDate>
                                                    </UserInfoBox>
                                                </ColumnBox>
                                                <PublicBlood>헌혈 인증</PublicBlood>
                                            </FirstRow>
                                            <SecondRow>
                                                <ContentBox>
                                                    <IconBox>
                                                        <Icon src="/Img/ShowPage/place.png" alt="위치 이미지" width="16.39px" height = "19.78px"></Icon>
                                                    </IconBox>
                                                    <Content height = "19.8px">{donationData.donation_location}</Content>
                                                </ContentBox>
                                                <ContentBox>
                                                    <IconBox>
                                                        <Icon src="/Img/ShowPage/niddle.png" alt="주사 이미지" width="19.38px" height = "19.38px"></Icon>
                                                    </IconBox>
                                                    <Content height="19.38px">
                                                        {typeOptions.find(option => option.value === donationData.donation_type)?.label}
                                                    </Content>
                                                </ContentBox>
                                                
                                            </SecondRow>
                                        </ChellengeBloodListCotainer>
                                    ))
                                }
                            </div>
                        ))
                }
            </ChallengUserInfoContainer>
            <CreateImg src = "/Img/ShowPage/CreateBlood.png" alt = "헌혈 인증 이미지" onClick={() => navigate("/share")}/>
        </ShowPageContainer>
    )
}

export const getBloodTypeImage = (bloodType) => {
    const type = bloodType?.slice(0, -1); // 마지막 문자(+ 또는 -)를 제외한 혈액형
    const suffix = bloodType?.endsWith('+') ? '_p.png' : '_m.png';
    return `/Img/ShowPage/${type}${suffix}`;
};
export const HeaderBackPage = styled.div`
    display: flex;
    padding : 20px 22px;
    height : 30px;

    align-items: center;
`;

export const BackImg = styled.img`
    width : 7.77px;
    height : 15.7px;
    margin-right: 120px;
`;

export const Title = styled.p`
    font-family: 'PretendardVariable';
    font-size: 18px;
    font-weight: 600;
    line-height: 23.4px;
    letter-spacing: -0.01em;
    text-align: left;
    color : #000000;

`;

const PeopleCount = styled.span`
    font-family: 'PretendardVariable';
    font-size: 18px;
    font-weight: 300;
    line-height: 23.4px;
    letter-spacing: -0.01em;
    text-align: left;
    color : #FF7575;
`;

const ShowPageContainer = styled(FlexContainer)`
    width: 390px;
    margin : 0 auto;
    background-color: #f9f9f9;
`;
const ChallengeItemContainer = styled(ChallengeInfoContainer)`
    padding-top: 0px;
`;

const ChallengUserInfoContainer = styled.div`
    width : 100%;
    padding : 0px 22px;
    box-sizing: border-box;

    margin-bottom: 20px;
`;

const ChallengeUserInfoTitle = styled.p`
    font-family: 'PretendardVariable';
    font-size: 15px;
    font-weight: 500;
    line-height: 17.9px;
    text-align: left;
    color : #000000;

    margin-left: 10px;
    margin-bottom: 10px;
`;

const ChellengeUsersInfo = styled.div`
    width: 100%;
    height: 117.85px;
    display: flex;
    background-color: #ffffff;
    padding: 23px 22px;
    box-sizing: border-box;
    border-radius: 25px;
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const UserBloodInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-right: 20px;
`;

const BloodImage = styled.img`
    width: ${props => props.width || "45px"};
    height: ${props => props.height || "45px"};
    margin-bottom: 5px;
`;

const UserName = styled.p`
    font-family: 'PretendardVariable';
    font-size: 13px;
    font-weight: 300;
    line-height: 16.9px;
    letter-spacing: -0.02em;
    text-align: left;
    color : #000000;

`;

const ChellengeBloodListCotainer = styled.div`
    width: 100%;
    height : 161.02px;
    display: flex;
    background-color: #ffffff;
    padding: 23px 22px;
    box-sizing: border-box;
    border-radius: 25px;

    margin-bottom: 27px;

    flex-direction: column;

`;  

const EmptyBloodList = styled.div` 
    width: 100%;
    text-align : center;

    font-family: 'PretendardVariable';
    font-size: 14px;
    font-weight: 500;
    line-height: 19.6px;
    letter-spacing: -0.02em;
    text-align: center;

    color : #c0c0c0;
`;

const FirstRow = styled.div`
    width: 100%;
    height : 33.26px;
    display: flex;
    /* background-color: red; */
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 0.8px solid #EDEDED;

    justify-content: space-between;
    align-items: center;
`;

const ColumnBox = styled.div`
    display: flex;
`;

const UserInfoBox = styled.div`
    margin-left: 10px;
`;

const UserName2 = styled.div`
    font-family: 'PretendardVariable';
    font-size: 13px;
    font-weight: 500;
    line-height: 16.9px;
    letter-spacing: -0.02em;
    text-align: left;
    color : #000000;
`

const BloodDate = styled.div`
    font-family: 'PretendardVariable';
    font-size: 13px;
    font-weight: 300;
    line-height: 16.9px;
    letter-spacing: -0.02em;
    text-align: left;

    color : #bfbfbf;
`;

const PublicBlood = styled.div`
    width: 67.95px;
    height: 22.53px;
    border-radius: 20px;
    background: #FF7575;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'PretendardVariable';
    font-size: 13px;
    font-weight: 600;
    line-height: 16.9px;
    letter-spacing: -0.02em;
    text-align: left;
    color : #FFFFFF;

`;

const SecondRow = styled.div`

    display: flex;
    flex-direction: column;
    padding : 0px 8px;
`;

const ContentBox = styled.div`
    display: flex;

    align-items: center;

    margin-bottom: 15px;
`;

const IconBox = styled.div`

    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 15px;
    box-sizing: border-box;
`;
const Icon = styled.img`
    width : ${props => props.width};
    height  :  ${props => props.height};
`;  

const Content = styled.p`
    height : ${props => props.height}
`;
export default ShowPage;