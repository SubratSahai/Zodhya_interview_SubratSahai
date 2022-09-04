import React, { useState } from 'react'
import axios from 'axios'
import Signin from './pages/Signin'
import {Routes,Route,useNavigate} from 'react-router-dom'
function App() {
  const [data, setData] = useState({})
  const [datafinal,setDatafinal] = useState({})
  const [location, setLocation] = useState('')
  const [locationfinal,setLocationfinal] = useState('')
  const [time ,setTime] = useState('')
  const [time1,setTime1] = useState('')
 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=dc435e01a9939191ae5cf2b32193e132`
  
  const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${locationfinal}&units=imperial&appid=dc435e01a9939191ae5cf2b32193e132`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  const searchLocation1 = (event) => {
    if (event.key === 'Enter') {
      axios.get(url1).then((response) => {
        setDatafinal(response.data)
        console.log(response.data)
      })
      setLocationfinal('')
    }
  }
  const settingtime =(event)=>{
    if (event.key === 'Enter') {
      setTime1(time)
    }
  }
  const navigate = useNavigate();

  const navigateToSigin = () => {
    navigate('/signin');
  };
  return (

    <Routes>
      <Route path='/' element={
    <div className="app">
      <div className="search">
        
          <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Start Location'
          type="text" />

          <input
          value={locationfinal}
          onChange={event => setLocationfinal(event.target.value)}
          onKeyPress={searchLocation1}
          placeholder='Enter Destination'
          type="text" />

          <input
          value={time}
          onChange={event => setTime(event.target.value)}
          onKeyPress={settingtime}
          placeholder='Enter Time'
          type="text"/>

      <button onClick={navigateToSigin}>SignIN/LogIN</button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className='bottom'>
        <div className="location-bottom">
            <p>{datafinal.name}</p>
          </div>
          <div className="temp-bottom">
            {datafinal.main ? <h1>{datafinal.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description-bottom">
            {datafinal.weather ? <p>{datafinal.weather[0].main}</p> : null}
          </div>
        </div>
        <div className='answer'>
        {(data.weather && datafinal.weather && time1?((data.description==='Rain')&&(datafinal ==='Rain'))? <h1>YOU CAN NOT TRAVEL</h1> : <h1> YOU CAN TRAVEL</h1>:null)}
      </div>
      </div>
      
    </div>
      }/>
      <Route path='/signin' element={<Signin/>} />
    </Routes>
  );
}

export default App;