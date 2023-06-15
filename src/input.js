import axios from "axios"
import {FcSearch} from "react-icons/fc"
import { apiCall } from "./apicall"
import { useEffect, useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
import { img } from "./img";

export default function Input ({ setCountry, inputedValue, setInputedValue,  weather,setImgLink,setWeather,location, setLocation, cel, setCel, fur, setFur, date, setDate,  wCondition,  setWCondition, humidity, setPressure,setHumidity, setWind}){
    let wea ;
   let imgArray = img;
   const [index, setIndex] = useState(-1);
   console.log(imgArray)
const search = ()=> {
try{
   
 index ===3 ? setIndex(0): setIndex(index+1);
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputedValue}&appid=189271b827844bff7388350c44848615&units=metric`)
       .then(Response => setWeather(Response.data))
       setLocation(weather.name)
    if (typeof weather.main!=undefined){
       console.log(weather.main.temp, "ddd")
       setCel(weather.main.temp)
       setHumidity(weather.main.humidity)
       setPressure(weather.main.pressure)
       setWCondition(weather.weather[0].description.toUpperCase())
       setWind(weather.wind.speed)
       setCountry(weather.sys.country)
       setImgLink(imgArray[index])
      
    //
    }
  
  
}  catch(error){
    alert("Sorry Can't find the city")
}

}
console.log("weather is", weather)

    return(
        <div className="inputContainer">
<div className="inputAndButtonContainer">
<input type="email" placeholder="Enter Location"
onChange={(e)=> {
    setInputedValue(e.target.value.toLowerCase())
}}
/>
<button onClick={()=> {
    search();
    search()
}}>
<FcSearch />
</button>
</div>
        </div>
    )
}