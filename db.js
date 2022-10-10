const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect('mongodb+srv://User:Password@cluster0.sxzowuz.mongodb.net/test' , {useNewUrlParser : true});
         console.log('MongoDB Connection Successful')
     } catch (error) {
         console.log('MongoDB Connection Failed')
     }

}

module.exports = mongoose