import styled from "styled-components";
import { BaseContainer } from "./Container";
import { Navigate, useNavigate } from "react-router-dom";
import { handleLogout } from "../API/LoginAPI";

function Header() {
    const navigate = useNavigate();
    const handleLogOut = async () => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
            const response = await handleLogout();
            alert("로그아웃 되었습니다.");
            window.sessionStorage.clear();
            navigate("/");
            window.location.reload();
        }
    }
    return (
        <HeaderContainer>
            Header
            블릿지
            <LogOut onClick={handleLogOut}>로그아웃</LogOut>
        </HeaderContainer>
    )
}

const HeaderContainer = styled(BaseContainer)`
    height : 100px;
    background-color: pink;

    font-family: 'Y_Spotlight';
`;
const LogOut = styled.p`
    &:hover{
        color : yellow;
    }
`;
export default Header;