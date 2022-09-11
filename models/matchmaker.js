const mongoose=require('mongoose');

const matchmakerSchema=mongoose.Schema({
firstName:{type:String,},
lastName:{type:String,},
phone:{type:String,},
livingPlace:{type:String,},
age:{type:String,},
email:{type:String,},
candidates:[Number],//מערך מועמדים
password:{type:Number},//המנהל שולח סיסמא מרונדרת

})
const Matchmaker=new mongoose.model("matchmaker",matchmakerSchema);
module.exports=Matchmaker;