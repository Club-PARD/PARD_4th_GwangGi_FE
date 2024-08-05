import styled from "styled-components";

export const BaseContainer = styled.div`
    width: 390px;
    height : auto;
    background-color: aqua;
    
    margin : 0 auto;
    display: flex;
    flex-direction: column;
`;

export const FlexContainer = styled.div`
    width: 100%;
    height : auto;

    display:  flex;
    flex-direction: ${props => props.flexDirection || "column"};
`;