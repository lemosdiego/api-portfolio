# Portfolio-API

## Descrição

**Portfolio-API** é uma API desenvolvida para gerenciar os projetos do meu portfólio.  
A ideia é criar uma aplicação completa, passando por todas as etapas do ciclo de desenvolvimento, desde o planejamento até o deploy.  
Este projeto tem como objetivo tanto o uso prático no meu portfólio quanto o aprimoramento dos meus conhecimentos no desenvolvimento full stack.

## Tecnologias e Dependências

### 🔹 Planejamento e Organização

- **Trello** – Gerenciamento de tarefas e acompanhamento do ciclo de desenvolvimento
- **Miro** – Criação de fluxogramas, esquemas e arquitetura da aplicação

### 🔹 Backend

- **Node.js** – Ambiente de execução JavaScript
- **Express** – Framework para criação de servidores HTTP
- **Sequelize** – ORM para modelagem, conexão e manipulação do banco de dados relacional
- **PostgreSQL** – Banco de dados relacional utilizado na aplicação
- **Docker** – Containerização do ambiente de desenvolvimento local, incluindo PostgreSQL, garantindo isolamento e versionamento
- **Beekeeper Studio** – Interface gráfica para visualização e manipulação do banco de dados PostgreSQL
- **dotenv** – Gerenciamento seguro de variáveis de ambiente

### 🔹 Dependências Node.js

- `express` – Criação do servidor e rotas
- `sequelize` – ORM para PostgreSQL
- `pg` – Driver PostgreSQL para Node.js
- `pg-hstore` – Serialização e desserialização JSON para PostgreSQL
- `dotenv` – Carregamento de variáveis de ambiente
- `cors` – Middleware para habilitar CORS
- `bcrypt` – Criptografia de senhas (para autenticação, se aplicável)
- `jsonwebtoken` – Geração e validação de tokens JWT (para rotas privadas, se aplicável)
- `sequelize-cli` – CLI para gerenciar migrations, seeds e models

### 🔹 Desenvolvimento e Testes

- **Thunder Client**, **Insomnia** ou **Postman** – Ferramentas para testar APIs durante o desenvolvimento

### 🔹 Deploy

- **Render** – Plataforma escolhida para hospedar o backend da aplicação, permitindo deploy automático, gerenciamento fácil de banco de dados e hospedagem confiável em nuvem
- O Docker será utilizado somente no ambiente de desenvolvimento local para facilitar a criação e isolamento do banco PostgreSQL e ambiente Node.js

## Estrutura do Projeto

### O projeto utiliza o padrão arquitetural **MVC (Model-View-Controller)** para organizar o código de forma clara e escalável:

```bash
├───src
│   ├───config         # Configurações gerais, como conexão com banco e variáveis de ambiente
│   ├───controllers    # Regras de negócio e lógica para responder às requisições
│   ├───database       # Migrations, seeds e scripts para gerenciamento do banco de dados
│   ├───models         # Definições das entidades e schemas do banco via ORM
│   ├───routes         # Definição dos endpoints da API e ligação com controllers
│   └───server.js      # Arquivo principal que inicializa o servidor Express
```

```

### Hospedagem do projeto

A API está hospedada na plataforma Render como Web Service.

PostgreSQL na nuvem via Render (uso interno da API).
```
