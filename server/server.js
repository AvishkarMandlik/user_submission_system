const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});