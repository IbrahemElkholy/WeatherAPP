import React from "react";
 
const Form = (props) => {

    return (
        <form onSubmit={props.getweather} className="weather-box">
            <h2>Weather Application</h2>
            <input type="text" name="city" placeholder="Enter your city..." />
            <input type="text" name="country" placeholder="Enter your country" />
            <button className="btn">Get Weather </button>
            <div className="weather-data">
            {
                props.city && <p>City: {props.city}</p>
            }
            {
                props.country && <p>Country: {props.country}</p>
            }
            {
                props.des && <p>Description: {props.des}</p>
            }
            {
                props.maxTemp && <p>Max temp: {props.maxTemp}</p>
            }
            {
                props.minTemp && <p>Min temp: {props.minTemp}</p>
            }
            {
                props.humidity && <p>Humidity: {props.humidity}</p>
            }
            {
                props.error && <p>Error {props.error}</p>
            }
            
        </div>
        </form>
    )

}
export default Form