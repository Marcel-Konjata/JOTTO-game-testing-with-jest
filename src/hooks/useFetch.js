import React from "react";
import { fetchRandomWord } from "./../API/fetch";

export function useFetch() {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        (async () => {
            try {
                const response = await fetchRandomWord();
                const resolve = response.data;
                setData(resolve);
            } catch (error) {
                console.log(error);
                setError(error);
            }
        })();
    });

    return { data, error };
}
