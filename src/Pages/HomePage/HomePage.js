import { handleTest } from "../../API/LoginAPI";

function HomePage() {
    
    return (
        <div>
            <button onClick={handleTest}>테스트</button>
        </div>
    )
}

export default HomePage;