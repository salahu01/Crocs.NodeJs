const { default: mongoose } = require("mongoose");

async function connectDb(){
    await mongoose.connect('mongodb+srv://swalahu:salahu37@crocs.2mrp72j.mongodb.net/crocs?retryWrites=true&w=majority');
}

module.exports = connectDb;
