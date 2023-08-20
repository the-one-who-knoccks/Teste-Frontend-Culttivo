import styled, { css } from 'styled-components'

export const CarouselContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin-bottom: 1rem;
  padding: 0 0.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

interface ColorInfoProps {
  variant?: 'min' | 'max' | 'umidade' | 'nascer/pordosol' | 'chuva'
}

interface WarningCardProps {
  variant?: 'superior' | 'inferior'
}

export const CarouselCard = styled.div`
  background: ${(props) => props.theme.white};
  border-radius: 20px;
  padding: 2rem;
  margin-top: -4rem;
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
      font-size: 0.9rem;
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

    table tr {
      display: flex;
      justify-content: space-between;
      align-items: self-start;
      margin-bottom: 2.3rem;

      h4 {
        color: ${(props) => props.theme['cinza-300']};
        margin-top: 0.5rem;
      }
    }

    table hr {
      position: relative;
      bottom: 1.2rem;
      border-color: ${(props) => props.theme['cinza-100']};
    }
  }
`

export const ColorInfo = styled.span<ColorInfoProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid;
  border-radius: 0.3rem;
  padding: 0.5rem 0.5rem 0.3rem;
  border-left-width: 0.35rem;
  width: 45%;
  font-weight: 500;
  ${(props) =>
    props.variant === 'max' &&
    css`
      background: ${(props) => props.theme['vermelho-100']};
      color: ${(props) => props.theme['vermelho-200']};
      width: 20%;
    `}
  ${(props) =>
    props.variant === 'min' &&
    css`
      background: ${(props) => props.theme['azul-100']};
      color: ${(props) => props.theme['azul-300']};
      margin-left: 2rem;
      width: 20%;
    `}
    ${(props) =>
    props.variant === 'umidade' &&
    css`
      background: ${(props) => props.theme['verde-300']};
      color: ${(props) => props.theme['verde-200']};
    `};

  ${(props) =>
    props.variant === 'nascer/pordosol' &&
    css`
      background: ${(props) => props.theme['laranja-100']};
      color: ${(props) => props.theme['laranja-200']};
    `};

  ${(props) =>
    props.variant === 'chuva' &&
    css`
      background: ${(props) => props.theme['cinza-600']};
      color: ${(props) => props.theme['cinza-700']};
    `};
`

export const WarningCard = styled.div<WarningCardProps>`
span {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  font-size: 0.8rem;

  border-radius: 5px;
  border: 1px solid;
  border-left-width: 0.45rem;
  font-weight: 500;
  font-size: 0.7rem;
  width: auto;

  svg {
    position: relative;
    right: 0.4rem;
}

  ${(props) =>
    props.variant === 'superior' &&
    css`
      color: ${(props) => props.theme['vermelho-300']};
      background: ${(props) => props.theme['vermelho-100']};
    `};

  ${(props) =>
    props.variant === 'inferior' &&
    css`
      color: ${(props) => props.theme['azul-400']};
      background: ${(props) => props.theme['azul-200']};
    `};
`
