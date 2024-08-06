import {Outlet} from "react-router-dom";
import styled from "styled-components";

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