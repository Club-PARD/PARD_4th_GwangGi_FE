import styled from "styled-components";
import { useState } from "react";
import { FlexContainer } from "../../../Layout/Container";
import { useNavigate } from "react-router-dom";
import { BackContainerComponent, JoinButton } from "../DetailPage/DetailPage";
import { handlePostChallenge } from "../../../API/ChallengeAPI";

function CreatePage() {
    const challengeData = {
        challenge_name: "",
        challenge_description: "",
        challenge_start_date: "",
        challenge_end_date: "-08-04T10:43:17.784Z",
        challenge_age: "",
        challenge_org: "",
        challenge_gender: "",
    };

    const [newChallengeData, setNewChallengeData] = useState(challengeData);
    const [viewAgeDropdown, setViewAgeDropdown] = useState(false);
    const [viewGenderDropdown, setViewGenderDropdown] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewChallengeData({
            ...newChallengeData,
            [name]: value,
        });
    };

    const handleCreateChallenge = async () => {
        try {
            if (window.confirm("챌린지를 생성하시겠습니까?")) {
                const response = await handlePostChallenge(newChallengeData);
                console.log(response);
                if (response && response.success === true) {
                    alert("성공적으로 생성되었습니다.");
                    navigate("/list");
                } else {
                    alert("챌린지 생성에 실패했습니다. 다시 시도해주세요.");
                }
            }
        } catch (error) {
            console.log("handleCreateChallenge fail", error);
        }
    };

    const Dropdown = ({ options, onSelect }) => {
        return (
            <DropdownMenu>
                {options.map((option) => (
                    <DropdownItem
                        key={option.value}
                        onClick={() => onSelect(option.value)}
                    >
                        {option.label}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        );
    };

    const navigate = useNavigate();

    const ageOptions = [
        { value: '20대', label: '20대' },
        { value: '30대', label: '30대' },
        { value: '40대', label: '40대' },
        { value: '50대', label: '50대' },
        { value: '60대', label: '60대' },
    ];

    const genderOptions = [
        { value: '0', label: '남성' },
        { value: '1', label: '여성' },
        { value: '2', label: '남녀' },
    ];

    // 모든 입력 값이 유효한지 확인하는 함수
    const isFormValid = () => {
        return (
            newChallengeData.challenge_name &&
            newChallengeData.challenge_description &&
            newChallengeData.challenge_start_date &&
            newChallengeData.challenge_end_date &&
            newChallengeData.challenge_age &&
            newChallengeData.challenge_org &&
            newChallengeData.challenge_gender
        );
    };  

    return (
        <FlexContainer>
            <BackContainerComponent text="뒤로가기"/>
            <InputContainer>
                <RowBox>
                    <InputTitle>챌린지 명</InputTitle>
                    <Input
                        type="text"
                        name="challenge_name"
                        value={newChallengeData.challenge_name || ''}
                        onChange={handleInputChange}
                        placeholder="Ex) 직장인 헌혈 챌린지"
                    />
                </RowBox>
                <RowBox>
                    <InputTitle>챌린지 설명</InputTitle>
                    <TextArea
                        name="challenge_description"
                        value={newChallengeData.challenge_description || ''}
                        onChange={handleInputChange}
                        placeholder="Ex) 직장 생활하느라 고생하시는 분들을 위해..."
                    />
                </RowBox>
                <FlexContainer $flexDirection="row">
                    <RowBox style={{ marginRight: "20px" }}>
                        <InputTitle>챌린지 연령대</InputTitle>
                        <SelectBox>
                            <DropdownButton onClick={() => setViewAgeDropdown(!viewAgeDropdown)}>
                                {newChallengeData.challenge_age || '연령대 선택'}
                                <DropDownImage
                                    src={viewAgeDropdown ? "/Img/ListPage/DropDownUp2.png" : "/Img/ListPage/DropDownDown2.png"}
                                    alt="드롭다운 이미지"
                                />
                            </DropdownButton>
                            {viewAgeDropdown && (
                                <Dropdown
                                    options={ageOptions}
                                    onSelect={(value) => {
                                        setNewChallengeData({
                                            ...newChallengeData,
                                            challenge_age: value
                                        });
                                        setViewAgeDropdown(false);
                                    }}
                                />
                            )}
                        </SelectBox>
                    </RowBox>
                    <RowBox>
                        <InputTitle>챌린지 성별</InputTitle>
                        <SelectBox>
                            <DropdownButton onClick={() => setViewGenderDropdown(!viewGenderDropdown)}>
                                {newChallengeData.challenge_gender === '' ? '성별 선택' : genderOptions.find(option => option.value === newChallengeData.challenge_gender)?.label}
                                <DropDownImage
                                    src={viewGenderDropdown ? "/Img/ListPage/DropDownUp2.png" : "/Img/ListPage/DropDownDown2.png"}
                                    alt="드롭다운 이미지"
                                />
                            </DropdownButton>
                            {viewGenderDropdown && (
                                <Dropdown
                                    options={genderOptions}
                                    onSelect={(value) => {
                                        setNewChallengeData({
                                            ...newChallengeData,
                                            challenge_gender: value
                                        });
                                        setViewGenderDropdown(false);
                                    }}
                                />
                            )}
                        </SelectBox>
                    </RowBox>
                </FlexContainer>
                <RowBox>
                    <InputTitle>챌린지 장소/조직</InputTitle>
                    <Input
                        type="text"
                        name="challenge_org"
                        value={newChallengeData.challenge_org || ''}
                        onChange={handleInputChange}
                        placeholder="Ex) 자유롭게"
                    />
                </RowBox>
                <RowBox>
                    <InputTitle>챌린지 시작 날짜</InputTitle>
                    <Input
                        type="datetime-local"
                        name="challenge_start_date"
                        value={newChallengeData.challenge_start_date || ''}
                        onChange={handleInputChange}
                    />
                </RowBox>
                <RowBox>
                    <InputTitle>챌린지 종료 날짜</InputTitle>
                    <Input
                        type="datetime-local"
                        name="challenge_end_date"
                        value={newChallengeData.challenge_end_date || ''}
                        onChange={handleInputChange}
                    />
                </RowBox>
            </InputContainer>
            <CreateButton
                onClick={handleCreateChallenge}
                disabled={!isFormValid()} // 버튼의 활성화 여부 설정
                style={{
                    backgroundColor: isFormValid() ? '#FF7575' : '#E0E0E0', // 버튼 색상 변경
                    cursor: isFormValid() ? 'pointer' : 'not-allowed' // 커서 변경
                }}
            >
                생성하기
            </CreateButton>
        </FlexContainer>
    );
}

export const InputContainer = styled.div`
    margin: 0px 22px;
    box-sizing: border-box;
`;

export const InputTitle = styled.p`
    font-family: Pretendard Variable;
    font-size: 13px;
    font-weight: 600;
    line-height: 15.51px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #7B7B7B;
    margin-bottom: 5px;
`;

export const RowBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

export const Input = styled.input`
    width: auto;
    height: 51.82px;
    border: 1.5px solid #E7E7E7;
    border-radius: 15px;
    padding-left: 10px;
    box-sizing: border-box;
    font-family: 'PretendardVariable';
    font-size: 15px;
    font-weight: 500;
    line-height: 19.5px;
    text-align: left;
    outline: none;
    
    &::placeholder {
        color: #BCBCBC;
    }

    &:focus {
        outline: 1.5px solid #FF7575;
    }
`;

export const TextArea = styled.textarea`
    width: auto;
    height: 80px;
    border: 1.5px solid #E7E7E7;
    border-radius: 15px;
    padding: 10px;
    box-sizing: border-box;
    font-family: 'PretendardVariable';
    font-size: 15px;
    font-weight: 500;
    line-height: 19.5px;
    text-align: left;
    outline: none;
    resize: none;
    
    &::placeholder {
        color: #BCBCBC;
    }

    &:focus {
        outline: 1.5px solid #FF7575;
    }
`;

export const SelectBox = styled.div`
    position: relative;
    width: auto;
`;

export const DropdownButton = styled.div`
    width: 130px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: Pretendard Variable;
    font-size: 13px;
    font-weight: 500;
    color: #000000;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px 10px;
    justify-content: space-between;
`;

export const DropdownMenu = styled.ul`
    position: absolute;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    list-style-type: none;
    padding: 0;
    width: 150px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1;
`;

export const DropdownItem = styled.li`
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    font-family: "Pretendard Variable";
    color: #000000;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export const DropDownImage = styled.img`
    width: 15px;
    height: 15px;
    margin-left: 10px;
`;

export const CreateButton = styled(JoinButton)`
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #333;
    }

    &:disabled {
        background-color: #E0E0E0;
        cursor: not-allowed;
    }
`;

export default CreatePage;