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
        // console.log("handlePostChallenge success");
        return response.data;
    } catch (error) {
        console.log("handlePostChallenge fail", error);
    }
}

export const getAllChallengeInfo = async (is_finished) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}api/challenge`,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    challenge_finished : is_finished,
                }
            }
        );
        // console.log("getAllChallengeInfo success");
        // console.log(response);
        return response.data;
    } catch (error) {
        console.log("getAllChallengeInfo fail", error);
    }
}

export const getSelectedChallengeInfo = async (challenge_id) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}api/challenge/${challenge_id}`,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        );
        // console.log("getSelectedChallengeInfo success");
        // console.log(response);
        return response.data;
    } catch (error) {
        console.log("getSelectedChallengeInfo fail", error);
    }
}

export const getMyChallengeInfo = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}api/challenge/my`,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        );
        // console.log("getMyChallengeInfo success");
        // console.log("good", response);
        return response.data;
    } catch (error) {
        console.log("getMyChallengeInfo fail", error);
    }
}
