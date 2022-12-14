import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState('');
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=23ba45a0264d35810149d203ca8ded0d`;
  const fetchData = (event)=>{
    if(event.key === 'Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
      })
      setLocation('');
    }
    
  }
  return (
    <div className="app">
      <div className="search">
        <input type="text" placeholder='search location...' value={location}
        onChange={event=>setLocation(event.target.value)} 
        onKeyPress={fetchData}/>
      </div>
      {data.name != undefined && 
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <p>{data.main.temp.toFixed()}°F</p> : null}
            </div>
            <div className="description">
              {data.weather ? <p className='bold'>{data.weather[0].main}</p>:null}
            </div>
          </div>

          <div className="bottom">
            <div className="feels">
              {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> :null}
              <p className='bold'>feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity}%</p> : null}
              <p className='bold'>humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p>{data.wind.speed}MPH</p> : null}
              <p className='bold'>wind speed</p>
          </div>
        </div>

      </div>
      }
      
    </div>
  );
}

export default App;
