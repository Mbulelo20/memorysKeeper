const  mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://mbulelo:voyager123@mbulelo.eu7nw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        console.log(`${conn.connection.host}` .cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB;