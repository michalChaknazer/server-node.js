const mongoose=require('mongoose');

const messageSchema=mongoose.Schema({
    dargaOfSending:[String],
    email:{type:String},
    title:{type:String},
    text:{type:String},
    date:[new Date()],
})
const Message=new mongoose.model("matchmaker",messageSchema);
module.exports=Message;