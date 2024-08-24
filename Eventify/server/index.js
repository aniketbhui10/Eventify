const express=require("express");
const app=express();
const color=require('colors')
const cors=require('cors')

const connectdb= require('./config/db')


connectdb();
 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));

app.use('/api/events',require('./routes/eventRoutes'))
app.use('/api/users',require('./routes/userRoutes'))



app.listen(5000,()=>{
    console.log("all good")
})