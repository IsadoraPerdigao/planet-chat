import express from 'express';

import cors from 'cors';

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
