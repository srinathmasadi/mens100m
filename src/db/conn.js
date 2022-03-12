const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/olympics", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log("No connection ");
})