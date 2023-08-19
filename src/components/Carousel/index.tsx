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
          <span>
            Sol com aumento de nuves. Pancadas de chuva à tarde. À noite, muitas
            nuves, mas sem chuva
          </span>
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
          <span>
            Sol com aumento de nuves. Pancadas de chuva à tarde. À noite, muitas
            nuves, mas sem chuva
          </span>
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
          <span>
            Sol com aumento de nuves. Pancadas de chuva à tarde. À noite, muitas
            nuves, mas sem chuva
          </span>
        </header>
      </CarouselCard>
    </CarouselContainer>
  )
}
