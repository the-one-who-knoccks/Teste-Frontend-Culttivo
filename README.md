<h1 align="center">
 Culttivo - Clima
</h1>

<p align="center">
    <img src="./src/assets/sol-com-nuvens.png" width="100px"/>
</p>

<p align="center">
  <a href="#tecnologias">Ferramentas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>




<h2 id="objetivo">🚀 <b>Sobre o projeto:</b></h2>

- ### Projeto desenvolvido para o teste front-end da empresa Culttivo.

A aplicação consiste em consumir os dados da api do climatempo e exibir informações como data, temperatura miníma e máxima, humidade e etc... em um card no carrossel para os próximos 7 dias.



<p align="center">
    <img src="https://ik.imagekit.io/hld13bjzb1/Captura%20de%20tela%20de%202023-08-23%2010-31-17_4Nog7rcjA.png?updatedAt=1692797559204" width="700px" />
</p>


<p align="center">
    <img src="https://ik.imagekit.io/hld13bjzb1/Captura%20de%20tela%20de%202023-08-23%2010-30-56_ynft_lhKo.png?updatedAt=1692797559113" width="700px"/>
</p>




<h2 id="tecnologias">🔧 <b>Ferramentas:</b></h2>

- React
- styled-components
- vite
- axios
- Phosphor icons


## Antes de rodar a aplicação
### Antes de rodar a aplicação você deve logar no site da api do climatempo
https://advisor.climatempo.com.br/ e se cadastrar para obter um token. Após cadastrado, gerar um token e subistuir o link da api nos componentes Header, Carousel e WarningCards com o token existente na api que deverá ficar assim:

https://piadvisor.climatempo.com.br/api/v1/forecast/locale/6754/days/15?token= + token gerado

apos isso, rodar o comando abaixo para cadastrar a cidade utilizada na conta do usuário criado. Varginha - = 6754

```bash
curl -X PUT      'http://apiadvisor.climatempo.com.br/api-manager/user-token/82e86be1f7896dd48ad916a8bf79a997/locales'          -H 'Content-Type: application/x-www-form-urlencoded'          -d 'localeId[]=6754'
```


## Deploy da aplicação: 

https://culttivo-clima.azurewebsites.net/

## Como rodar o projeto localmente

```javascript
# Clonar o repositório

$ git clone https://github.com/the-one-who-knoccks/Teste-Frontend-Culttivo.git
```



## Inicando a aplicação web
```bash
# Nevegar até o diretório
$ cd Teste-Frontend-Culttivo

# Instalar as dependências
$ npm install

# Iniciar a aplicação
$ npm run dev
```

## Observação
#### Não consegui habilitar o cors na api fornecida,então foi preciso o uso da extensão CORS Test para testar aplicação no Chrome e Cors Everywhere no Firefox



<p align="center">
  Desenvolvido por Thiago Alves Bastos
</p>
