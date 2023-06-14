# ignite-2023-nodejs-api-rest-lessons

## Aulas e conteúdos
- KNEX: Query Builder para conectar ao banco de dados, o query builder otimiza as interações com banco de dados e deixa a sintaxe no código mais fácil de trabalhar sem que seja necessário usar SQL puro na aplicação.
- ZOD: Lib para criar validações de tipagens de variáveis, nesse projeto estamos usando para validar tipagem de envs e request body
- ESLINT: Lib para padronizar formatação de código.
## Requisitos Funcionais(RF)
- [x] O usuário deve poder criar uma conta;
- [x] O usuário deve poder obter um extrato da sua conta;
- [x] O usuário deve poder listar todas transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

## Regras de Negócios(RN)
- [x] A transação pode do tipo crédito que somará ao valor total, ou débito que será subtraído;
- [x] Deve ser possível identificar o usuário entre as requisições;
- [x] O usuário só pode visualizar transações que ele criou;

## Regras Não Funcionais(RNF)
- [] Será criado ao longo da aplicação;