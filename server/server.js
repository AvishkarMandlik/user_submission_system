const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectDB();

app.use('/api/submissions', require('./routes/submissions'));
app.use(
    cors({
      origin: "https://user-submission-system.onrender.com/api", 
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});