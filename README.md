<h1 align="center">
     :floppy_disk:<a href="#" alt="Dev-Finder"> Dev Finder </a>
</h1>

<h3 align="center">
     Seu pesquisador de usuários do Github preferido! :floppy_disk:
</h3>

<h4 align="center">
	🚧   Concluído 🚀 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Layout](#-layout)
     * [Mobile](#mobile)
     * [Web](#web)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando a aplicação](#rodando-a-aplicação)
   * [Tecnologias](#-tecnologias)
     * [WebSite](#WebSite)
<!--te-->


## 💻 Sobre o projeto

Git Finder é uma aplicação que consome duas API's do Github, retornando as informações do usuário buscado e seus repositórios, ordenados pela quantidade de estrelas. Utilizei o React para construir a aplicação, por acreditar ser uma eficiente forma de componentizar e tornar aplicações web dinâmicas e modernas. Para auxiliar na construção, resolvei inicializar o projeto utilizando o VITE, o que me deu agilidade na hora de começar a codar e executar o projeto em ambiente de desenvolvimento. Também utilizei as bibliotecas do React-Icons e React-Loading para compor a página. Em desenvolvimento, utilizei o EsLint no projeto para trazer ao código as melhores práticas do mercado, levando um código limpo e legível para os outros devs. O projeto foi testado com Jest.
Também para deixar o código limpo e organizado, separei os arquivos por pastas: 
 -src 
     - assets (inclui algumas imagens)
     - components (inclui os componentes do projeto e arquivos CSS para os componentes)
     - consts (constantes com os endpoints utilizados no projeto)
     - pages (páginas do projeto)
     - tests (testes unitários)          
    			
---

## ⚙️ Funcionalidades

- [x] Na tela inicial o usuário pode digitar um nome para buscar na API do Github.
  - [x] Ao clicar em search, um card é mostrado com algumas informações do usuário buscado.
  - [x] Clicando no card, o usuário é redirecionado para a página de perfil, contendo mais informações do usuário do Github pesquisado, e seus repositórios em cards ordenados pela quantidade de estrelas.
  - [x] Os cards possuem o nome do repositório, a descrição e a contagem de estrelas.
  - [x] O usuário pode clicar em fazer uma nova pesquisa e retornar para a tela inicial. 
  - [x] O usuário pode pesquisar na tela de perfil diretamente pelo campo de busca do cabeçalho sem precisar voltar à tela inicial. 
   
---

## 🎨 Layout

### Mobile

<p align="center">
  <img alt="MobileHome" title="#MobileHome" src="https://github.com/JoaoGabrielVargas/dev-finder/blob/main/src/assets/mobile-home.png" width="200px">

  <img alt="MobileProfileDetails" title="#MobileProfileDetails" src="https://github.com/JoaoGabrielVargas/dev-finder/blob/main/src/assets/mobile-profile-details.png" width="200px">
  
  <img alt="MobileProfileRepos" title="#MobileProfileRepos" src="https://github.com/JoaoGabrielVargas/dev-finder/blob/main/src/assets/mobile-profile-repos.png" width="200px">
</p>

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="WebHome" title="#WebHome" src="https://github.com/JoaoGabrielVargas/dev-finder/blob/main/src/assets/web-home.png" width="400px">
  
  <img alt="WebHomeDetails" title="#WebHomeDetails" src="https://github.com/JoaoGabrielVargas/dev-finder/blob/main/src/assets/web-home-details.png" width="400px">

  <img alt="WebProfileDetails" title="#WebProfileDetails" src="https://github.com/JoaoGabrielVargas/dev-finder/blob/main/src/assets/web-profile-details.png" width="400px">
  
  <img alt="WebProfileRepos" title="#WebProfileRepos" src="https://github.com/JoaoGabrielVargas/dev-finder/blob/main/src/assets/web-profile-repos.png" width="400px">
</p>

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


## 🧭 Rodando a aplicação

```bash

# Clone este repositório
$ git clone git@github.com:JoaoGabrielVargas/dev-finder.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd dev-finder

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Executar os testes
$ npm run test

# A aplicação será aberta na porta indicada pelo VITE. Acesse o link no terminal! :smiley:

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

## **Website**  ([React](https://reactjs.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Vite](https://vitejs.dev/)**
-   **[React Loading](https://www.npmjs.com/package/react-loading)**
-   **[EsLint](https://eslint.org/)**

> Veja o arquivo  [package.json](https://github.com/JoaoGabrielVargas/dev-finder/blob/main/package.json)
---

## 🦸 Autor

<a href="https://www.linkedin.com/in/joaogabrielvargas/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/106772621?v=4" width="100px;" alt="João Gabriel Vargas"/>
 <br />
 <sub><b>João Gabriel Vargas</b></sub></a> 🚀
 <br />
-   **[LinkedIn](https://www.linkedin.com/in/joaogabrielvargas/)**
  
---

Feito com ❤️ por João Gabriel 👋🏽 [Entre em contato!](https://www.linkedin.com/in/joaogabrielvargas/)
