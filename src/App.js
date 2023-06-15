import logo from './logo.svg';
import "./index.css"
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import NavBar from './navBar';
import Input from './input';
import Body from './body';
import { useState } from 'react';
import { set } from 'react-hook-form';

function App() {
  let [location, setLocation] = useState("Mandalay");
  const [inputedValue, setInputedValue] = useState("");
  let [weather, setWeather] = useState({});
  const [cel, setCel] = useState("35");
const [fur, setFur] = useState("3F");
const [date, setDate] = useState();
const [wCondition, setWCondition] = useState("Cloudy");
const [humidity, setHumidity] = useState("60%");
const [pressure, setPressure] = useState("1003");
const [localTime, setLocalTime] = useState()
const [wind, setWind]= useState("6.2")
const [country, setCountry] = useState("MM");
const [imgLink, setImgLink] = useState("https://cdn-icons-png.flaticon.com/128/2315/2315309.png")
  return (
   <div className='App'>
  <h1 className='h1'>Weather App</h1>
    <Input
    setImgLink={setImgLink}
     inputedValue={inputedValue}
     setInputedValue={setInputedValue} 
     weather={weather}
     setWeather={setWeather}
     location={location}
     setLocation={setLocation}
     cel={cel}
     setCel={setCel}
     fur={fur}
     setFur={setFur}
     date={date}
     setDate={setDate}
     wCondition={wCondition}
     setWCondition={setWCondition}
     humidity={humidity}
      setHumidity={setHumidity}
      pressure={pressure}
      setPressure={setPressure}
      setWind={setWind}
      setCountry={setCountry}
    />
    <Body 
      weather={weather}
      setWeather={setWeather}
      location={location}
      setLocation={setLocation}
      cel={cel}
      setCel={setCel}
      fur={fur}
      setFur={setFur}
      date={date}
      setDate={setDate}
      wCondition={wCondition}
      setWCondition={setWCondition}
      humidity={humidity}
      setHumidity={setHumidity}
      pressure={pressure}
      setPressure={setPressure}
      wind={wind}
      country={country}
      imgLink={imgLink}
    />
   </div>
  )
}

export default App;
