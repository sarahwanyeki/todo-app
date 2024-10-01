const mongoose = require("mongoose")


const connectMongodb = async() => {
  try {
    await mongoose.connect(process.env.connection_Url) 
    console.log("Database Connection Successful");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
    
  }

}

module.exports = connectMongodb;