import styled from "styled-components";

export const BaseContainer = styled.div`
    max-width: 390px;
    /* width: 100vw; */
    height : auto;
    background-color: #F9F9F9;
    margin : 0 auto;
    display: flex;
    flex-direction: column;
`;

export const FlexContainer = styled.div`
    width: 100%;
    height : ${props => props.height || "auto"};

    display:  flex;
    flex-direction: ${props => props.$flexDirection || "column"};
`;