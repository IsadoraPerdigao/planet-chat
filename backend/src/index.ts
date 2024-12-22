import express from 'express';
import http from 'http'; // Importar o módulo http do Node.js
import { Server } from 'ws';  // WebSocket

import cors from 'cors';
import messageRouter from './routes/messages.route';
import { getMessagesService } from './services/getMessages.service';

const app = express();
const server = http.createServer(app); // Criando servidor HTTP
const wss = new Server({ server }); // Associando WebSocket ao servidor HTTP

const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use("/", messageRouter);

// Configuração do WebSocket
wss.on('connection', (ws) => {
  console.log("Novo cliente conectado!");

  const interval = setInterval(() => {
    try {
      const messagesListResponse = getMessagesService(); 
      ws.send(JSON.stringify(messagesListResponse));  // Envia as mensagens ordenadas para o cliente WebSocket

    } catch (error) {
      console.error("Erro ao obter as mensagens:", error);
    }
  }, 5000);

  ws.on('close', () => {
    console.log("Cliente desconectado.");
    clearInterval(interval);  // Limpar o intervalo quando o cliente desconectar
  });
});

// Iniciar o servidor HTTP (com WebSocket)
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
