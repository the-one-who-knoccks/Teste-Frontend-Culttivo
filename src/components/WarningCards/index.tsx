/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { WarningCards } from './styles'
import { Warning, WarningCircle } from 'phosphor-react'

interface Temperature {
  max: number
  min: number
}

interface WeatherData {
  temperature: Temperature
  // Outras propriedades relevantes da resposta da API
}

interface WeatherResponse {
  data: Record<string, WeatherData>
}

export function Alert() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])

  useEffect(() => {
    axios
      .get<WeatherResponse>(
        'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/6754/days/15?token=26fe4985e1cf1cee5e7cfdcf7e6b62e3',
      )
      .then((response) => {
        const responseData = response.data.data
        const dataAsArray = Object.values(responseData)
        setWeatherData(dataAsArray)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  if (weatherData.length === 0) {
    return <p>Loading...</p>
  }

  const maxTemperatures = weatherData.map((data) => data.temperature.max)
  const minTemperatures = weatherData.map((data) => data.temperature.min)

  const averageMaxTemperature =
    maxTemperatures.reduce((acc, curr) => acc + curr, 0) /
    maxTemperatures.length

  const averageMinTemperature =
    minTemperatures.reduce((acc, curr) => acc + curr, 0) /
    minTemperatures.length

  const currentDayData = weatherData[0] // Suponha que você queira verificar o primeiro dia
  console.log(currentDayData.temperature)
  return (
    <div>
      {currentDayData.temperature.max <= averageMaxTemperature ? (
        <WarningCards variant="superior">
          <Warning className="warning" size={60} />
          Temperatura máxima deste dia será superior a máxima média do período.
        </WarningCards>
      ) : (
        <WarningCards variant="inferior">
          <WarningCircle className="warning" size={60} />
          Temperatura máxima deste dia será inferior a minima média do período.
        </WarningCards>
      )}
    </div>
  )
}

export default Alert
