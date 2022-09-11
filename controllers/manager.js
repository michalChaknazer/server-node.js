const mongoose=require('mongoose');
const Manager=require("../models/manager");

const getAllNewRegisters = async (req, res) => {
    try {
        
    }
    catch (e) {
        res.status(400).send(e.message)
    }

}
const deleteUsers = async (req, res) => {
    try {
        
    }
    catch (e) {
        res.status(400).send(e.message)
    }

}
const getAllMassagesFromUsers = async (req, res) => {
    try {
        
    }
    catch (e) {
        res.status(400).send(e.message)
    }

}
const getAllMassagesFromMatchmakers = async (req, res) => {
    try {
        
    }
    catch (e) {
        res.status(400).send(e.message)
    }

}
module.exports={
    getAllNewRegisters,
    deleteUsers,
    getAllMassagesFromUsers,
    getAllMassagesFromMatchmakers,
    
}