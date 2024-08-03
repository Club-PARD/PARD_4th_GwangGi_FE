import styled from "styled-components";
import { BaseContainer } from "./Container";
import { Navigate, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const handleLogOut = () => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
            alert("로그아웃 되었습니다.");
            window.sessionStorage.clear();
            navigate("/");
        }
    }
    return (
        <HeaderContainer>
            Header
            <LogOut onClick={handleLogOut}>로그아웃</LogOut>
        </HeaderContainer>
    )
}

const HeaderContainer = styled(BaseContainer)`
    height : 40px;
    background-color: pink;
`;
const LogOut = styled.p`
    &:hover{
        color : yellow;
    }
`;
export default Header;