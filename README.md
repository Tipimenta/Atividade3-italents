# Projeto de Cadastro de Animes

Este projeto é uma aplicação React para cadastrar e listar animes. Nele, você pode adicionar animes com o nome, link para a capa (imagem) e uma descrição. Os animes cadastrados serão exibidos em uma lista abaixo do formulário.

## Demonstração

https://atividade3-italents-8nykp1afh-tipimentas-projects.vercel.app/

## Funcionalidades

- Cadastro de animes com nome, link da capa e descrição.
- Exibição de uma lista de animes cadastrados.
- Componentes funcionais utilizando `props` e `useState`.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **CSS Modules**: Para estilização dos componentes.
- **JavaScript**: Usado para manipulação de estados e lógica da aplicação.
- **npx create-react-app**: Ferramenta usada para iniciar o projeto.

## Requisitos

- Node.js (v12 ou superior)
- npm ou yarn para gerenciamento de pacotes

## Como Rodar o Projeto

Passo 1: Clonar o Repositório

Abra o terminal e execute o seguinte comando:
```
git clone https://github.com/Tipimenta/Atividade3-italents.git
```

Passo 2: Instalar Dependências
Após clonar o repositório, entre na pasta do projeto e instale as dependências com o seguinte comando:
```
cd seu-repositorio
npm install
```

Passo 3: Executar a Aplicação
Com as dependências instaladas, execute o seguinte comando para iniciar o servidor de desenvolvimento:
```
npm start
```
Isso iniciará a aplicação localmente no endereço http://localhost:3000.

Estrutura dos Componentes
App.js: Componente principal que gerencia o estado dos animes e renderiza o formulário e a lista.
FormAnime.js: Componente de formulário onde o usuário pode cadastrar novos animes.
Listagem.js: Componente responsável por exibir a lista de animes cadastrados.
Button.js: Componente reutilizável para os botões de ação.

Passo 4: Adicionar um Anime
Preencha os campos de "Nome do Anime", "Link da Capa" e "Descrição do Capítulo".
Clique no botão "Cadastrar Anime".
O anime será adicionado à lista de animes cadastrados abaixo do formulário.
