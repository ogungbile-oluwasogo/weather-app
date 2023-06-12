import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import axios from "axios";
import WeatherList from "./components/weather/WeatherList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [searchCity, setSearchCity] = useState("");
  const [loading, setLoading] = useState("Please Wait");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        let url = "";
        let apiKey = "0868c702b0e045d4e91b1c786d32c6ab";

        if (searchCity) {
          url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&APPID=${apiKey}`;
        } else {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

              const response = await axios.get(url);
              setData({
                name: response.data.name,
                country: response.data.sys.country,
                temp: response.data.main.temp,
                pressure: response.data.main.pressure,
                humidity: response.data.main.humidity,
                windspeed: response.data.wind.speed,
                cloud: response.data.weather[0].main,
                description: response.data.weather[0].description,
              });
            },
            (error) => {
              // console.error("Error getting geolocation:", error);
              setError(true);
            }
          );
        }

        if (url) {
          const response = await axios.get(url);
          setData({
            name: response.data.name,
            country: response.data.sys.country,
            temp: response.data.main.temp,
            pressure: response.data.main.pressure,
            humidity: response.data.main.humidity,
            windspeed: response.data.wind.speed,
            cloud: response.data.weather[0].main,
            description: response.data.weather[0].description,
          });
          // console.log(data);
        }
      } catch (error) {
        console.error("Error Occured", error);
        setError(true);
      }
    };
    setLoading(false);
    setError(false);

    fetchWeather();
  }, [searchCity]);

  const handleSearch = async (search) => {
    setSearchCity(search);
  };

  let content = <WeatherList data={data} />;

  if (error) {
    content = (
      <p className="msg">
        Please turn on your location or enter valid city name (e.g Ibadan)
      </p>
    );
  } else if (loading) {
    content = <p>Please Wait...</p>;
  }

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      {/* <WeatherList data={data} /> */}
      {content}
      <Footer />
    </div>
  );
}

export default App;
