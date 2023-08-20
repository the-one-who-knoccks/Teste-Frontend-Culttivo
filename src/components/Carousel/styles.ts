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
  border: 1px solid ${(props) => props.theme['cinza-200']};

  header {
    display: grid;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme['cinza-400']};

    

    > div {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }


    strong {
      font-size: 1.3rem;
    }

    p {
      font-size: .9rem;
    }



     article {
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding: 0.5rem 0.5rem 0.5rem 1rem;
      font-size: 0.8rem;
      color: ${(props) => props.theme['cinza-300']};
      background: ${(props) => props.theme['cinza-200']};
      border-radius: 10px;
      font-weight: 500;
    }

    table tr  {
      display: flex;
      justify-content: space-between;
      align-items: self-start;
      margin-bottom: 1.8rem;

      h4 {
        color: ${(props) => props.theme['cinza-300']};
      }

      span {
        border: 1px solid;
        border-radius: 0.3rem;
        padding: 0.3rem 0.5rem 0.3rem;
        border-left-width: 0.35rem;
 
      }

  }

  table hr {
  
    position: relative;
    bottom: 1rem;
    border-color: ${(props) => props.theme['cinza-100']};
  }



  ${(props) =>
    props.variant === 'green' &&
    css`
      span: ${props.theme['green-500']};
    `}
`
