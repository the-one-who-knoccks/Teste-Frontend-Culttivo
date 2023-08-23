import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { CarouselCard, Container, ColorInfo } from './styles'
import { FormEvent, MutableRefObject, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Alert from '../WarningCards'
import { Footer } from '../Footer'

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
        'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/6754/days/15?token=82e86be1f7896dd48ad916a8bf79a997',
      )
      .then((response) => {
        const responseData = response.data.data as Record<string, WeatherData>
        const dataAsArray = Object.values(responseData)

        setarDados(dataAsArray)
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
      <button className="left">
        <ArrowLeft onClick={clilcarParaEsquerda} />
      </button>
      <button className="right" onClick={clicarParaDireita}>
        <ArrowRight />
      </button>

      <div className="carousel" ref={carrossel}>
        {dados.map((item, i) => (
          <CarouselCard key={i}>
            <header>
              <img src="src/assets/sol-com-nuvens.png" alt="" />
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
                      {item.sun.sunrise.toString().substring(0, 5)} -{' '}
                      {item.sun.sunset.toString().substring(0, 5)}
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
              <Alert />
            </header>
          </CarouselCard>
        ))}
      </div>
      <Footer />
    </Container>
  )
}
