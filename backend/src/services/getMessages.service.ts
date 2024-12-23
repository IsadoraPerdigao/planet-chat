import path from "path";
import fs from "fs";
import { MessagePayload } from "./createMessage.service";

interface MessageResponse extends MessagePayload {
    id: string;
    timestamp: Date;
}

const outputFile = path.join(__dirname, "..", "data", "messages.json");

export function getMessagesService() {
    try {
        const messagesListString = fs.readFileSync(outputFile, 'utf-8');
        const messagesList: MessageResponse[] = JSON.parse(messagesListString);

        const sortedMessages = messagesList.sort((a, b) => {
            const dateA = new Date(a.timestamp);
            const dateB = new Date(b.timestamp);
            
            return dateA.getTime() - dateB.getTime();
          });

        return sortedMessages;
    }
    
    catch (error) {
        console.error("Erro ao ler o arquivo:", error);
        throw error;
    }
}