require("dotenv").config();
const mongoose = require("mongoose");

const mongodbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Mongodb Database is connected to ${connection.connection.host}`
    );
  } catch (error) {
    console.log(`Error:${error.message}`);
  }
};
module.exports = mongodbConnection;
