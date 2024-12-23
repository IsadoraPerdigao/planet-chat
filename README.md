# Planetfone Chat

Este projeto é um **chat simples** que utiliza uma arquitetura **fullstack** com **React** no frontend e **Node.js** no backend. Ele permite o envio e leitura de mensagens em tempo real utilizando **WebSockets** e oferece uma interface para inserir o nome de usuário, enviar e visualizar mensagens.

## Funcionalidades

- Tela de login para inserção do nome de usuário.
- Interface para visualização de mensagens enviadas e recebidas.
- Envio de mensagens em tempo real.
- Atualização automática da lista de mensagens a cada 5 segundos.
- Utilização de **WebSocket** para comunicação em tempo real entre cliente e servidor.

## Tecnologias Utilizadas

- **Frontend**:
  - Next.js
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Express
  - WebSocket
- **Banco de Dados**: Arquivo JSON (messages.json)

## Instruções de Execução

### 1. Clonar o Repositório

```bash
git clone https://github.com/IsadoraPerdigao/planet-chat.git
cd planet-chat
```

### 2. Instalar Dependências
- **Frontend:**
Acesse a pasta frontend e instale as dependências.

```bash
cd frontend
npm install
```

- **Backend:**
Acesse a pasta backend e instale as dependências.
```bash
cd backend
npm install
```

### 3. Rodar a aplicação
Na pasta raiz do projeto:
```bash
npm run dev
```

### 4. Acessar o chat
Abra o navegador e acesse http://localhost:3000. A tela de login aparecerá. Após inserir o nome de usuário, você será redirecionado para a tela de chat.
