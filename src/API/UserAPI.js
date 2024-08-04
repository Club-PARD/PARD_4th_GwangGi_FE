import axios from "axios";

export const getUserInfo = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}api/user`,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log("handlePostRegsiter success");
        return response.data.response_object;
    } catch (error) {
        console.log("handlePostRegsiter fail", error);
        return 500;
    }
}