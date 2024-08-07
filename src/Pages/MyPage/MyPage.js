import {useEffect, useState} from "react";
import {getUserAbleTo, getUserInfo} from "../../API/UserAPI";
import styled from "styled-components";
import getCalculateAge from "./CalculateAge";
import {FlexContainer} from "../../Layout/Container";
import { useNavigate } from "react-router-dom";
import { getMyChallengeInfo } from "../../API/ChallengeAPI";
import handleChangeGenderWord from "../../Layout/HandleChange";
import ChallengeItem from "../../Pages/HomePage/Components/ChellengeItem";
import { DropdownButton, DropDownImage, DropdownItem, DropdownMenu } from "../Community/ListPage/ListPage";

function MyPage() {
    const [userInfo, setUserInfo] = useState({});
    const [ableTo, setAbleTo] = useState();
    const [updateUserInfo, setUpdateUserInfo] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    const [challengeInfo, setChallengeInfo] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await getUserInfo();

            if (response.response_object === null || response.response_object === undefined) {
                alert("유저 정보가 없습니다.");
            } else if (response === 500) {
                alert("[에러] 관리자에게 문의하세요 (서버 500) /  getUserInfo")
            } else {
                // console.log(response);
                setUserInfo(response.response_object);
                setUpdateUserInfo({
                    ...response.response_object,
                    birthday: formatDate(response.response_object.birthday) // birthday 초기값 설정
                });
            }
        }

        const fetchData2 = async () => {
            const response = await getUserAbleTo();
            if (response.response_object === null || response.response_object === undefined) {
                // alert("헌혈 내역이 없습니다.");
                console.log("헌혈 내역이 없습니다.");
            } else if (response === 500) {
                alert("[에러] 관리자에게 문의하세요 (서버 500) / getUserAbleTo")
            } else {
                // console.log(response);
                setAbleTo(response.dueDate);
            }
        }

        const fetchData3 = async () => {
            const response = await getMyChallengeInfo();
            setChallengeInfo(response.response_object);
        };
        fetchData();
        fetchData2();
        fetchData3();
    }, [navigate]);

    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

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
            // 나중에 여기 파트에 axios.patch or put 하는 핸들러 가져와서 updatedUserInfo를 파라미터로 넣고 실행하면 돼!
            // try catch문 써서 여기 핸들러 안에서 error catch 해주는 것까지 해주면 최고일듯!
            alert("수정되었습니다.");
            setUserInfo(updateUserInfo);
            setIsEditing(!isEditing);
        }
    }
    
    const handleChangeAbleToSentnece = (day) => {
        if (day === 0)
            return "오늘부터 가능합니다!"
        else if (day < 0)
            return `${day}일 남았습니다.`
        else if (day > 0)
            return `${day}일 지났습니다.`
    }
    const [view, setView] = useState(false);

    const Dropdown = ({ onSelect }) => {
        const options = [
            { value: '1', label: '여자' },
            { value: '0', label: '남자' }
        ];

        return (
            <DropdownMenu onClick={() => setView(!view)}>
                {options.map((option) => (
                    <DropdownItem key={option.value} name="gender" onClick={() => onSelect(option.value)}>
                        {option.label}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        );
    };


    return (
        <MyPageContainer>
            {/* <div>
                헌혈 가능한 일자 : {handleChangeAbleToSentnece(ableTo)} 
            </div> */}
            <ProfileContainer>
                {
                    isEditing
                        ? (
                            <FlexContainer>
                                <input
                                    type="text"
                                    name="name"
                                    value={updateUserInfo.name || ''}
                                    onChange={handleInputChange}/>
                                <DropdownButton onClick={() => setView(!view)}>
                                    {handleChangeGenderWord(updateUserInfo.gender)}
                                    <DropDownImage src={view ? "/Img/ListPage/DropDownUp.png" : "/Img/ListPage/DropDownDown.png"} alt="드롭다운 이미지" />
                                </DropdownButton>
                                {view && <Dropdown onSelect={handleInputChange} />}

                                <input type="number" name="height" value={updateUserInfo.height || ''} onChange={handleInputChange} step="0.01"
                                    // 소수점 입력 허용
                                />
                                <input type="number" name="weight" value={updateUserInfo.weight || ''} onChange={handleInputChange} step="0.01"
                                    // 소수점 입력 허용
                                />
                                <input
                                    type="text"
                                    name="blood_type"
                                    value={updateUserInfo.blood_type || ''}
                                    onChange={handleInputChange}/>
                                <input
                                    type="datetime-local"
                                    name="birthday"
                                    value={updateUserInfo.birthday || ''}
                                    onChange={handleInputChange}/>
                            </FlexContainer>
                        )
                        : (
                            <UserInfoContainer>
                                <UserName>{userInfo.name}님</UserName>
                                <TagBox>
                                    <UserGender>{handleChangeGenderWord(userInfo.gender)}</UserGender>
                                    <UserBirthday>{handleCalculateAge(userInfo.birthday)}살</UserBirthday>
                                    <UserHeight>{userInfo.height}cm</UserHeight>
                                    <UserWeight>{userInfo.weight}kg</UserWeight>
                                    <UserBloodType>{userInfo.blood_type}형</UserBloodType>
                                </TagBox>
                            </UserInfoContainer>
                        )
                }
            {/* {
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
                }  */}
            </ProfileContainer>
            <InfoContainer>
                <InfoTitle>
                    참여 중인 챌린지
                </InfoTitle>
                {
                    challengeInfo.map((challengeInfo, index) => (
                        // <ChallengeItem challengeInfo={challengeInfo} index={index} marginRight="22px" />
                        <ChallengeItem key={index} challengeInfo={challengeInfo} index={index} width={"100%"} marginBottom={"20px"} />
                    ))
                }
            </InfoContainer>
        </MyPageContainer>
    );
}


const MyPageContainer = styled.div`
    background-color: #ffffff;
`;
const UserData = styled.p`
    font-size : 15px;
    font-family: 'PretendardVariable';
`;
const UserName = styled(UserData)`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;

`;

const Tag = styled(UserData)`
    margin-right: 5px;

    background-color: #EAEAEA;
    color : #7D7D7D;

    padding : 5px 10px;
    box-sizing: border-box;
    border-radius: 5px;
`;

const UserGender = styled(Tag)`
`;

const UserHeight = styled(Tag)`
`;

const UserWeight = styled(Tag)`
`;

const UserBloodType = styled(Tag)`
`;

const UserBirthday = styled(Tag)`
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

const ProfileContainer = styled.div`
    width: auto;
    height : auto;
    background-color: #f9f9f9;
    padding : 0px 22px;
    padding-bottom: 20px;
    border-radius: 0px 0px 20px 20px;
`;
const InfoContainer = styled.div`
    width: 100%;
    height : auto;
    background-color:"#ffffff";
    padding : 20px 22px;
    box-sizing: border-box;
`;

const InfoTitle = styled.p`
    font-family: 'PretendardVariable';
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    text-align: left;
    padding-bottom: 20px;
`;

const UserInfoContainer = styled.div`
    width: 100%;
    height : auto;
    /* padding : 25px 30px; */
    box-sizing: border-box;
`;

const TagBox = styled.div`
    width: 100%;
    display: flex;


`;
export default MyPage;
