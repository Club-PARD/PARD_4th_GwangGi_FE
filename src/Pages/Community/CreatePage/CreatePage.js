import {useState} from "react";
import {Input, Option, Select, Textarea} from "../../../Layout/Form";
import styled from "styled-components";
import { handlePostChallenge } from "../../../API/ChallengeAPI";
import { useNavigate } from "react-router-dom";

function CreatePage() {
    const challengeData = {
        challenge_name: "",
        challenge_description: "",
        challenge_start_date: "",
        challenge_end_date: "-08-04T10:43:17.784Z",
        challenge_age: "",
        challenge_org: "",
        challenge_gender : "",
    }

    const [newChallengeData, setNewChallengeData] = useState(challengeData);
    
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        let newValue = value;

        setNewChallengeData({
            ...newChallengeData,
            [name]: newValue
        });
    }
    const navigate = useNavigate();

    const handleCreateChallenge = async () => {
        try {
            if (window.confirm("챌린지를 생성하시겠습니까?")) {
                const response = await handlePostChallenge(newChallengeData);
                console.log(response);
                if (response && response.success === true) {
                    // console.log(response);
                    alert("성공적으로 생성되었습니다.");
                    navigate("/home");
                } else {
                    alert("챌린지 생성에 실패했습다. 다시 시도해주세요.");
                }
            }
        } catch (error) {
            console.log("handleCreateChallenge fail", error);
        }
    }
    return (
        <div>
            <RowBox>
                <InputTitle>챌린지 명</InputTitle>
                <Input type="text" name = "challenge_name" value = {newChallengeData.challenge_name || ''} onChange={handleInputChange} placeholder="Ex) 직장인 헌혈 챌린지"/>
            </RowBox>
            <RowBox>
                <InputTitle>챌린지 설명</InputTitle>
                <Textarea name = "challenge_description" value = {newChallengeData.challenge_description || ''} onChange={handleInputChange} placeholder="Ex) 직장 생활하느라 고생하시는 분들을 위해..."/>
            </RowBox>
            <RowBox>
                <InputTitle>챌린지 연령대</InputTitle>
                <Input type="text" name = "challenge_age" value = {newChallengeData.challenge_age || ''} onChange={handleInputChange} placeholder="Ex) 20 ~ 30대"/>
            </RowBox>
            <RowBox>
                <InputTitle>챌린지 성별</InputTitle>
                <Select
                    name="challenge_gender"
                    value={newChallengeData.challenge_gender || ''}
                    onChange={handleInputChange}
                    required="required">
                    <Option value="">선택하세요</Option>
                    <Option value={0}>남성</Option>
                    <Option value={1}>여성</Option>
                    <Option value={2}>남녀</Option>
                </Select>
            </RowBox>
            <RowBox>
                <InputTitle>챌린지 장소/조직</InputTitle>
                <Input type="text" name = "challenge_org" value = {newChallengeData.challenge_org || ''} onChange={handleInputChange} placeholder="Ex) 자유롭게"/>
            </RowBox>
            <RowBox>
                <InputTitle>챌린지 시작 날짜</InputTitle>
                <Input type="datetime-local" name = "challenge_start_date" value = {newChallengeData.challenge_start_date || ''} onChange={handleInputChange}/>
            </RowBox>
            <RowBox>
                <InputTitle>챌린지 종료 날짜</InputTitle>
                <Input type="datetime-local" name = "challenge_end_date" value = {newChallengeData.challenge_end_date || ''} onChange={handleInputChange}/>
            </RowBox>

            <CreateChallengButton onClick={handleCreateChallenge}>생성하기</CreateChallengButton>
        </div>
    );
}

const InputTitle = styled.p`
    width: 30%;
    font-size: 17px;
`;

const RowBox = styled.div`
    width : 100%;
    height : 60px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
`;

const CreateChallengButton = styled.button`
    width: 70px;
    height : 25px;
    border : none;
    background-color: black;
    color : white;

    &:hover {
        background-color: gray;
    }
`;
export default CreatePage;