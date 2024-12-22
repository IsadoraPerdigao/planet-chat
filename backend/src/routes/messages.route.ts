import { Router } from "express";
import { createMessageController, getMessagesController } from "../controllers/messages.controller";

const messageRouter = Router();

messageRouter.post("/messages", createMessageController);
messageRouter.get("/messages", getMessagesController);

export default messageRouter;