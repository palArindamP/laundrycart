const mongoose = require('mongoose');
const express = require("express");
const app = express();

const mongodb = "mongodb+srv://arindam:arindam@cluster0.f9ttixi.mongodb.net/?retryWrites=true&w=majority"

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
// connecting to database------ using URL
mongoose.connect(mongodb,connectionParams)
.then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log("db not connected: ", err);
});
const middleware =(req, res, next)=>{
    console.log(`Hello Middleware`);
    next();
}




app.get('/', (req, res) =>{
    res.send('Page')
})


app.get('/about', middleware, (req, res) =>{
    res.send('aboutPage')
})

app.listen(8000, ()=>{console.log(`server is connected at 8000 port`)});