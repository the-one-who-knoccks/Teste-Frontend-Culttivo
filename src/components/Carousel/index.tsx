import { ArrowLeft, ArrowRight, Rainbow, Sun, Warning } from 'phosphor-react'
import { CarouselCard, Container, ColorInfo, WarningCard } from './styles'
import { FormEvent, MutableRefObject, useEffect, useRef, useState } from 'react'
import axios from 'axios'

interface WeatherData {
  id: string
  name: string
  date_br: string

  humidity: {
    max: number
    min: number
  }
  rain: {
    probability: number
  }

  temperature: {
    max: number
    min: number
  }
  sun: {
    sunrise: number
    sunset: number
  }
  text_icon: {
    icon: {
      dawn: string
      morning: string
      afternoon: string
      night: string
      day: string
    }
    text: {
      phrase: {
        reduced: string
      }
    }
  }
}

export function Carousel() {
  const carrossel = useRef() as MutableRefObject<HTMLDivElement>
  const [dados, setarDados] = useState<WeatherData[]>([])
  useEffect(() => {
    axios
      .get(
        'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/6754/days/15?token=26fe4985e1cf1cee5e7cfdcf7e6b62e3',
      )
      .then((response) => {
        const responseData = response.data.data as Record<string, WeatherData>
        const dataAsArray = Object.values(responseData)

        setarDados(dataAsArray)

        console.log(dataAsArray)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const clilcarParaEsquerda = (e: FormEvent) => {
    e.preventDefault()
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth
  }

  const clicarParaDireita = (e: FormEvent) => {
    e.preventDefault()
    carrossel.current.scrollLeft += carrossel.current.offsetWidth
  }

  if (!dados) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <button>
        <ArrowLeft onClick={clilcarParaEsquerda} />
      </button>
      <button onClick={clicarParaDireita}>
        <ArrowRight />
      </button>
      <div className="carousel" ref={carrossel}>
        {dados.map((item) => (
          <CarouselCard key={item.id}>
            <header>
              <Sun size={30} color="#ccc000" />
              <div>
                <strong>{item.date_br}</strong>
                <p>Terça-feira</p>
              </div>

              <article>{item.text_icon.text.phrase.reduced}</article>

              <table>
                <tbody>
                  <tr>
                    <th>Temperatura:</th>

                    <ColorInfo variant="min">
                      {item.temperature.min}°c
                    </ColorInfo>

                    <ColorInfo variant="max">
                      {item.temperature.max}°c
                    </ColorInfo>
                  </tr>
                  <tr className="line" />
                </tbody>

                <tbody>
                  <tr>
                    <th>Umidade:</th>
                    <ColorInfo variant="umidade">
                      {item.humidity.min}% - {item.humidity.max}%
                    </ColorInfo>
                  </tr>
                  <tr className="line" />
                </tbody>

                <tbody>
                  <tr>
                    <th>Sol:</th>
                    <ColorInfo variant="nascer/pordosol">
                      {item.sun.sunrise} - {item.sun.sunset}
                    </ColorInfo>
                  </tr>
                  <tr className="line" />
                </tbody>

                <tbody>
                  <tr>
                    <th>Chuva:</th>
                    <ColorInfo variant="chuva">
                      {item.rain.probability}%
                    </ColorInfo>
                  </tr>
                  <tr className="line" />
                </tbody>
              </table>
              <WarningCard variant="inferior">
                <Warning className="warning" size={60} />
                Temperatura máxima deste dia será superior a máxima média do
                período.
              </WarningCard>
            </header>
          </CarouselCard>
        ))}
      </div>
    </Container>
  )
}
