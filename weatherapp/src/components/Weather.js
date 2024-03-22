import React, { useEffect, useState } from 'react'
export default function Weather({lat,lon}) {
    const [loc, setLoc] = useState();
    const [imag, setImag]= useState();
    const [txt, setTxt] = useState(); 
    const [contry, setContry] = useState();
    const [temp, setTemp] = useState();
    const [temp2, setTemp2] = useState();
    const [date, setDate] = useState();
    // const lat=42.3478;
    // const lon =-71.0466; 
    useEffect(()=>{
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat}%2C${lon}`;
        const options = {
	        method: 'GET',
	        headers: {
		        'X-RapidAPI-Key': 'cac67db0f1mshd481c4a651bea42p11b092jsn7781490d5532',
		        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	        }
        };
        const fetchData = async ()=>{
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                setLoc(result.location.name)
                setImag(result.current.condition.icon)
                setTxt(result.current.condition.text)
                setContry(result.location.country)
                setTemp(result.current.temp_c)
                setTemp2(result.current.temp_f)
                setDate(result.current.last_updated)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
        
    },[lat,lon])
    //const update=document.querySelector('.update') 
  return (
    <>
    <div className="container my-4 d-flex justify-content-center align-items-center">
    <div className="card" style={{width: "19rem", boxShadow : "0px 0px 15px black",}}>
        <img src={imag} className="card-img-top" alt="..." style={{backgroundColor : "#999", height:"260px"}}/>
        <div className="card-body" style={{fontSize:"20px"}}>
            <p><p className='country'><b>Country</b> : <span style={{color:"#333"}}>{contry}</span></p></p>
            <p className="card-title" style={{fontFamily : "sans-serif", color:"#333"}}><b>City</b> : {loc} <span style={{color:"#888"}}>({txt})</span> </p>
            <p className='temp_c'><b>Temperature(℃)</b> : {temp} </p>
            <p className='temp_f'><b>Temperature(℉)</b> : {temp2} </p>
            <p className='updated' style={{color:"#888"}}>Updated : {new Date(date).toLocaleString()}</p>
  </div>
</div>
    </div>
    </>
  )
}
