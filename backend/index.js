import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';

const app = express();
const PORT = 3001;

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hi There')
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));