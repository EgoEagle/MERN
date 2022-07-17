import express from 'express'
import {questions} from './routes/questions.js';


const app = express();

app.use(express.json());

app.use('/api/questions',questions);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server is live on port ${port}`));