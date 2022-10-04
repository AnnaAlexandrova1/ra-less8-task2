import { useState, useEffect } from "react";

export default function useJsonFetch(url, opts = null) {
    const [data, setDate] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const responce = await fetch(url, opts);
                if(!responce.ok) throw new Error (`${responce.url}${responce.status} ${responce.statusText}`)
                const data = await responce.json();
                setDate(data);
                setError(null);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url, opts])
    return [{data, error, loading}]
}