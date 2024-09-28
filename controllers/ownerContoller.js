
// const owner = require('../models/owner_info_Schema');
// const AddOwner = async (req, res) => {
//     try {
//         console.log("req.body=>", req.body);
//         const result = await owner.create(req.body);
//         res.status(201).send(result);
//     } catch (error) {
//         console.error('Error adding owner', error);
//         res.status(500).send("Error adding owner ");
//     }
// };

// const GetOwner=async (req,res)=>{
//     const result=await owner.find();
//     if(result)
//     {
//         res.status(201).send(result);
//     }
//     else
//     {
//         res.status(500).send("Error adding owner ");
//     }
// }

// const DeleteOwner=async()=>{
//     await owner.deleteMany({});
// }

// module.exports = {AddOwner,GetOwner,DeleteOwner};
















const Owner = require('../models/owner_info_Schema');

const addOwner = async (req, res) => {
  try {
    const result = await Owner.create(req.body);
    res.status(201).send(result);
  } catch (error) {
    console.error('Error adding owner', error);
    res.status(500).send("Error adding owner");
  }
};

const getOwners = async (req, res) => {
  try {
    const result = await Owner.find();
    res.status(200).send(result);
  } catch (error) {
    console.error('Error fetching owners', error);
    res.status(500).send("Error fetching owners");
  }
};

const deleteOwner = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await Owner.findByIdAndDelete(id);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send("Owner not found");
    }
  } catch (error) {
    console.error('Error deleting owner', error);
    res.status(500).send("Error deleting owner");
  }
};

const updateOwner = async (req, res) => {
  try {
    const { _id, name, phoneNo } = req.body;
    const result = await Owner.findByIdAndUpdate(_id, { name, phoneNo }, { new: true });
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send("Owner not found");
    }
  } catch (error) {
    console.error('Error updating owner', error);
    res.status(500).send("Error updating owner");
  }
};

module.exports = { addOwner, getOwners, deleteOwner, updateOwner };

