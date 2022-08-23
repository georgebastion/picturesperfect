import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import imagesRoutes from './routes/index.js';
import userRoutes from './routes/user.js';


const app = express();

app.use(bodyParser.json({limit:'30mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}));
app.use(cors());

app.use('/photos', imagesRoutes);
app.use('/user', userRoutes);

const CONNECTION_URL = 'mongodb+srv://eyzoh:eyzoh1212@cluster0.baygyrr.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

app.get("/", (req,res)=>{
    res.json({message: "Hello from server!"});
});

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology:true })
    .then(()=> app.listen(PORT, ()=>console.log(`Server listening on ${PORT}`)))
    .catch((error)=>console.log(error.message));

 



