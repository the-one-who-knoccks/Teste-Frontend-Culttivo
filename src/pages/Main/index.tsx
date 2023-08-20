import { Header } from '../../components/Header'
import { Carousel } from '../../components/Carousel'
import { Container } from './styles'
import { Footer } from '../../components/Footer'

export function Main() {
  return (
    <div>
      <Container>
        <Header />
        <Carousel />
        <Footer />
      </Container>
    </div>
  )
}
