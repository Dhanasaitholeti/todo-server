const mongoose = require('mongoose');

const url = `mongodb+srv://saribaby1999:tEZkbGCr9UrNpIzd@internass.p6o5y8k.mongodb.net/TODOS?retryWrites=true&w=majority`;


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