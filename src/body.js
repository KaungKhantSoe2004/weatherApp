import { useState } from 'react'
import { set } from 'react-hook-form'
import {CiLocationOn} from 'react-icons/ci'

const Location = ({location, setLocation, date, setDate, country})=> {
    const months = [
        "January", "February" , "March", "April" ,"May", "June", 
        "July", "August",  "October", "November", "December"
    ]
    const days = [
      "nothing",  "Monday", "Tuesday", "Wednesday", "Thursday", 
    "Friday", "Saturday", "Sunday"
    ]
  
const todayDate = new Date();
let year = todayDate.getFullYear();
let month = months[todayDate.getMonth()];
let day = days[todayDate.getDay()]
let dat = todayDate.getDate();
setDate(`${year}, ${month}, ${dat}`)
console.log( "Date is", date)
    return(
     <div className='lo'>
         <h1 className="Hlocation">{location}/ {country}</h1>
     <div className="locationAndDate">
       <div className="location">
        <icon />
        <div>{location}</div>
       </div>
       <div className="date">
        <i />
        <div>{day} ({date}) </div>

       </div>
     </div>
     </div>  )
}

const Temp = ({cel, setCel, fur, setFur, imgLink})=> {
    const WeatherImg = [
        
    ]
    return(
        <div className="temp">
            <div className="tempText">
{cel}C
            </div>
            <div className="tempPhoto">
<img src={imgLink} />
            </div>
        </div>
    )
}
 
const Sum = ({  wCondition, setWConditon , weather, humidity, setHumidity, pressure, wind})=> {
    return(
        <div className="sum">
<h2>{wCondition}</h2>
<div className=''>
   Humidity : {humidity}
</div>
<div className=''>
   pressure : {pressure}
</div>
<div className=''>
    Wind : {wind} km/h
</div>
        </div>
    )
}
export default function Body({imgLink, country,wind, weather, setWeather, location, setLocation, cel, setCel, fur, setFur, date, setDate,  wCondition, setWConditon,humidity, setHumidity, pressure, setPressure}){
    
    return(
        <div className="body">
<Location 
location={location}
date={date}
setLocation={setLocation}
setDate={setDate}
weather={weather}
pressure={pressure}
country={country}
/>
<Temp 
cel={cel}
setCel={setCel}
fur={fur}
setFur={setFur}
weather={weather}
imgLink={imgLink}
/>
<Sum 
wCondition={wCondition}
setWConditon={setWConditon}
weather={weather}
humidity={humidity}
setHumidity={setHumidity}
pressure={pressure}
wind={wind}
/>
        </div>
    )
}