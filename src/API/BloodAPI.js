import axios from "axios";

export const postBloodData = async (newBloodData) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_URL}api/donation`,
            newBloodData,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        // console.log("postBloodData success");
        // console.log(response);
        return response.data;
    } catch (error) {
        console.log("postBloodData fail", error);
    }
}