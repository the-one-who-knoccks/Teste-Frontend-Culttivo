import { ArrowLeft, ArrowRight, Sun, Warning } from 'phosphor-react'
import { CarouselCard, Container, ColorInfo, WarningCard } from './styles'
import { FormEvent, MutableRefObject, useRef } from 'react'

export function Carousel() {
  const carrossel = useRef() as MutableRefObject<HTMLDivElement>

  const clicarParaEsquerda = (e: FormEvent) => {
    e.preventDefault()
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth
  }

  const clicarParaDireita = (e: FormEvent) => {
    e.preventDefault()
    carrossel.current.scrollLeft += carrossel.current.offsetWidth
  }

  return (
    <Container>
      <button>
        <ArrowLeft onClick={clicarParaEsquerda} />
      </button>
      <button onClick={clicarParaDireita}>
        <ArrowRight />
      </button>
      <div className="carousel" ref={carrossel}>
        <CarouselCard>
          <header>
            <div>
              <Sun size={30} color="#ccc000" />
              <div>
                <strong>27/06/2023 </strong>
                <p>Terça-feira</p>
              </div>
            </div>
            <article>
              Sol com aumento de nuvens. Pancadas de chuva à tarde. À noite,
              muitas nuvens, mas sem chuva
            </article>

            <table>
              <tbody>
                <tr>
                  <th>Temperatura:</th>

                  <ColorInfo variant="min">18º</ColorInfo>

                  <ColorInfo variant="max">30º</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Umidade:</th>
                  <ColorInfo variant="umidade">28% - 31%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Sol:</th>
                  <ColorInfo variant="nascer/pordosol">06:30 - 18:30</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Chuva:</th>
                  <ColorInfo variant="chuva">28%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>
            </table>
            <WarningCard variant="superior">
              <span>
                <Warning size={40} />
                Temperatura máxima deste dia será superior a máxima média do
                período.
              </span>
            </WarningCard>
          </header>
        </CarouselCard>
        <CarouselCard>
          <header>
            <div>
              <Sun size={30} color="#ccc000" />
              <div>
                <strong>27/06/2023 </strong>
                <p>Terça-feira</p>
              </div>
            </div>
            <article>
              Sol com aumento de nuvens. Pancadas de chuva à tarde. À noite,
              muitas nuvens, mas sem chuva
            </article>

            <table>
              <tbody>
                <tr>
                  <th>Temperatura:</th>

                  <ColorInfo variant="min">18º</ColorInfo>

                  <ColorInfo variant="max">30º</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Umidade:</th>
                  <ColorInfo variant="umidade">28% - 31%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Sol:</th>
                  <ColorInfo variant="nascer/pordosol">06:30 - 18:30</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Chuva:</th>
                  <ColorInfo variant="chuva">28%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>
            </table>
            <WarningCard variant="superior">
              <span>
                <Warning size={40} />
                Temperatura máxima deste dia será superior a máxima média do
                período.
              </span>
            </WarningCard>
          </header>
        </CarouselCard>
        <CarouselCard>
          <header>
            <div>
              <Sun size={30} color="#ccc000" />
              <div>
                <strong>27/06/2023 </strong>
                <p>Terça-feira</p>
              </div>
            </div>
            <article>
              Sol com aumento de nuvens. Pancadas de chuva à tarde. À noite,
              muitas nuvens, mas sem chuva
            </article>

            <table>
              <tbody>
                <tr>
                  <th>Temperatura:</th>

                  <ColorInfo variant="min">18º</ColorInfo>

                  <ColorInfo variant="max">30º</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Umidade:</th>
                  <ColorInfo variant="umidade">28% - 31%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Sol:</th>
                  <ColorInfo variant="nascer/pordosol">06:30 - 18:30</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Chuva:</th>
                  <ColorInfo variant="chuva">28%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>
            </table>
            <WarningCard variant="superior">
              <span>
                <Warning size={40} />
                Temperatura máxima deste dia será superior a máxima média do
                período.
              </span>
            </WarningCard>
          </header>
        </CarouselCard>
        <CarouselCard>
          <header>
            <div>
              <Sun size={30} color="#ccc000" />
              <div>
                <strong>27/06/2023 </strong>
                <p>Terça-feira</p>
              </div>
            </div>
            <article>
              Sol com aumento de nuvens. Pancadas de chuva à tarde. À noite,
              muitas nuvens, mas sem chuva
            </article>

            <table>
              <tbody>
                <tr>
                  <th>Temperatura:</th>

                  <ColorInfo variant="min">18º</ColorInfo>

                  <ColorInfo variant="max">30º</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Umidade:</th>
                  <ColorInfo variant="umidade">28% - 31%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Sol:</th>
                  <ColorInfo variant="nascer/pordosol">06:30 - 18:30</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Chuva:</th>
                  <ColorInfo variant="chuva">28%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>
            </table>
            <WarningCard variant="superior">
              <span>
                <Warning size={40} />
                Temperatura máxima deste dia será superior a máxima média do
                período.
              </span>
            </WarningCard>
          </header>
        </CarouselCard>
        <CarouselCard>
          <header>
            <div>
              <Sun size={30} color="#ccc000" />
              <div>
                <strong>27/06/2023 </strong>
                <p>Terça-feira</p>
              </div>
            </div>
            <article>
              Sol com aumento de nuvens. Pancadas de chuva à tarde. À noite,
              muitas nuvens, mas sem chuva
            </article>

            <table>
              <tbody>
                <tr>
                  <th>Temperatura:</th>

                  <ColorInfo variant="min">18º</ColorInfo>

                  <ColorInfo variant="max">30º</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Umidade:</th>
                  <ColorInfo variant="umidade">28% - 31%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Sol:</th>
                  <ColorInfo variant="nascer/pordosol">06:30 - 18:30</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Chuva:</th>
                  <ColorInfo variant="chuva">28%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>
            </table>
            <WarningCard variant="superior">
              <span>
                <Warning size={40} />
                Temperatura máxima deste dia será superior a máxima média do
                período.
              </span>
            </WarningCard>
          </header>
        </CarouselCard>
        <CarouselCard>
          <header>
            <div>
              <Sun size={30} color="#ccc000" />
              <div>
                <strong>27/06/2023 </strong>
                <p>Terça-feira</p>
              </div>
            </div>
            <article>
              Sol com aumento de nuvens. Pancadas de chuva à tarde. À noite,
              muitas nuvens, mas sem chuva
            </article>

            <table>
              <tbody>
                <tr>
                  <th>Temperatura:</th>

                  <ColorInfo variant="min">18º</ColorInfo>

                  <ColorInfo variant="max">30º</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Umidade:</th>
                  <ColorInfo variant="umidade">28% - 31%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Sol:</th>
                  <ColorInfo variant="nascer/pordosol">06:30 - 18:30</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Chuva:</th>
                  <ColorInfo variant="chuva">28%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>
            </table>
            <WarningCard variant="superior">
              <span>
                <Warning size={40} />
                Temperatura máxima deste dia será superior a máxima média do
                período.
              </span>
            </WarningCard>
          </header>
        </CarouselCard>
        <CarouselCard>
          <header>
            <div>
              <Sun size={30} color="#ccc000" />
              <div>
                <strong>27/06/2023 </strong>
                <p>Terça-feira</p>
              </div>
            </div>
            <article>
              Sol com aumento de nuvens. Pancadas de chuva à tarde. À noite,
              muitas nuvens, mas sem chuva
            </article>

            <table>
              <tbody>
                <tr>
                  <th>Temperatura:</th>

                  <ColorInfo variant="min">18º</ColorInfo>

                  <ColorInfo variant="max">30º</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Umidade:</th>
                  <ColorInfo variant="umidade">28% - 31%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Sol:</th>
                  <ColorInfo variant="nascer/pordosol">06:30 - 18:30</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Chuva:</th>
                  <ColorInfo variant="chuva">28%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>
            </table>
            <WarningCard variant="superior">
              <span>
                <Warning size={40} />
                Temperatura máxima deste dia será superior a máxima média do
                período.
              </span>
            </WarningCard>
          </header>
        </CarouselCard>
        <CarouselCard>
          <header>
            <div>
              <Sun size={30} color="#ccc000" />
              <div>
                <strong>27/06/2023 </strong>
                <p>Terça-feira</p>
              </div>
            </div>
            <article>
              Sol com aumento de nuvens. Pancadas de chuva à tarde. À noite,
              muitas nuvens, mas sem chuva
            </article>

            <table>
              <tbody>
                <tr>
                  <th>Temperatura:</th>

                  <ColorInfo variant="min">18º</ColorInfo>

                  <ColorInfo variant="max">30º</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Umidade:</th>
                  <ColorInfo variant="umidade">28% - 31%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Sol:</th>
                  <ColorInfo variant="nascer/pordosol">06:30 - 18:30</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>

              <tbody>
                <tr>
                  <th>Chuva:</th>
                  <ColorInfo variant="chuva">28%</ColorInfo>
                </tr>
                <tr className="line" />
              </tbody>
            </table>
            <WarningCard variant="superior">
              <span>
                <Warning size={40} />
                Temperatura máxima deste dia será superior a máxima média do
                período.
              </span>
            </WarningCard>
          </header>
        </CarouselCard>
      </div>
    </Container>
  )
}
