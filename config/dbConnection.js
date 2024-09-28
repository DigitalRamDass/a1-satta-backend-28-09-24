require('dotenv').config();
const mongoose = require('mongoose');

const DB_LINK=process.env.DB_LINK;

mongoose.set('debug', true); 
mongoose.connect(DB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
