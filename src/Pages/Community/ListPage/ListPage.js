import styled from "styled-components";
import { FlexContainer } from "../../../Layout/Container";
import { useEffect, useState } from "react";
import { getAllChallengeInfo } from "../../../API/ChallengeAPI";
import { Link } from "react-router-dom";

function ListPage() {
    const [selectedPeriod, setSelectedPeriod] = useState(false);
    const [challengeInfo, setCahllengeInfo] = useState([]);

    const handleSelectChange = (event) => {
        setSelectedPeriod(event.target.value === 'true');
    };

    useEffect(() => {
        const getData = async () => {
            const response = await getAllChallengeInfo(selectedPeriod);
            // console.log(response.response_object); 
            setCahllengeInfo(response.response_object);
        };

        getData();
    }, [selectedPeriod]);

    const handleChangeGender = (gender) => {
        if (gender === 0)
            return "남자"
        else if (gender === 1)
            return "여자"
        else if (gender === 2)
            return "남녀"
    }
    return (
        <FlexContainer>
            <Link to = "/create">챌린지 생성하기</Link>
            <select onChange={handleSelectChange} value={selectedPeriod}>
                <option value="false">Ing</option>
                <option value="true">Ed</option>
            </select>
            {
                selectedPeriod ? "Ed" : "Ing"
            }
            {
                challengeInfo.map((ChallengeInfo, index) => (
                    <ListDataContainer to= {"/detail/"+ChallengeInfo.challenge_id} key={index}>
                        <p>{ChallengeInfo.challenge_id}</p>
                        <p>{ChallengeInfo.challenge_name}</p>
                        <p>{ChallengeInfo.challenge_description}</p>
                        <p>{ChallengeInfo.challenge_org}</p>
                        <p>{handleChangeGender(ChallengeInfo.challenge_gender)}</p>
                        <p>{ChallengeInfo.challenge_age}</p>
                        <p>{ChallengeInfo.challenge_start_date}</p>
                        <p>{ChallengeInfo.challenge_end_date}</p>
                    </ListDataContainer>
                ))
            }
        </FlexContainer>
    )
}

const ListDataContainer = styled(Link)`
    width: 100%;
    height : 200px;
    background-color: white;

    margin-bottom: 20px;

    border : 2px solid skyblue;
    border-radius: 10px;
    box-sizing: border-box;

    text-decoration: none;
    color : #000000;

    &:hover{
        background-color: gray;
    }
`;
export default ListPage;