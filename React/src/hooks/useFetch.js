import { useEffect, useState } from "react";

export function useFetch (url, options = {}) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        fetch(url
        ).then(r => r.json()).then(data => {
            setData(data)
        })
    }, []);

    return {
        loading, data, errors
    }
}
