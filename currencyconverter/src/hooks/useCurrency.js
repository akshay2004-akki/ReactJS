import { useEffect, useState } from 'react'

function useCurrency(currency) {
    const [data,setData] = useState({})
    useEffect(()=>{
        const fetchData = async ()=>{
            const datas = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            const response = await datas.json();
            console.log(response)
            setData(response[currency])
        }
        fetchData()
    },[currency])
    // console.log(data);
    return data;
}

export default useCurrency