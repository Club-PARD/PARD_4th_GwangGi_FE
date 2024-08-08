import { useState } from "react";
import { CreateButton, Input, InputContainer, InputTitle, RowBox } from "../CreatePage/CreatePage";
import { BackContainerComponent } from "../DetailPage/DetailPage";
import { SelectBox, DropdownButton, DropdownMenu, DropdownItem, DropDownImage } from "../CreatePage/CreatePage"; // 필요한 styled-components 임포트
import styled from "styled-components";
import { FlexContainer } from "../../../Layout/Container";
import { postBloodData } from "../../../API/BloodAPI";
import { useNavigate } from "react-router-dom";
import { BackImg, HeaderBackPage, Title } from "../ShowPage/ShowPage";

function SharePage() {
    const bloodData = {
        donation_date: null,
        donation_location: null,
        donation_type: null,
    };

    const [newBloodData, seNewBloodData] = useState(bloodData);
    const [viewTypeDropdown, setViewTypeDropdown] = useState(false);

    const navigate = useNavigate();

    const handleCreateBlood = async () => {
        try {
            if (window.confirm("헌혈을 기록하시겠습니까?")) {
                const response = await postBloodData(newBloodData);
                if (response && response.success === true) {
                    alert("성공적으로 생성되었습니다.");
                    navigate("/home");
                } else {
                    alert("헌혈 기록에 실패했습니다. 다시 시도해주세요.");
                }
            }
        } catch (error) {
            console.log("handleCreateBllod fail", error);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        seNewBloodData({
            ...newBloodData,
            [name]: value,
        });
    };

    const typeOptions = [
        { value: null, label: '선택하기' },
        { value: 0, label: '전혈' },
        { value: 1, label: '혈장 성분 헌혈' },
        { value: 2, label: '혈소판 성분 헌혈' },
    ];

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

    const isFormValid = () => {
        return (
            newBloodData.donation_date &&
            newBloodData.donation_location &&
            newBloodData.donation_type != null
        );
    };  

    return (
        <FlexContainer height="660px">
            <HeaderBackPage>
                <BackImg src="/Img/DetailPage/Back.png" alt="뒤로가기" onClick={() => navigate(-1)}/>
                <Title>헌혈 기록 생성</Title>
            </HeaderBackPage>
            <InputContainer>
                <RowBox>
                    <InputTitle>헌혈 날짜</InputTitle>
                    <Input
                        type="datetime-local"
                        name="donation_date"
                        value={newBloodData.donation_date || ''}
                        onChange={handleInputChange}
                    />
                </RowBox>
                <RowBox>
                    <InputTitle>헌혈 장소</InputTitle>
                    <Input
                        type="text"
                        name="donation_location"
                        value={newBloodData.donation_location || ''}
                        onChange={handleInputChange}
                        placeholder="Ex) 자유롭게"
                    />
                </RowBox>
                <RowBox>
                    <InputTitle>헌혈 종류</InputTitle>
                    <SelectBox>
                        <DropdownButton onClick={() => setViewTypeDropdown(!viewTypeDropdown)}>
                            {typeOptions.find(option => option.value === newBloodData.donation_type)?.label || '헌혈 종류 선택'}
                            <DropDownImage
                                src={viewTypeDropdown ? "/Img/ListPage/DropDownUp2.png" : "/Img/ListPage/DropDownDown2.png"}
                                alt="드롭다운 이미지"
                            />
                        </DropdownButton>
                        {viewTypeDropdown && (
                            <Dropdown
                                options={typeOptions}
                                onSelect={(value) => {
                                    seNewBloodData({
                                        ...newBloodData,
                                        donation_type: value
                                    });
                                    setViewTypeDropdown(false);
                                }}
                            />
                        )}
                    </SelectBox>
                </RowBox>
            </InputContainer>
            <CreateButton2
                onClick={handleCreateBlood}
                disabled={!isFormValid()} // 버튼의 활성화 여부 설정
                style={{
                    backgroundColor: isFormValid() ? '#FF7575' : '#E0E0E0', // 버튼 색상 변경
                    cursor: isFormValid() ? 'pointer' : 'not-allowed' // 커서 변경
                }}
            >
                생성하기
            </CreateButton2>
        </FlexContainer>
    );
}
const BackContainerComponentSharePage = styled.div`
    margin-top : 20px;
`;
const CreateButton2 = styled(CreateButton)` 
    margin-top: 50px;

    &:hover{
        color : white;
    }
`;

export default SharePage;