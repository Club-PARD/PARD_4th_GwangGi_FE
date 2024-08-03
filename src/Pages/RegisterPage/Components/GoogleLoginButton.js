import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import {handleLogin} from "../../../API/LoginAPI";
const GoogleLoginButton = ({ navigate }) => {
    const handleSuccess = async (res) => {
        try {
            const decodedToken = jwtDecode(res.credential);
            const result_email = decodedToken.email;

            sessionStorage.setItem('user_email', result_email);

            // 로그인 요청 처리
            const response = await handleLogin(result_email);
            const is_new_user = response.data.response_object._new_user;
            if (is_new_user === true) {
                alert("신규 회원입니다.");
                navigate("/register");
            } else {
                alert("기존 회원입니다.");
                navigate("/home");
            }

        } catch (error) {
            console.error("로그인 처리 중 오류 발생:", error);
        }
    };
    return (
        <div>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                <GoogleLogin
                    onSuccess={handleSuccess}
                    onFailure={(err) => {
                        console.log(err);
                    }}/>
            </GoogleOAuthProvider>
        </div>
    );
};

export default GoogleLoginButton;
