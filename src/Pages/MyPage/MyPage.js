import {useEffect, useState} from "react";
import {getUserInfo} from "../../API/UserAPI";
import styled from "styled-components";
import getCalculateAge from "./CalculateAge";

function MyPage() {
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        const fetchData = async () => { // async로 변경
            const response = await getUserInfo(); // await 사용
            // console.log("fetchData", response);
            setUserInfo(response);
            console.log("userInfo", userInfo);
        }
        fetchData();
    }, []);

    const handleChangeGenderWord = (gender) => {
        if (gender === 0) {
            return "남자";
        } else if (gender === 1){
            return "여자";
        } else {
            return "미입력";
        }
    }

    const handleCalculateAge = (birthday) => {
        const calculatcaedAge = getCalculateAge(birthday);
        return calculatcaedAge;
    }
    return (
        <div>
            MyPage
            <UserInfoBox>
                <UserName>{userInfo.name}님</UserName>
                <UserGender>{handleChangeGenderWord(userInfo.gender)}</UserGender>
                <UserHeight>{userInfo.height}cm</UserHeight>
                <UserWeight>{userInfo.weight}kg</UserWeight>
                <UserBloodType>{userInfo.blood_type}형</UserBloodType>
                <UserBirthday>{handleCalculateAge(userInfo.birthday)}살</UserBirthday>
            </UserInfoBox>
        </div>
    );
}
const UserInfoBox = styled.div`
    width: 100%;
    height : 150px;

    border : 2px solid pink;

    background-color: white;
    color : black;

    border-radius: 10px;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
`;

const UserName = styled.p`

`;

const UserGender = styled.p`

`;

const UserHeight = styled.p`
`;

const UserWeight = styled.p`

`;

const UserBloodType = styled.p`
`;

const UserBirthday = styled.p`

`;
export default MyPage;