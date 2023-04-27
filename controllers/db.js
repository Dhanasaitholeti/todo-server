const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/todos";


const connecttodb = async () => {
    try {
        await mongoose.connect(url)
        console.log("connected to database");        
    } catch (error) {
        console.log("err connecting to Database")
        console.log(error)
    }
}

module.exports = connecttodb;