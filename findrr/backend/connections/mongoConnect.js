

const mongoose = require('mongoose');
const uri = "mongodb+srv://VishuSharma:XhUMmMBxlp9iZTVq@main.n7ukqvq.mongodb.net/Finder?retryWrites=true&w=majority&appName=main";

// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    await mongoose.connect(uri);
    console.log("Database is Connected!")
  } catch (error) {
    console.error("Unable to connect to Database", error);
  }
}
 
module.exports = run; 