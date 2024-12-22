import { Router } from "express";
import { createMessageController } from "../controllers/messages.controller";

const messageRouter = Router();

messageRouter.post("/messages", createMessageController);

export default messageRouter;