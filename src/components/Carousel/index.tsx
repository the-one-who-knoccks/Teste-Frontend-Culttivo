import { Sun, Warning, WarningCircle } from 'phosphor-react'
import {
  CarouselCard,
  CarouselContainer,
  ColorInfo,
  WarningCard,
} from './styles'

export function Carousel() {
  return (
    <CarouselContainer>
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
            <tr>
              <h4>Temperatura:</h4>

              <ColorInfo variant="min">
                <td>
                  <span> 18º</span>
                </td>
              </ColorInfo>

              <ColorInfo variant="max">
                <td>
                  <span> 30º</span>
                </td>
              </ColorInfo>
            </tr>
            <hr />
            <tr>
              <h4>Umidade:</h4>
              <ColorInfo variant="umidade">
                <td>
                  <span>28% - 31%</span>
                </td>
              </ColorInfo>
            </tr>
            <hr />
            <tr>
              <h4>Sol:</h4>
              <ColorInfo variant="nascer/pordosol">
                <td>
                  <span>06:30 - 18:30</span>
                </td>
              </ColorInfo>
            </tr>
            <hr />
            <tr>
              <h4>Chuva:</h4>
              <ColorInfo variant="chuva">
                <td>
                  <span>28%</span>
                </td>
              </ColorInfo>
            </tr>
            <hr />
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
            <tr>
              <h4>Temperatura:</h4>

              <ColorInfo variant="min">
                <td>
                  <span> 18º</span>
                </td>
              </ColorInfo>

              <ColorInfo variant="max">
                <td>
                  <span> 30º</span>
                </td>
              </ColorInfo>
            </tr>
            <hr />
            <tr>
              <h4>Umidade:</h4>
              <ColorInfo variant="umidade">
                <td>
                  <span>28% - 31%</span>
                </td>
              </ColorInfo>
            </tr>
            <hr />
            <tr>
              <h4>Sol:</h4>
              <ColorInfo variant="nascer/pordosol">
                <td>
                  <span>06:30 - 18:30</span>
                </td>
              </ColorInfo>
            </tr>
            <hr />
            <tr>
              <h4>Chuva:</h4>
              <ColorInfo variant="chuva">
                <td>
                  <span>28%</span>
                </td>
              </ColorInfo>
            </tr>
            <hr />
          </table>
          <WarningCard variant="inferior">
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
            <tr>
              <h4>Temperatura:</h4>

              <ColorInfo variant="min">
                <td>
                  <span> 18º</span>
                </td>
              </ColorInfo>

              <ColorInfo variant="max">
                <td>
                  <span> 30º</span>
                </td>
              </ColorInfo>
            </tr>
            <hr />
            <tr>
              <h4>Umidade:</h4>
              <ColorInfo variant="umidade">
                <td>
                  <span>28% - 31%</span>
                </td>
              </ColorInfo>
            </tr>
            <hr />
            <tr>
              <h4>Sol:</h4>
              <ColorInfo variant="nascer/pordosol">
                <td>
                  <span>06:30 - 18:30</span>
                </td>
              </ColorInfo>
            </tr>
            <hr />
            <tr>
              <h4>Chuva:</h4>
              <ColorInfo variant="chuva">
                <td>
                  <span>28%</span>
                </td>
              </ColorInfo>
            </tr>
            <hr />
          </table>
          <WarningCard variant="superior">
            <span>
              <WarningCircle size={40} />
              Temperatura máxima deste dia será superior a máxima média do
              período.
            </span>
          </WarningCard>
        </header>
      </CarouselCard>
    </CarouselContainer>
  )
}
