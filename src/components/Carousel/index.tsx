import { Sun } from 'phosphor-react'
import { CarouselCard, CarouselContainer } from './styles'

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
              <td>
                <span>18º</span> <span>28º</span>
              </td>
            </tr>
            <hr />
            <tr>
              <h4>Umidade:</h4>

              <td>
                <span>28% - 31%</span>
              </td>
            </tr>
            <hr />
            <tr>
              <h4>Sol:</h4>
              <td>
                <span>06:30 - 18:30</span>
              </td>
            </tr>
            <hr />
            <tr>
              <h4>Chuva:</h4>
              <td>
                <span>28%</span>
              </td>
            </tr>
            <hr />
          </table>
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
              <td>
                <span>18º</span> <span>28º</span>
              </td>
            </tr>
            <hr />
            <tr>
              <h4>Umidade:</h4>

              <td>
                <span>28% - 31%</span>
              </td>
            </tr>
            <hr />
            <tr>
              <h4>Sol:</h4>
              <td>
                <span>06:30 - 18:30</span>
              </td>
            </tr>
            <hr />
            <tr>
              <h4>Chuva:</h4>
              <td>
                <span>28%</span>
              </td>
            </tr>
            <hr />
          </table>
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
              <td>
                <span>18º</span> <span>28º</span>
              </td>
            </tr>
            <hr />
            <tr>
              <h4>Umidade:</h4>

              <td>
                <span>28% - 31%</span>
              </td>
            </tr>
            <hr />
            <tr>
              <h4>Sol:</h4>
              <td>
                <span>06:30 - 18:30</span>
              </td>
            </tr>
            <hr />
            <tr>
              <h4>Chuva:</h4>
              <td>
                <span>28%</span>
              </td>
            </tr>
            <hr />
          </table>
        </header>
      </CarouselCard>
    </CarouselContainer>
  )
}
