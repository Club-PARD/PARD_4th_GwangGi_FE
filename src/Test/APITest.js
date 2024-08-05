import { testAPI } from "../API/TestAPI";

function APITest() {
    const handleTestAPI = () => {
        const result = testAPI();
        console.log(result);
    }
    return (
        <div>
            <h2>API Test</h2>
            <button onClick={handleTestAPI}>테스트</button>
        </div>
    )
}

export default APITest;