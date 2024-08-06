import styled from "styled-components";
import { FlexContainer } from "../../../Layout/Container";
import { useEffect, useState } from "react";
import { getAllChallengeInfo } from "../../../API/ChallengeAPI";
import { Link } from "react-router-dom";
import ChallengeItem from "../../HomePage/Components/ChellengeItem";

function ListPage() {
    const [selectedPeriod, setSelectedPeriod] = useState(false);
    const [challengeInfo, setCahllengeInfo] = useState([]);
    const [view, setView] = useState(false);
    const [selectedOption, setSelectedOption] = useState('선택하기');

    const handleSelectChange = (value) => {
        setSelectedPeriod(value === 'true');
        setSelectedOption(value === 'true' ? '완료된 챌린지' : '진행중인 챌린지');
    };

    useEffect(() => {
        const getData = async () => {
            const response = await getAllChallengeInfo(selectedPeriod);
            setCahllengeInfo(response.response_object);
        };

        getData();
    }, [selectedPeriod]);

    const Dropdown = ({ onSelect }) => {
        const options = [
            { value: 'false', label: '진행중인 챌린지' },
            { value: 'true', label: '완료된 챌린지' }
        ];

        return (
            <DropdownMenu onClick={() => setView(!view)}>
                {options.map((option) => (
                    <DropdownItem key={option.value} onClick={() => onSelect(option.value)}>
                        {option.label}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        );
    };

    return (
        <FlexContainer>
            <SelectBox>
                <DropdownButton onClick={() => setView(!view)}>
                    {selectedOption}
                    <DropDownImage src={view ? "/Img/ListPage/DropDownUp.png" : "/Img/ListPage/DropDownDown.png"} alt="드롭다운 이미지" />
                </DropdownButton>
                {view && <Dropdown onSelect={handleSelectChange} />}
                <CreateChallengeButton to="/create">챌린지 생성하기</CreateChallengeButton>
            </SelectBox>
            <ChallengeInfoContainer>
                {challengeInfo.map((challengeInfo, index) => (
                    <ChallengeItem key={index} challengeInfo={challengeInfo} index={index} width={"100%"} marginBottom={"20px"} />
                ))}
            </ChallengeInfoContainer>
        </FlexContainer>
    );
}

const ChallengeInfoContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 22px;
    box-sizing: border-box;
    background-color: #ffffff;
    padding-top: 20px;
`;

const SelectBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    padding: 0px 22px;
    box-sizing: border-box;
    justify-content: space-between;
    padding-top: 20px;
    background-color: #ffffff;
`;

const CreateChallengeButton = styled(Link)`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #FFF;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-weight: 500;
    background-color: #FF7575;
    text-align: center;
    padding: 7px 10px;
    border-radius: 5px;

    &:hover {
        background-color: #e65656;
    }
`;

const DropDownImage = styled.img`
    width: 15px;
    height: 15px;
    margin-left: 10px;
`;

const DropdownButton = styled.div`
    width : 150px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    font-family: "Pretendard Variable";
    color: #333;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px 10px;

    justify-content: space-between;
`;

const DropdownMenu = styled.ul`
    position: absolute;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    list-style-type: none;
    padding: 0;
    margin-top: 35px;
    width: auto;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1;
`;

const DropdownItem = styled.li`
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    font-family: "Pretendard Variable";
    color: #333;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export default ListPage;