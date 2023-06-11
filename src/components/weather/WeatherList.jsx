import React from "react";
import "./WeatherList.css";

const WeatherList = ({ data }) => {
  return (
    <div className="response">
      <div className="flex_cloud">
        <h1 className="name">{data.name}</h1>
        <h2 className="clouds">{data.cloud}</h2>
      </div>
      <p className="country">{data.country}</p>

      <table>
        <tbody>
          <tr>
            <td>Description</td>
            <td>{data.description}</td>
          </tr>
          <tr>
            <td>Temperature</td>
            <td>{data.temp}</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{data.humidity}</td>
          </tr>
          <tr>
            <td>Winspeed</td>
            <td>{data.windspeed}</td>
          </tr>
          <tr>
            <td>Pressure</td>
            <td>{data.pressure}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherList;
