import { testAPI } from "../../API/TestAPI";
import { BaseContainer } from "../../Layout/Container";

function IntroPage() {
    const handleTestAPI = () => {
        const result = testAPI();
        console.log(result);
    }
    return (
        <BaseContainer>
            IntroPage
            <button onClick = {handleTestAPI}>테스트</button>
        </BaseContainer>
    )
}

export default IntroPage;