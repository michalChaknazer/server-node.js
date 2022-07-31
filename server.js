const express=require('express');
const cors=require('cors');
const port=5000;
const app=express();
app.use(express.json());
app.use(cors());
app.listen(port,()=>console.log('listening on port 5000'));
