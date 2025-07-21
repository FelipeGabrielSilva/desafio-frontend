# Desafio Técnico - Frontend (React + Vite)

Este repositório contém o código-fonte da aplicação frontend, desenvolvida com React e Vite para o Desafio Técnico.

## Tecnologias e Ferramentas

A stack principal utilizada neste projeto inclui:
* **Biblioteca UI:** [React](https://react.dev/) (v19)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Linguagem:** Typescript
* **Componentes UI:** [Ant Design](https://ant.design/)
* **Roteamento:** [React Router](https://reactrouter.com/) (v7)
* **Requisições HTTP:** [Axios](https://axios-http.com/)
* **Gerenciamento de Formulários:** [Formik](https://formik.org/)

## Dependências e Suas Funções

* `react` e `react-dom`: Biblioteca principal para a construção da interface de usuário e para renderizar os componentes no DOM do navegador.
* `antd`: Uma biblioteca de componentes UI para React prontos para uso, acelerando o desenvolvimento.
* `axios`: Cliente HTTP baseado em Promises para fazer requisições à API de backend de forma simples e eficiente.
* `react-router-dom`: Biblioteca para gerenciar a navegação e o roteamento da aplicação.
* `formik`: Facilita a criação e o gerenciamento de formulários em React, controlando o estado, validações e submissões de forma organizada.
* `date-fns`: Biblioteca para manipulação de datas em JavaScript.

## ⚡ Como Executar o Projeto

Siga os passos abaixo para executar o frontend em sua máquina local.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão LTS recomendada)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/FelipeGabrielSilva/desafio-frontend.git](https://github.com/FelipeGabrielSilva/desafio-frontend.git)
    cd desafio-frontend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```
    *ou, se você usa Yarn:*
    ```bash
    yarn install
    ```

3.  **Configure o ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e configure a URL da sua API de backend. O Vite carrega essas variáveis automaticamente.
    ```env
    # URL base da API de backend
    VITE_API_BASE_URL=http://localhost:8080
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

5.  **Para gerar uma build de produção:**
    Este comando criará uma pasta `dist` com os arquivos otimizados para o deploy.
    ```bash
    npm run build
    ```
