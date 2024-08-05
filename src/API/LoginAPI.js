import axios from "axios";

export const handleLogin = async (email) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}api/login`,
            {
                params: {
                    email
            }
            });
        console.log(response);
        return response;
    } catch (error) {
        console.error('Error during login request:', error);
    }
};

export const handleLogout = async () => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_URL}api/cookie/delete`);
        console.log(response);
        console.log("logout success");
    } catch (error) {
        console.error('logout fail', error);
    }    
}

export const handleTest = async () => {

    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}api/test`,
            {withCredentials: true}
        );
        console.log(response);
        console.log("api test success");
    } catch (error) {
        console.error("api test fail", error);
    }
}

export const handlePostRegister = async (newUserInfo) => {

    try {
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
        return response.data;
    } catch (error) {
        console.log("handlePostRegsiter fail", error);
    }
}

