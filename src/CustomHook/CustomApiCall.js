import { useEffect, useState } from "react"
import { fetchDataFromApi } from "../Utils/Api/Api"


const useFetch = (endpoint) => {
    const [data, setData] = useState()

    const APiCall = async () => {
        const res = await fetchDataFromApi(endpoint)
        setData(res)
    }
    
    useEffect(() => {
        APiCall()
    }, [endpoint])
    
    return {data}
}
 
export default useFetch