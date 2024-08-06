import { useEffect, useState } from "react";
import { getSelectedChallengeInfo } from "../../../API/ChallengeAPI";
import { useParams } from "react-router-dom";
import handleChangeGenderWord from "../../../Layout/HandleChange";
function DetailPage() {
    
    const [challengeInfo, setChallengeInfo] = useState({});
    const { challenge_id } = useParams(); // 경로 변수 추출


    useEffect(() => {
        const getData = async () => {
            const response = await getSelectedChallengeInfo(challenge_id);
            // console.log(response); 
            setChallengeInfo(response.response_object);
        };

        getData();
    }, [challenge_id]);

    return (
        <div>
            <p>{challengeInfo.challenge_id}</p>
            <p>{challengeInfo.challenge_name}</p>
            <p>{challengeInfo.challenge_description}</p>
            <p>{challengeInfo.challenge_org}</p>
            <p>{handleChangeGenderWord(challengeInfo.challenge_gender)}</p>
            <p>{challengeInfo.challenge_age}</p>
            <p>{challengeInfo.challenge_start_date}</p>
            <p>{challengeInfo.challenge_end_date}</p>
        </div>
    )
}

export default DetailPage;