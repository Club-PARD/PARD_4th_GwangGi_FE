import styled from "styled-components";
import { FlexContainer } from "../../../Layout/Container";
import { ListDataMock } from "./ListDataMock";

function ListPage() {

    return (
        <FlexContainer>
            {
                ListDataMock.map((ChallengeInfo, index) => (
                    <ListDataContainer key={index}>
                        {ChallengeInfo.challenge_id}
                    </ListDataContainer>
                ))
            }
        </FlexContainer>
    )
}

const ListDataContainer = styled.div`
    width: 100%;
    height : 200px;
    background-color: white;

    margin-bottom: 20px;

    border : 2px solid skyblue;
    border-radius: 10px;
    box-sizing: border-box;
`;
export default ListPage;