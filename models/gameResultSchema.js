const mongoose = require('mongoose');

const gameResultSchema = new mongoose.Schema({ 
    name:String,
    date:Date,
    result:String,
    gameId:String,
    code:String,
}) 
 
module.exports = mongoose.model('gameResults', gameResultSchema)