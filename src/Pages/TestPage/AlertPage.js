import { BaseContainer } from "../../Layout/Container";
import { GuideText } from "./GuideText";
import { TestrContainer } from "./TestContainer";

function TestPage() {
    
    return (
        <BaseContainer>
            <TestrContainer>
                <GuideText>
                    헌혈 자가 문진 <br/><p>주의사항</p>
                </GuideText>
            </TestrContainer>
        </BaseContainer>
    )
}

export default TestPage;