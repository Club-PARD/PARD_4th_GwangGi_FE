import {useEffect, useState} from "react";
import {getUserInfo} from "../../API/UserAPI";
import styled from "styled-components";
import getCalculateAge from "./CalculateAge";
import {FlexContainer} from "../../Layout/Container";

function MyPage() {
    const [userInfo, setUserInfo] = useState({});
    const [updateUserInfo, setUpdateUserInfo] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getUserInfo();
            setUserInfo(response);
            setUpdateUserInfo({
                ...response,
                birthday: formatDate(response.birthday) // birthday 초기값 설정
            });
        }
        fetchData();
    }, []);

    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const handleChangeGenderWord = (gender) => {
        if (gender === 0) {
            return "남자";
        } else if (gender === 1) {
            return "여자";
        } else {
            return "미입력";
        }
    }

    const handleCalculateAge = (birthday) => {
        const calculatedAge = getCalculateAge(birthday);
        return calculatedAge;
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        let newValue = value;

        if (name === 'gender') {
            newValue = parseInt(value, 10);
        } else if (name === 'height' || name === 'weight') {
            newValue = parseFloat(value);
        }

        setUpdateUserInfo({
            ...updateUserInfo,
            [name]: newValue
        });
    }

    const handleEditButtonClick = () => {
        setIsEditing(!isEditing);
    }
    const handleCancelButtonClick = () => {
        setUpdateUserInfo({
            ...userInfo,
            birthday: formatDate(userInfo.birthday) // birthday 초기값 재설정
        });
        setIsEditing(false);
    }

    const handleUpdateUserInfo = () => {
        if (window.confirm("수정하시겠습니까?")) {
            alert("수정되었습니다.");
            setUserInfo(updateUserInfo);
            setIsEditing(!isEditing);
        }
    }

    return (
        <div>
            MyPage
            <UserInfoBox>
                {
                    isEditing
                        ? (
                            <FlexContainer>
                                <Input
                                    type="text"
                                    name="name"
                                    value={updateUserInfo.name || ''}
                                    onChange={handleInputChange}/>
                                <Select
                                    name="gender"
                                    value={updateUserInfo.gender}
                                    onChange={handleInputChange}>
                                    <Option value="0">남자</Option>
                                    <Option value="1">여자</Option>
                                    <Option value="2">미입력</Option>
                                </Select>
                                <Input type="number" name="height" value={updateUserInfo.height || ''} onChange={handleInputChange} step="0.01"
                                    // 소수점 입력 허용
                                />
                                <Input type="number" name="weight" value={updateUserInfo.weight || ''} onChange={handleInputChange} step="0.01"
                                    // 소수점 입력 허용
                                />
                                <Input
                                    type="text"
                                    name="blood_type"
                                    value={updateUserInfo.blood_type || ''}
                                    onChange={handleInputChange}/>
                                <Input
                                    type="datetime-local"
                                    name="birthday"
                                    value={updateUserInfo.birthday || ''}
                                    onChange={handleInputChange}/>
                            </FlexContainer>
                        )
                        : (
                            <div>
                                <UserName>{userInfo.name}님</UserName>
                                <UserGender>{handleChangeGenderWord(userInfo.gender)}</UserGender>
                                <UserHeight>{userInfo.height}cm</UserHeight>
                                <UserWeight>{userInfo.weight}kg</UserWeight>
                                <UserBloodType>{userInfo.blood_type}형</UserBloodType>
                                <UserBirthday>{handleCalculateAge(userInfo.birthday)}살</UserBirthday>
                            </div>
                        )
                }
            </UserInfoBox>
            {
                isEditing
                    ? (
                        <div>
                            <UpdateUserInfoButton onClick={handleUpdateUserInfo}>
                                저장
                            </UpdateUserInfoButton>
                            <CancelButton onClick={handleCancelButtonClick}>
                                취소
                            </CancelButton>
                        </div>
                    )
                    : (
                        <UpdateUserInfoButton onClick={handleEditButtonClick}>
                            수정하기
                        </UpdateUserInfoButton>
                    )
            }
        </div>
    );
}

const UserInfoBox = styled.div `
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

const UserName = styled.p `
    font-size : 17px;
`;

const UserGender = styled.p `
    font-size : 17px;
`;

const UserHeight = styled.p `
    font-size : 17px;
`;

const UserWeight = styled.p `
    font-size : 17px;
`;

const UserBloodType = styled.p `
    font-size : 17px;
`;

const UserBirthday = styled.p `
    font-size : 17px;
`;

const UpdateUserInfoButton = styled.button `
    width: 70px;
    height : 25px;
    border : none;
    background-color: black;
    color : white;

    &:hover {
        background-color: gray;
    }
`;

const CancelButton = styled.button `
    width: 70px;
    height: 25px;
    border: none;
    background-color: pink;
    color: black;
    margin-left: 10px;
    &:hover {
        background-color: darkred;
    }
`;

const Input = styled.input `
    height : 17px;
    font-size : 17px;
`;

const Select = styled.select `
    font-size : 17px;
`;

const Option = styled.option `
    font-size : 17px;
`
export default MyPage;
