const asyncHandler=require('express-async-handler');
const jwt=require('jsonwebtoken');
const User=require('../models/usermodel');

const protect=asyncHandler(async (req,res,next)=>{

    let token;
    if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer')){
    try {
        

            //get token
        token=req.headers.authorization.split(' ')[1];
        
        //auth
        
        const decoded=jwt.verify(token,'aniket');
        
        
        req.user=await User.findById(decoded.id).select('-password');

        next()
        
    } catch (error) {
    
       
       res.status(401) 
       throw new Error('NOT AUTHORIZED')

    }
} 
    if(!token){

        res.status(401) 
        throw new Error('NOT AUTHORIZED, no token')
      
    }
})







module.exports={protect}

