const mongoose = require('mongoose');

const owner_info_Schema = new mongoose.Schema({ 
    name:String,
    phoneNo:Number,
}) 
 
module.exports = mongoose.model('owner_contacts', owner_info_Schema)