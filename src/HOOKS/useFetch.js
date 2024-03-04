import { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((result) => result.json())
            .then((data) => {
                setCharacter(data.results);
            })
            .finally(() => setLoading(false))
            .catch((error) => {
                console.error('Error al obtener datos:', error);
            });

    }, []);

    return {
        character,
        loading
    }
}

export default useFetch