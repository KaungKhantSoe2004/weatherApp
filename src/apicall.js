import axios from "axios";
export const apiCall = (inputedValue)=> {
   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputedValue}&appid=189271b827844bff7388350c44848615&units=metric`)
    .then((Response)=> {
        console.log(Response.data)
return Response.data
    })
}
