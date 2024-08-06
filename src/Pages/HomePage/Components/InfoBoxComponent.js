import styled from "styled-components";

function InfoBoxComponent() {
    return (
        <div>
            <InfoBox>
                <InfoTitle>헌혈 가능 여부</InfoTitle>
                <RowBox>
                    <Img src="/Img/HomePage/Niddle.png" alt="주사바늘 이미지" />
                    <SubRowBox>
                        <FirstSentence>자가 문진 결과</FirstSentence>
                        <SecondSentence>아직 문진 내역이 없어요</SecondSentence>
                    </SubRowBox>
                    <TestBox>문진하기</TestBox>
                </RowBox>
            </InfoBox>
            <InfoBox>
                <InfoTitle>헌혈증 등록</InfoTitle>
                <RowBox>
                    <Img src="/Img/HomePage/Card.png" alt="자가문진 테스트 이미지" />
                    <SubRowBox>
                        <FirstSentence>판자를 모아, 생명 다리를 만들어요</FirstSentence>
                        <SecondSentence>등록하고 생명 판자 받기</SecondSentence>
                    </SubRowBox>
                    {/* <TestBox>문진하기</TestBox> */}
                    <RightImg src = "/Img/HomePage/Right.png" alt=  "오른쪽 이미지" width = "9px"/>
                </RowBox>
            </InfoBox>
        </div>
    );
}

export default InfoBoxComponent;

const Button = styled.button`
    width: 100px;
    height: 30px;
`;
const InfoBox = styled.div`
    width: 346px;
    height : 154.49px;
    border-radius: 25px;
    box-shadow: 0px 0px 5px 0px #00000017;
    background-color : #FFFFFF;
    
    padding : 27px 23px;
    box-sizing: border-box;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-bottom: 10px;
`;

const InfoTitle = styled.p`
    font-family: 'PretendardVariable';
    font-size: 22px;
    font-weight: 600;
    line-height: 28.6px;
    letter-spacing: -0.01em;
`;

const RowBox = styled.div`
    display: flex;
    width: 100%;
    height : auto;

    align-items: center;

    justify-content: space-between;
`;

const Img = styled.img`
    width: 38px;
    
`;

const RightImg = styled.img`
    width: 9px;

    margin-left: 37px;
`

const SubRowBox = styled.div`
    display: flex;
    flex-direction: column;

`;

const FirstSentence = styled.p`
    font-family: 'PretendardVariable';
    font-size: 13px;
    font-weight: 500;
    line-height: 16.9px;
    text-align: left;
    margin-bottom: 5px;
    color : #8C959C;

`;

const SecondSentence = styled.p`
    font-family: 'PretendardVariable';
    font-size: 17px;
    font-weight: 600;
    line-height: 22.1px;
    text-align: left;
    color : #6A6A6A;
`;

const TestBox = styled.button`
    width: 64.57px;
    height: 32.9px;
    border-radius: 7px;
    background-color: #FF7575;

    border : none;

    font-family: 'PretendardVariable';
    font-size: 13px;
    font-weight: 500;
    line-height: 16.9px;
    text-align: center;
    color : #FFFFFF;
`;
