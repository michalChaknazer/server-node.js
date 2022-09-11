const express=require('express');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());
const mongoose=require('mongoose');
const connect=mongoose.connect;

app.use(express.static("pictures"))//גרמנו לשרת לזהות את התקיייה הזאת בתור התיקייה של הקבצים הסטטים באתר

startServer();
async function startServer(){
app.listen(5000, ()=>{console.log('listening on port 5000')});
    mongoose.connect("mongodb://localhost:27017/shiduchim").then(o => console.log("mongo db connected")).catch(err => console.log(err))
    
}
