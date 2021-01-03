const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://r1computer:r1computer@cluster0.fdjzs.mongodb.net/computer?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true})
    .then(()=>{
        console.log("Database connected");
    })
    .catch((err)=>{
        console.log(err);
    })
module.exports = mongoose;
