import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from 'uuid';

export interface MessagePayload {
  content: string;
  sender: string;
}

const outputFile = path.join(__dirname, "..", "data" ,"messages.json");

export function createMessageService(payload: MessagePayload) {
    const timestamp = new Date();
    timestamp.toISOString();

    const id = uuidv4();

  try {
    const dataDir = path.dirname(outputFile);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Ler o conteúdo atual do arquivo messages.json, se ele existir
    let existingData = [];

    if (fs.existsSync(outputFile)) {
      const fileData = fs.readFileSync(outputFile, 'utf-8');

      // Verifica se o arquivo está vazio
      existingData = fileData ? JSON.parse(fileData) : [];
    }

    // Adicionar a nova mensagem ao conteúdo existente
    existingData.push({id, ...payload, timestamp});

    // Salvar as mensagens no arquivo messages.json, sem sobrescrever, apenas adicionando
    fs.writeFileSync(outputFile, JSON.stringify(existingData, null, 2));
    console.log('Mensagem adicionada ao arquivo messages.json');

  } catch (error) {
    console.error("Erro ao salvar a resposta no arquivo", error);
  }

  return {id, ...payload, timestamp};
}
