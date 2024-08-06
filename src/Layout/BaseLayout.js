import {Outlet} from "react-router-dom";
import {BaseContainer} from "./Container";
import styled from "styled-components";
import Header from "./Header";

function Layout() {
    return (
        <div>
            <ContainerBaseOutlet>
                <Outlet/>
            </ContainerBaseOutlet>
        </div>
    )
}

const ContainerBaseOutlet = styled.div `
    width : 100%;
    background-color: #ffffff;
    height : auto;
`;
export default Layout;