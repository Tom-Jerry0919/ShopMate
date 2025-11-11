const mongoose = require('mongoose');
// require('dotenv').config();
mongoose.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
      return console.log('Connected to MongoDB Successfully');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};
module.exports = mongoose.connectDB;