import styled, { css } from 'styled-components'

export const CarouselContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 0.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

interface CarouselCardProps {
  variant?: 'green'
}

export const CarouselCard = styled.div<CarouselCardProps>`
  background: ${(props) => props.theme.white};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 1px -2px 12px 4px rgba(239, 239, 239, 255);
  border: 1px solid ${(props) => props.theme['gray-200']};

  header {
    display: grid;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['gray-400']};

    > div {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      p {
        font-size: 0.9rem;
      }
    }
  }

  span {
    margin-top: 1rem;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    font-size: 0.8rem;
    color: ${(props) => props.theme['gray-300']};
    background: ${(props) => props.theme['gray-200']};
    border-radius: 10px;
    font-weight: 500;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
    `}
`
