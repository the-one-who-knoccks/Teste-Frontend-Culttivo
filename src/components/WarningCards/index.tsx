import { useEffect, useState } from 'react'
import axios from 'axios'
import { WarningCards } from './styles'
import { Warning, WarningCircle } from 'phosphor-react'

interface Temperature {
  max: number
  min: number
}

interface WeatherData {
  temperature: Temperature
}

interface WeatherResponse {
  data: Record<string, WeatherData>
}

export function Alert() {
  const [DadosTempo, setarDadosTempo] = useState<WeatherData[]>([])

  useEffect(() => {
    axios
      .get<WeatherResponse>(
        'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/6754/days/15?token=143ce6ea1c2a420aeed615812c59bf15',
      )
      .then((response) => {
        const respostaDados = response.data.data
        const dadosArray = Object.values(respostaDados)
        setarDadosTempo(dadosArray)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  if (DadosTempo.length === 0) {
    return <p>Falha ao carregar dados...</p>
  }

  const maxTemperaturas = DadosTempo.map((data) => data.temperature.max)
  const minTemperatures = DadosTempo.map((data) => data.temperature.min)

  const mediaMaxTemperatura =
    maxTemperaturas.reduce((acc, curr) => acc + curr, 0) /
    maxTemperaturas.length

  const mediaMinTemperatura =
    minTemperatures.reduce((acc, curr) => acc + curr, 0) /
    minTemperatures.length

  const dadosAtuais = DadosTempo[0]
  return (
    <div>
      {dadosAtuais.temperature.max >= mediaMaxTemperatura ? (
        <WarningCards variant="superior">
          <Warning className="warning" size={60} />
          Temperatura máxima deste dia será superior à média máxima do período.
        </WarningCards>
      ) : (
        <WarningCards variant="inferior">
          <WarningCircle className="warning" size={60} />
          Temperatura máxima deste dia será inferior à média mínima do período.
        </WarningCards>
      )}
    </div>
  )
}

export default Alert
