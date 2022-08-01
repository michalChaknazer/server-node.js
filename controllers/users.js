


const mongoose=require('mongoose');
const Users=require("../models/users");

const sendMessageToManager = async (req, res) => {
    try {
        let books = await Book.find({});
        res.send(books)
    }
    catch (e) {
        res.status(400).send(e.message)
    }

}
const sendQuestionPageToManager = async (req, res) => {
    try {
        let books = await Book.find({});
        res.send(books)
    }
    catch (e) {
        res.status(400).send(e.message)
    }

}

module.exports={
    
    sendMessageToManager,
    sendQuestionPageToManager,
}