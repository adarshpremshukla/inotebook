const mongoose = require("mongoose");

const connectTOMongo = async () => {
  const mongoURI =
    "mongodb+srv://adarshshukla:adarshshukla@cluster0.f0o5o.mongodb.net/inotebook?retryWrites=true&w=majority&appName=Cluster0";

  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB sucessfully");

   
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }

};
module.exports = connectTOMongo;

