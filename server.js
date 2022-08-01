const express=require('express');
const cors=require('cors');
const port=5000;
const app=express();
app.use(express.json());
app.use(cors());

const mongoose=require('mongoose');
const connect=mongoose.connect;
const mongodbUrl='mongodb://localhost:27017';
const nameDb='shiduchim';

async function connectDb(){
    await connect(mongodbUrl,{
        nameDb:nameDb,
        useNewUrlParser:true,
        useUnifieldTopology:true,
    })
}
startServer();
async function startServer(){
    await connectDb();
    app.listen(port,()=>console.log('listening on port 5000'));
}

 