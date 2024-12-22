import { Request, Response } from "express";
import { createMessageService } from "../services/createMessage.service";
import { getMessagesService } from "../services/getMessages.service";

export function createMessageController (req: Request, res: Response) {
    try {
        const createdMessage = createMessageService(req.body);

        res.status(201).json(createdMessage);
    }

    catch (error) {
        res.status(400).json({
            message: `Mensagem não enviada com erro ${error}`
        })
    }
}

export function getMessagesController (_: Request, res: Response) {
    try {
        const messagesListResponse = getMessagesService();
        res.status(200).send(messagesListResponse)
    }

    catch (error) {
        res.status(400).json({
            message: `Erro ${error} ao buscar as mensagens`
        })
    }
}