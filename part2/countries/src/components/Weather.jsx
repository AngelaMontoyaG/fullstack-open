import { useState, useEffect } from 'react'
import countryService from '../services/countries' 

const Weather = ({ city }) => {
   const [weather, setWeather] = useState(null)

   useEffect(() => {
      if (!city) return

      countryService
         .getWeather(city)
         .then(weatherData => {
         setWeather(weatherData)
         })
         .catch(error => {
         console.error('Error loading weather data:', error)
         })
   }, [city])

   if (!weather) return <p>Loading weather data...</p>

   const iconCode = weather.weather[0].icon
   const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

   return (
      <div>
         <h3>Weather in {city}</h3>
         <p>temperature {weather.main.temp} Celsius</p>
         <img src={iconUrl} alt={weather.weather[0].description} />
         <p>wind {weather.wind.speed} m/s</p>
      </div>
   )
}

export default Weather