const mongoose = require('mongoose')

const connectDB = async () => {
    try {
         const connection = await mongoose.connect(process.env.MONGO_URI, {
             useUnifiedTopology: true
        })
        console.log(`Database Connection successful ${connection.connection.host}`);
    } catch (error) {
        console.log(`Database Error: ${error.message}`)
    }
}

module.exports = connectDB