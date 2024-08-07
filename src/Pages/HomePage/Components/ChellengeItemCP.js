import styled from "styled-components";

export const handleChangeDay = (date) => {
    const today = new Date();
    const challengeDate = new Date(date);
    
    // 시간 차이를 일 단위로 계산
    const timeDiff = challengeDate.getTime() - today.getTime();
    const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    if (dayDiff === 0) {
        return "오늘";
    } else if (dayDiff > 0) {
        return `D-${dayDiff}`;
    } else {
        return `D+${Math.abs(dayDiff)}`;
    }
}


export const BestChallengeItem = styled.div`
    width: ${props => props.width || "320px"}; 
    height : auto;

    box-sizing: border-box;
    background-color: ${props => props.$backgroundColor || "#F9F9F9"};  

    border-radius: 25px;
    flex-shrink: 0;  /* 아이템들이 줄어들지 않도록 설정 */
    margin-right: ${props => props.$marginRight};  /* 아이템들 간의 간격 설정 */
    margin-bottom: ${props => props.$marginBottom};

    padding : 25px 30px;

    display: flex;
    flex-direction: column;

    scroll-snap-align: start;

    text-decoration: none;
    color : #000000;

    &:hover {
        ${props => props.version && `
            opacity: 0.5;
        `}
    }
`;  


export const BestChallengeInfoTitle = styled.p`
    font-family: 'PretendardVariable';
    font-size: 17px;
    font-weight: 500;
    line-height: 20.29px;
    text-align: left;
`;

export const FirstRowBox = styled.div`
    width: 100%;
    height : auto;
    display: flex;

    margin-bottom: 15px;
`;

export const FirstColumnBox = styled.div`
    flex : 8;
    height: 100%;

`;

export const SecondColumnBox = styled.div`
    flex : 2;
    height: 100%;

    display: flex;
    justify-content: center;
`;

export const DdayBox = styled.div`
    width: 46px;
    height: 46px;
    border-radius: 23px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'PretendardVariable';
    font-size: 16px;
    font-weight: 700;
    line-height: 21.48px;
    letter-spacing: -0.02em;
    text-align: center;
    background-color: ${({ $challengeEndDate }) => {
        const dayString = handleChangeDay($challengeEndDate);
        if (dayString.includes("D-")) {
            const daysLeft = parseInt(dayString.split("D-")[1], 10);
            return '#FF7575'; // 기본 색상
        } else if (dayString.includes("D+")) {
            return '#a2a2a2'; // 과거 날짜에 대한 색상
        } else {
            return '#ff5b5b'; // "오늘"에 대한 색상
        }
    }};
    color: #FFFFFF;
`;


export const SecondRowBox = styled.div`
    width: 100%;
    height : auto;

    display: flex;
    flex-direction: ${props => props.$flexDirection};
`;


export const TogetherContent = styled.p`
    font-family: 'PretendardVariable';
    font-size: 13px;
    font-weight: 500;
    line-height: 16.9px;
    letter-spacing: -0.02em;

    color : #989898;
`;

export const TogetherCount = styled.span`

    font-family: 'PretendardVariable';
    font-size: 13px;
    font-weight: 500;
    line-height: 16.9px;
    letter-spacing: -0.02em;
    color : #FF7575;    
    margin-left: 3px;
`;

export const PeopleImg = styled.img`
    width: 15px;
    height : 15px;
    margin-right: 5px;
`

export const TagBox = styled.div`
    width: auto;
    margin-top: 10px;
`;

export const Tag = styled.div`
    font-family: 'PretendardVariable';
    font-size: 12px;
    font-weight: 500;
    line-height: 15.6px;
    letter-spacing: -0.02em;
    text-align: left;
    display: inline-block;
    background-color: #EAEAEA;
    color : #7D7D7D;

    padding : 3px 10px;
    box-sizing: border-box;
    margin-right: ${props => props.$marginRight || "10px"};
    margin-bottom: 5px; // 아래쪽 마진 추가
    border-radius: 5px;
    
    // 줄바꿈 시 간격을 위한 속성 추가
    vertical-align: top;
    line-height: 1.5; // 줄 간격 조정
`;