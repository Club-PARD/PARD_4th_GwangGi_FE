import { Link } from "react-router-dom";
import { getUserInfo } from "../../API/UserAPI";

function HomePage() {
    
    return (
        <div>
            <button onClick={getUserInfo}>테스트</button>
            <Link to = "/mypage">마이 페이지</Link>
        </div>
    )
}

export default HomePage;