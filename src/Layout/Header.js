import styled from "styled-components";
import { BaseContainer } from "./Container";
import { Navigate, useNavigate, useLocation, Link } from "react-router-dom";
import { handleLogout } from "../API/LoginAPI";

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleLogOut = async () => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
            const response = await handleLogout();
            alert("로그아웃 되었습니다.");
            window.sessionStorage.clear();
            navigate("/");
            window.location.reload();
        }
    };

    const getCurrentPath = () => {
        const path = location.pathname.split("/").pop();
        return path;
    };

    return (
        <HeaderContainer>
            <LogoText>블릿지</LogoText>
            <MenuBox>
                <MenuItem to = "/home" isActive={getCurrentPath() === "home"}>홈</MenuItem>
                <MenuItem to = "/list" isActive={getCurrentPath() === "list"}>챌린지</MenuItem>
                <MenuItem to = "/mypage" isActive={getCurrentPath() === "mypage"}>마이</MenuItem>
            </MenuBox>
            <LogOut onClick={handleLogOut}>로그아웃</LogOut>
        </HeaderContainer>
    )
}

const HeaderContainer = styled(BaseContainer)`
    height : 110px;
    padding : 0px 22px;
    box-sizing: border-box;
    background-color: pink;
`;

const LogoText = styled.p`
    font-family: 'Y_Spotlight';
    font-size: 25px;
    font-weight: 400;
    line-height: 33px;
    text-align: left;
    color : #FF7575;

    margin-bottom: 20px;
`;

const LogOut = styled.p`
    &:hover{
        color : yellow;
    }
`;

const MenuBox = styled.div`
    width: 100%;
    height : auto;
    
    display: flex;
`;

const MenuItem = styled(Link)`
    font-family: 'PretendardVariable';
    font-size: 25px;
    font-weight: 700;
    line-height: 32.5px;
    text-align: left;
    margin-right: 18px;
    color: ${props => props.isActive ? '#FF7575' : '#A9A9A9'};

    text-decoration: none;

    &:hover{
        color : #FF7575;
    }
`;

export default Header;
