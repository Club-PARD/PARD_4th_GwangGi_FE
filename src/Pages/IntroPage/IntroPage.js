import { BaseContainer } from "../../Layout/Container";
import GoogleLoginButton from "../RegisterPage/Components/GoogleLoginButton";
import { useNavigate } from "react-router-dom";

function IntroPage() {

    const navigate = useNavigate();
    return (
        <BaseContainer>
            IntroPage
            <GoogleLoginButton navigate={navigate} />
        </BaseContainer>
    )
}

export default IntroPage;