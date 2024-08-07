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
        // console.log("getUserInfo success");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("getUserInfo fail", error);
        return 500;
    }
}

export const getUserAbleTo = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}api/user/duedate`,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        // console.log("getUserAbleTo success");
        // console.log("after", response);
        return response.data;
    } catch (error) {
        console.log("getUserAbleTo fail", error);
        return 500;
    }
}
