import { Request, Response } from "express";
import { createMessageService } from "../services/createMessage.service";

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