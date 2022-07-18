import express from 'express'
import mongoose from 'mongoose';
import {MONGO_URI} from './config/key.js';
import {questions} from './routes/questions.js';


const app = express();
console.log(`MongoDB connected ${MONGO_URI}`);
mongoose
     .connect(MONGO_URI,{useNewUrlParser:true , useUnifiedTopology: true})
     .then(() => console.log("MongoDB connected"))
          .catch(err => console.log(err));

app.use(express.json());

app.use('/api/questions',questions);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server is live on port ${port}`));