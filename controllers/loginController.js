
const login = require('../models/loginSchema');
const AddLogin = async (req, res) => {
    try {
        console.log("req.body=>", req.body);
        const result = await login.create(req.body);
        res.status(201).send(result);
    } catch (error) {
        console.error('Error adding owner', error);
        res.status(500).send("Error adding login details ");
    }
};

const GetLogin=async (req,res)=>{
    console.log("login =>",req.body);
    try {
        const { name, password } = req.body;
        const user = await login.findOne({ name, password });
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(401).send("Invalid login details");
        }
    } catch (error) {
        console.error('Error finding login', error);
        res.status(500).send("Error finding login details");
    }
}


module.exports = {AddLogin,GetLogin};


