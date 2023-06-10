import React, { useEffect, useState } from 'react';

function useFetchData(selection) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const API_URL = 'https://the-one-api.dev/v2';
    const API_Token = import.meta.env.VITE_API_KEY_2;
    let options = {
        headers: {
            method: 'GET',
            Authorization: `Bearer ${API_Token}`
        }
    }
    
    useEffect(() => {
        async function fetchData() {
            if (!selection) {
                return;
            }
            const url = `${API_URL}/${selection}`
            console.log(url);
            try {
                setIsLoading(true)
                const response = await fetch(url, options)
                const apiData = await response.json()
                console.log(apiData);
                setData(apiData)
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [selection])
    return { data, error, isLoading };
}

export default useFetchData;