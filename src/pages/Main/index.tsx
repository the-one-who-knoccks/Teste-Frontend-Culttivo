import { Header } from '../../components/Header'
import { Carousel } from '../../components/Carousel'
import { Container } from './styles'

export function Main() {
  return (
    <div>
      <Container>
        <Header />
        <Carousel />
      </Container>
    </div>
  )
}
