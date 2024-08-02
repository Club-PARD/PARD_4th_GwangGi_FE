import styled from "styled-components";
import { BaseContainer } from "./Container";

function Header() {
    return (
        <HeaderContainer>
            Header
        </HeaderContainer>
    )
}

const HeaderContainer = styled(BaseContainer)`
    height : 40px;
    background-color: pink;
`;
export default Header;