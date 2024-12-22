import express from 'express';

import cors from 'cors';
import messageRouter from './routes/messages.route';

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use("/", messageRouter);

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
