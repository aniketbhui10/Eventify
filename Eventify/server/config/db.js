const mongoose=require('mongoose');


const connectdb=async ()=>{

    try{
     const conn= await mongoose.connect('mongodb+srv://gojosatoru010:%23Aniket010@eventcluster.wlmrxtv.mongodb.net/?retryWrites=true&w=majority&appName=Eventcluster');
   
console.log(`databaseinline ${conn.connection.host}`.cyan)

    } catch(error){
console.log('error')
    }
}

module.exports=connectdb;