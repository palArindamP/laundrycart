const express = require('express');
const mongoose = require('mongoose');
const app = express();

//// mongoDB connection
const DB = 'mongodb+srv://arindam:arindam@cluster0.f9ttixi.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB 
,{
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
    // useFindAndModify: false
}
).then(() =>{
    console.log("connection done sucessfully")
}).catch((err) => {
    console.log(err)
})

//1//// Middelware.
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

app.get('/contact', (req, res) =>{
    
    res.send('contactPage')
})

app.get('/signin', (req, res) =>{
    res.send('signinPage')
})

app.get('/signup', (req, res) =>{
    res.send('signupPage')
})




app.listen(5000, () =>{
    console.log(`AT PORT 5000`)
})