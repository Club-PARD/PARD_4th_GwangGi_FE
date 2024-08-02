import axios from "axios";

export const testAPI = async () => {
    try {
        const response = axios.get(`${process.env.REACT_APP_URL}api/test`)
        console.log(response);
    } catch (error) {
        console.log("testAPI", error);
    }    
}