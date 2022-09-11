
const mongoose=require('mongoose');

const matchmakerSchema=mongoose.Schema({
password:{type:String},
userName:{type:String},
})
const Matchmaker=new mongoose.model("matchmaker",matchmakerSchema);
module.exports=Matchmaker;