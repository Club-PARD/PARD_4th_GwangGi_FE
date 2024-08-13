import styled from "styled-components";
import { FlexContainer } from "../../Layout/Container"
import InfoBoxComponent from "./Components/InfoBoxComponent";
import BestChallengComponent from "./Components/BestChallengComponent";
import { useEffect, useState } from "react";
import { getAllChallengeInfo } from "../../API/ChallengeAPI";
import { handleLogout } from "../../API/LoginAPI";
import { useNavigate } from "react-router-dom";
import { getUserAbleTo } from "../../API/UserAPI";

function HomePage() {
    const [BestChallengeInfo, setBestChallengeInfo] = useState([]);
    const [ableTo, setAbleTo] = useState(); 
    useEffect(() => {
        const getData = async () => {
            const response = await getAllChallengeInfo(false);
            // console.log(response.response_object); 
            setBestChallengeInfo(response.response_object);
        };
        const fetchData2 = async () => {
            const response = await getUserAbleTo();
            // console.log(response);
            if (response?.response_object === null || response?.response_object === undefined) {
                // alert("헌혈 내역이 없습니다.");
                console.log("헌혈 내역이 없습니다.");
                setAbleTo(null);
            } else if (response === 500) {
                alert("[에러] 관리자에게 문의하세요 (서버 500) / getUserAbleTo")
            } else {
                // console.log(response.response_object.dueDate);
                setAbleTo(response.response_object.dueDate);
            }
        }
        getData();
        fetchData2();
    }, []);

    const navigate = useNavigate();
    
    const handleLogOut = async () => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
            const response = await handleLogout();
            if (response && response.status === 200) {
                alert("로그아웃 되었습니다.");
                window.sessionStorage.clear();
                navigate("/");
                window.location.reload();
            } else {
                alert("로그아웃에 실패했습니다. 다시 시도해 주세요.");
            }
        }
    };
    return (
        <HomePageContainer>
            <InfoBoxComponent navigate={navigate} ableTo={ableTo} />
            <BestChallengComponent navigate={navigate } BestChallengeInfo={BestChallengeInfo} />
            {/* <Button onClick={getUserInfo}>테스트</Button> */}
            {/* <Link to="/mypage">마이 페이지</Link> */}
            <LogOutButton onClick={() => navigate("/test_alert")}>문진 보기</LogOutButton>
            <LogOutButton onClick={handleLogOut}>로그아웃</LogOutButton>
        </HomePageContainer>
    )
}

const HomePageContainer = styled(FlexContainer)`
    align-items: center;
`;

const LogOutButton = styled.button`
    width: 346px;;
    border : none;
    background-color: #FF7575;
    height : 60px;
    border-radius: 100px;

    font-family: 'Pretendard Variabl';
    font-size: 18px;
    font-weight: 500;
    line-height: 21.48px;
    text-align: center;
    color : #ffffff;

    margin : 20px 0px;

    &:hover{
        background-color: #ffffff;
        border : 2px solid #E7E7E7;
        color : #000000;
    }

`;
export default HomePage;