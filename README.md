# Desafio Dev Pleno - WFS ORBITAL

Os desafios propostos visam avaliar o conecimento em três áreas, front-end, back-end e banco de dados (conexão ao banco via API).
Cada etapa é explicada logo abaixo e tem orientações para que os projetos sejam testados.

Foi utilizado o software Insomnia para testar os retornos das APIs.

## Desafio Front-End

Você deverá criar uma página simples utilizando HTML, CSS e Javascript

1. Deve ter um formulário de contato com campos para nome, email e mensagem
2. Quando o formulário for enviado, os dados devem ser validados e exibidos abaixo do formulário.
3. A página deve ser responsiva e adaptável a dispositivos móveis.

R: O projeto apresentado atende ao desafio em sua completude.

Não necessária nenuma configuração prévia. 
Para testar o projeto bastar dar duplo click no arquivo "index.js"

## Desafio Back-End

Você deverá desenvolver uma API simples usando Node.js e Express

1. Crie uma rota GET ‘/’ que retorne uma mensagem “Hello Word”.
2. Crie uma rota POST ‘/devorbital’ que aceite um objeto JSON e retorne uma reposta com os dados
recebidos
3. Adicione um middleware para registrar todas as requisições no console (use ‘morgan’ ou
implemente o seu próprio middleware). 

R: O projeto apresentado atende ao desafio em sua completude.

Configurações necessárias:
npm i express morgan
npm --global yarn

Para testar o projeto basta executar o comando:
node app.js

## Desafio Banco de Dados
Você deve implementar um CRUD simples com MongoDB

1. Crie um banco de dados MongoDB e uma coleção chamada ‘users’
2. Implemente rotas para criar (‘POST /users’), ler (‘GET /users’), atualizar (‘PUT /users/:id’) e deletar
(‘DELETE /users/:id’) usuários na coleção
3. Cada usuário deve ter os campos ‘nome’, ‘email’ e ‘mensagem’

R: O projeto apresentado atende ao desafio em sua completude.

Configurações necessárias:
npm i express nodemon
npm install @prisma/client
npx prisma db push

Para testar o projeto basta executar o comando:
npm start

## Referências:
https://expressjs.com/pt-br/starter/installing.html
https://expressjs.com/en/resources/middleware/morgan.html
https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable
https://www.w3schools.com/mongodb/mongodb_mongosh_create_collection.php
https://www.mongodb.com/docs/manual/crud/#std-label-crud
https://www.prisma.io/docs/getting-started
