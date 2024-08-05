import axios from "axios";

export const handlePostChallenge = async (newChallengInfo) => {

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_URL}api/challenge/create`,
            newChallengInfo,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log("handlePostChallenge success");
        return response.data;
    } catch (error) {
        console.log("handlePostChallenge fail", error);
    }
}