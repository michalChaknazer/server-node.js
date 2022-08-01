const mongoose=require('mongoose');

const matchmaker=mongoose.Schema({
firstName:{type:String,},
lastName:{type:String,},
phone:{type:String,},
livingPlace:{type:String,},
age:{type:String,},
email:{type:String,},
candidates:[Number],//מערך מועמדים
password:Number,//המנהל שולח סיסמא מרונדרת
phone:{type:String,},
phone:{type:String,},
phone:{type:String,},

})
const Matchmaker=new mongoose.model("matchmaker",matchmakerSchema);
module.exports=Matchmaker;