import { useState } from "react";

export default function useLocalStorege(key,initialValue) {

    const [data, setData] = useState(()=>{
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : localStorage.setItem(key, JSON.stringify(initialValue)) ;
    })

    const handleChange = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setData(newValue);
    }
    return [data, handleChange];
}

