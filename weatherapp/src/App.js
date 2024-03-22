// import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import React, { useState, useRef } from 'react';

function App() {
  const [latitude, setLatitude] = useState(0); // Default latitude
  const [longitude, setLongitude] = useState(0); // Default longitude
  const latt=useRef(null);
  const lonn=useRef(null)

  // Handler function to update latitude and longitude based on user input
  const handleLocationChange = () => {
    setLatitude(latt.current.value); // Example latitude
    setLongitude(lonn.current.value); // Example longitude
  };

  return (
    <>
      <div>
        <label>
          Enter Latitude:
          <input type="number" value={latitude} onChange={(e) => setLatitude(e.target.value)} ref={latt} />
        </label>
        <label>
          Enter Longitude:
          <input type="number" value={longitude} onChange={(e) => setLongitude(e.target.value)} ref={lonn}/>
        </label>
        <button onClick={handleLocationChange}>Update Location</button>
      </div>

      <Weather lat={latitude} lon={longitude} />
    </>
  );
}

export default App;
