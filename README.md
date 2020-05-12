<h1 align="center">
  <img alt="logo" title="logo" src=".github/logo.png" width="700px" />
</h1>

<h4 align = "center">
  Estrutura base para um projeto Backend
</h4>

## :rocket: Tecnologias

-  [NodeJS](https://nodejs.org/en/)
-  [Docker](https://docs.docker.com/)
-  [Prettier](https://prettier.io/)
-  [ESLint](https://eslint.org/)
-  [YARN](https://yarnpkg.com/)
-  [Typescript](https://www.typescriptlang.org/)
-  [Express](https://expressjs.com/pt-br/)
-  [Typeorm](https://typeorm.io/)
-  [PostgreSQL](https://www.postgresql.org/)

## 📥 Comandos usados para a construção do Projeto

```bash

  # Inicializando o package.json
  $ yarn init -y

  $ yarn add express && yarn add typescript @types/express -D

  # Gerando o tsconfig.json
  $ yarn tsc --init

  # Pacote para executar o reload em projetos typescript
  $ yarn add ts-node-dev -D
  
  # Pacotes do eslint e prettier
  $ yarn add eslint -D
  $ yarn eslint --init
  $ yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.20.1 @typescript-eslint/parser@latest

  # Reconhecer os imports dos .ts
  $ yarn add -D eslint-import-resolver-typescript prettier eslint-config-prettier eslint-plugin-prettier
  # typeorm: Permite usar typescript ao manipular o banco de dado, essa ténica se chama ORM(Object-relational mapping).
  # bcryptjs:
  # pg: Drive do banco PostgreSQL
  $ yarn add typeorm bcryptjs pg
  # Recursos typescript para o pacote bcryptjs
  $ yarn add -D @types/bcryptjs
  # Criando container Postgres
  $ docker run --name postgres-database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
  # Criando a database no database no container postgres-database  
  $ docker exec -it  postgres-database psql -h localhost -U postgres -c "CREATE DATABASE database"
  # Criando o migration
  $ yarn typeorm migration:create -n CreateUsers
  # Executanto a migration
  $ yarn typeorm migration:run

```
## 💻 Extensões do VScode

### editorconfig
### eslint
