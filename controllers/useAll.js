const mongoose=require('mongoose');
// const UseAll=require("../models/users");

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
const getAllDoneShiduchim = async (req, res) => {
    try {
        let books = await Book.find({});
        res.send(books)
    }
    catch (e) {
        res.status(400).send(e.message)
    }

}
const filterUsersCards = async (req, res) => {
    try {
        
    }
    catch (e) {
        res.status(400).send(e.message)
    }

}
module.exports={
    getAllDoneShiduchim,
    sendMessageToManager,
    sendQuestionPageToManager,
    filterUsersCards
}