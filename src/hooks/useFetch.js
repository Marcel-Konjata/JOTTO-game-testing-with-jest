import React from "react";
import { fetchRandomWord } from "./../API/fetch";

export function useFetch() {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        (async () => {
            try {
                const resolve = await fetchRandomWord();
                let result = resolve.toString()
                setData(result);
            } catch (error) {
                console.log(error);
                setError(error);
            }
        })();
    },[]);

    return { secretWord: data, fetchError: error };
}