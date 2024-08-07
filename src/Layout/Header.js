import styled from "styled-components";
import { BaseContainer } from "./Container";
import { useNavigate, useLocation, Link } from "react-router-dom";


function Header() {
    const location = useLocation();


    const getCurrentPath = () => {
        const path = location.pathname;
        if (path.includes("detail")) {
            return "detail";
        }
        return path.split("/").pop();
    };


    return (
        <div>
            <HeaderContainer>
                <LogoText to = "/home">블릿지</LogoText>
                <MenuBox>
                    <MenuItem to = "/home" $isActive={getCurrentPath() === "home" | getCurrentPath() === "share"}>홈</MenuItem>
                    <MenuItem to = "/list" $isActive={getCurrentPath() === "list" || getCurrentPath() === "detail"}>챌린지</MenuItem>
                    <MenuItem to = "/mypage" $isActive={getCurrentPath() === "mypage"}>마이</MenuItem>
                </MenuBox>
            </HeaderContainer>
        </div>
    )
}

const HeaderContainer = styled(BaseContainer)`
    height : 130px;
    padding : 0px 22px;
    box-sizing: border-box;
    padding-top: 20px;
`;

const LogoText = styled(Link)`
    font-family: 'Y_Spotlight';
    font-size: 25px;
    font-weight: 400;
    line-height: 33px;
    text-align: left;
    color : #FF7575;
    text-decoration: none;
    margin-bottom: 20px;
`;

const MenuBox = styled.div`
    width: 100%;
    height : auto;
    
    display: flex;
`;

const MenuItem = styled(Link)`
    font-family: 'PretendardVariable';
    font-size: 25px;
    font-weight: 600;
    line-height: 32.5px;
    text-align: left;
    margin-right: 18px;
    color: ${props => props.$isActive ? '#FF7575' : '#A9A9A9'};
    text-decoration: none;
    position: relative;
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        width: ${props => props.$isActive ? '100%' : '0'};
        height: 2px;
        background-color: #FF7575;
        transition: width 0.5s ease, transform 0.5s ease;
        transform: ${props => props.$isActive ? 'translateX(-50%)' : 'translateX(-50%)'};
    }

    &:hover::after {
        width: 100%;
        transform: translateX(-50%);
    }

    &:hover {
        color: #FF7575;
    }
`;



export default Header;
