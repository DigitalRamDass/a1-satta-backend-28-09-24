
const games = require('../models/gameSchema');
const AddGame = async (req, res) => {
    try {
        console.log("req.body=>", req.body);
        const result = await games.create(req.body);
        res.status(201).send(result);
    } catch (error) {
        console.error('Error adding game', error);
        res.status(500).send("Error adding game ");
    }
};

const GetGames=async (req,res)=>{
    const result=await games.find();
    if(result)
    {
        res.status(201).send(result);
    }
    else
    {
        res.status(500).send("Error getting game ");
    }
}

const DeleteGame=async(req,res)=>{
    console.log("dalate req.body=>",req.body);
    const result=await games.findByIdAndDelete({_id:req.body.id});
    if(result)
    {
        res.status(201).send(result);
    }
    else
    {            
        res.status(500).send("Error deleting game ");
    }
}

const UpdateGame = async (req, res) => {
    try {
        console.log("update=>",req.body);
        const { _id, name, code, resultTime,resultShowTime, showNumber } = req.body;
        const result = await games.findByIdAndUpdate(
            _id,
            { name, code, resultTime,resultShowTime, showNumber},
            { new: true }
        );
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send("Game not found");
        }
    } catch (error) {
        console.error('Error updating game', error);
        res.status(500).send("Error updating game");
    }
};


module.exports = {AddGame,GetGames,DeleteGame,UpdateGame};


