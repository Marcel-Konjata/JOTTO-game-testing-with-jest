import Axios from "axios";

const API_key = "LUEP44XF";
const URL = "https://random-word-api.herokuapp.com";

/**
 * axios async await func that cals server API
 * @returns {object} data from server/error
 */

export const fetchRandomWord = async () => {
    try {
        const response = await Axios.get(`${URL}/word`,{params: {key: API_key, number: "1"}})

        let data = await response.data;
        return data;
    } catch (error) {
        return error;
    }
};
