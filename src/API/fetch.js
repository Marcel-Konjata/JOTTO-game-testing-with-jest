import Axios from "axios";

const API_key = "MWH7CJKL";
const URL = "https://random-word-api.herokuapp.com";

export const fetchRandomWord = () => {
    return Axios.get(`${URL}/word?`, {
        params: {
            key: API_key,
            number: 1
        }
    });
};



