<h1 align="center">
    GraphQL API
</h1>

## Aplicação
A aplicação é um CRUD para o controle de produtos, esses produtos possuem categorias que foram previamente inseridas através das migrations. O projeto foi desenvolvido utilizando GraphQL, Typescript, TypeORM, Type-GraphQL e MySQL.

## Tecnologias

- Node
- GraphQL
- Apollo-Server-Express
- Typescript
- MySQL
- TypeORM
- Type-GraphQL

## Instruções

1. Para rodar o projeto é necessário criar uma base de dados utilizando o MySQL e alterar o nome para a sua base criada no arquivo `ormconfig.json` na raiz do projeto. Além de mudar as confgurações de usuário, porta ou host casa sejam diferentes.

2. Após criar a base de dados é necessário rodar o compando abaixo para instalar todas as dependências utilizadas no projeto.

### `yarn install` 

3. Após instalar as dependências é preciso rodar o comando abaixo para que as tabelas de Produto e Categoria sejam criadas e preenchidas na base de dados.

### `yarn typeorm migration:run`

4. Para inicializar o servidor graphql com o playground é preciso utilizar o comando abaixo. A aplicação irá rodar no dominio: [http://localhost:3333/graphql](http://localhost:3333/graphql) para a realização das querys ou mutations;

### `yarn dev`

 