import styled, { css } from 'styled-components'

export const Container = styled.section`
  width: 1090px;
  border: none;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15rem;
    color: ${(props) => props.theme['cinza-400']};
  }

  div {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    position: relative;
    bottom: 1.5rem;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  button.left {
    display: flex;
    width: 2rem;
    height: 2rem;
    position: relative;
    right: 3rem;
    top: 18.2rem;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    border-radius: 20px;
    color: ${(props) => props.theme['verde-100']};
    background: transparent;
    cursor: pointer;
  }

  button.right {
    display: flex;
    width: 2rem;
    height: 2rem;
    margin-left: 100%;
    position: relative;
    top: 16rem;
    left: 1.5rem;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    border-radius: 20px;
    color: ${(props) => props.theme['verde-100']};
    background: transparent;
    cursor: pointer;
  }
`

interface ColorInfoProps {
  variant?: 'min' | 'max' | 'umidade' | 'nascer/pordosol' | 'chuva'
}

export const CarouselCard = styled.div`
  width: 21rem;
  height: 30rem;
  margin-top: 2rem;
  margin-left: 1.5rem;
  display: absolute;
  right: 0.5rem;
  flex: none;

  background: ${(props) => props.theme.white};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: -1px -1px 12px 2px rgba(0, 0, 0, 0.3)}
  border: 1px solid ${(props) => props.theme['cinza-200']};

  header {
    display: grid;
    margin-top: -2.5rem;

    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme['cinza-400']};

    img {
     width: 3.5rem;

     position: relative;
     top: 1.1rem;
    }

    div {
      display: grid;
      margin: 0 auto;

      strong {
        font-size: 1.3rem;
      }
  
      p {
        font-size: 0.9rem;
        color: ${(props) => props.theme['cinza-300']};
      }

    }


    article {
      margin-top: -0.5rem;
      margin-bottom: 0.5rem;
      height: auto;

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
    }

    tbody tr.line {
      content: ' ';
      display: block;
      border-bottom: 2px solid ${(props) => props.theme['cinza-200']};
      margin: -0.2rem;
      position: relative;
      bottom: 1.2rem;
    }

    

    table tr th {
      color: ${(props) => props.theme['cinza-300']};
      margin-top: 0.5rem;
    }

    table hr {
      position: relative;
      bottom: 1.2rem;
      border-color: ${(props) => props.theme['cinza-100']};
    }
  }
`

export const ColorInfo = styled.td<ColorInfoProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid;
  border-radius: 0.3rem;
  padding: 0.5rem 0.5rem 0.3rem;
  border-left-width: 0.35rem;
  width: 50%;
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
