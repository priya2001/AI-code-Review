const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const aiRoutes = require('./routes/ai.routes');
const authRoutes = require('./routes/authRoutes'); 
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Routes
app.use("/auth", authRoutes);
app.use('/ai', aiRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log(" Server running on port 5001")))
  .catch(err => console.log("❌ DB Connection Error:", err));

module.exports = app;
