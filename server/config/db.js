const mongoose = require('mongoose');

const connectDB = (()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log(err,"MongoDB not connnected"));
}
)
module.exports = connectDB;