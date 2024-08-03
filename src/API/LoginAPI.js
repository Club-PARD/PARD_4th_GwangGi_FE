import axios from "axios";

export const handleLogin = async (email) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}api/login`,
            {
                params: {
                    email
            }
        });
        return response;
    } catch (error) {
        console.error('Error during login request:', error);
    }
};

export const handleTest = async () => {

    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}api/test`,
            {withCredentials: true}
        );
        console.log("api test success");
    } catch (error) {
        console.error("api test fail", error);
    }
}

export const handlePostRegister = async (newUserInfo) => {

    try {
        console.log("newUserInfo", newUserInfo);
        const response = await axios.post(
            `${process.env.REACT_APP_URL}api/register`,
            newUserInfo,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log("handlePostRegsiter success");
    } catch (error) {
        console.log("handlePostRegsiter fail");
    }
}