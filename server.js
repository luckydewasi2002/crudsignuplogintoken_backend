// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const port = 5000;


// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));


// const MONGO_URL ='mongodb://localhost:27017/cruds'

// mongoose.connect(MONGO_URL)
//     .then(() => {
//     console.log('connected to mongodb')
//     })
//     .catch((error) => {
//        console.log('error connecting to mongodb ')
//     })

// const userRoutes = require('./routers/user')
// app.use('/user', userRoutes)

// app.listen(port, () => {
//     console.log(`server is running on ${port}`)
// });

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000

app.use (express.json());
app.use(express.urlencoded({extended:true}))

const mongoUrl = 'mongodb://localhost:27017/cruds'

mongoose.connect(mongoUrl)
.then(()=>{
    console.log('>>>>>>>Connected to MongoDB')
})
.catch((err)=>{
    console.log('>>>>>>>Error connecting to MongoDB')
});

const userRoutes = require('./routers/user')
app.use('/users',userRoutes)

app.listen(port,()=>{
    console.log(`>>>server is running on port ${port}`)
    })