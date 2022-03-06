import React, { useEffect, useState } from "react";

const Temp = () => {
   const [city, setcity] = useState(null);
   const [search, setsearch] = useState("Mumbai");

   useEffect(()=>{
     const fetchApi=async()=>{
       const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=25ac874b34b017d52f0c47b63c46fdca`;
       const response=await fetch(url);
       const resJson= await response.json();
       setcity(resJson.main);
       
     };



     fetchApi();
   },[search])
  return (
  
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="Search"
            className="inputfield"
            placeholder="Enter Your Place"
            onChange={(e) => {setsearch(e.target.value)}}
          />
        </div>
         {!city ?(<p> no data found</p>)
        :(    <>
                <div className="temp-info" > 
                <h1 className="cloud"><i class="		fas fa-cloud-sun"></i> </h1>
                <h1 className="location">
                  <i className="fa fa-street-view"></i> {search}
                </h1>
                <h2 className="temp">{city.temp}°Cel</h2>
                <h3 className="temp-min-max"> Min 🧊: {city.temp_min}° | Max 🔥: {city.temp_max}°</h3>
                <h2 className="humidity"> Humidity 💧 {city.humidity}</h2>
              </div>
              <div className="wave -one"></div>
              <div className="wave -two"></div>
              <div className="wave -three"></div>
           </>
          
        )}
        </div>
       
    </>
  );
};
export default Temp;
