const asyncHandler=require('express-async-handler');
const User=require('../models/usermodel');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')




//@desc createuser
//@route POST api/users/
//@access public
const registeruser=asyncHandler(async(req,res)=>{

    const{username,email,password}=req.body;
    
    
    if(!username||!password||!email){
        res.status(400)
        throw new Error('please add all fields');
    }

    const userexists= await User.findOne({email})

    if(userexists){
      res.status(400)
      throw new Error('user already exists');

    }

//hash password

const salt=bcrypt.genSalt(10)
const hashedpassword=bcrypt.hash(password,salt)

//create user

const user=User.create({

    username,
    email,
    password:hashedpassword
})

if(user){

    res.status(201).json({

        _id:user.id,
        email:user.email,
        username:user.username,
        token:generateToken(user._id)
        

    })
}
else{

    res.status(400)
    throw new Error('invalid user')
}
})



//@desc loginuser
//@route POST api/users/login
//@access public
const loginuser=asyncHandler(async(req,res)=>{

    const {email,password}=req.body;

    const userexists= await User.findOne({email})
 
    if(userexists&&(await bcrypt.compare(password,userexists.password))){
     res.status(201).json({
 
         _id:userexists.id,
         email:userexists.email,
         username:userexists.username,
         token:generateToken(userexists._id)
 
     })
   }
   else{
        res.status(400)
        throw new Error('invalid credentials')
 
   }
    
    })

//@desc getuser
//@route Get api/users/login
//@access private
const getuser=asyncHandler(async(req,res)=>{

  const{_id,username,email}=await User.findById(req.user.id);
  res.status(200).json({
    id:_id,
    username,
    email
  })
    
    })
    
    
    
//generate jwt  

const generateToken=(id)=>{

   return jwt.sign({id},'aniket',{expiresIn:'30d'})
}


module.exports={registeruser,loginuser,getuser}