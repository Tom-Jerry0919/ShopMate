const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcrypt');
const cors = require('cors');
const port = 3000;
const AuthRoutes = require('./Routes/authRoutes');
const ProductRoutes = require('./Routes/productRoutes');

app.use(express.json());
app.use(cors());

require('dotenv').config();

const connectDB = require('./config/db');
connectDB();
app.use('/auth', AuthRoutes);

app.use("/product", ProductRoutes);
   app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((err, req, res, next) => {
  if (err && err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON payload' });
  }
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON payload' });
  }
  next();
});
// .
  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});