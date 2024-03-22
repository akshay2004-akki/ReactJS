import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState({});
    const fetchData  = async ()=>{
        const data = await fetch("https://api.github.com/users/akshay2004-akki")
        const response = await data.json();
        console.log(response)
        setData(response)
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <>
        <div className='bg-gray-700 p-4'>
            <p className='text-center text-white'>Github Follwers : {data.followers} </p>
            <img src={data.avatar_url} alt="" style={{height:"300px", width:"300px"}}/>
        </div>
    </>
  )
}

export default Github

