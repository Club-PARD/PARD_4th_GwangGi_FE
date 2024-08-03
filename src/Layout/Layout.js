import {Outlet} from "react-router-dom";
import {BaseContainer} from "./Container";
import styled from "styled-components";
import Header from "./Header";

function Layout() {

    return (
        <BaseContainer>
            <ContainerHeader>
                <Header />
            </ContainerHeader>
            <ContainerOutlet>
                <Outlet/>
            </ContainerOutlet>
        </BaseContainer>
    )
}

const ContainerHeader = styled.div `
    width : 100%;
    height : auto;
`;

const ContainerOutlet = styled.div `
    width : 100%;
    height : auto;
`;
export default Layout;