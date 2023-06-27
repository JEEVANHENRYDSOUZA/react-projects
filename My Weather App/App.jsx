import React, { useState } from 'react';


import "./App.css";
const api = {
  key: "c32e191369cbed0ec72d6b05aced9fe1",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

 


  const handleClick=(e)=>{

    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

    const handlechange=(e)=>{
      setQuery(e.target.value);
      console.log(query);
    }


  return (
        <div className='App'>
          <header className='App-header'><h1>Weather App</h1>
          
          <div>
             <input type="text" placeholder="Enter the city/town..."  onChange={handlechange}/>    
             <button onClick={handleClick}>Search</button>  
          </div>
          {typeof weather.main !== "undefined" ? (
            <div>
              {/* Location  */}
              <p>{weather.name}</p>
  
              {/* Temperature Celsius  */}
              <p>{weather.main.temp}°C</p>
  
              {/* Condition (Sunny ) */}
              <p>{weather.weather[0].main}</p>
              <p>({weather.weather[0].description})</p>
            </div>
          ) : (
            ""
          )}
          </header>
        </div>
  );
}

export default App;