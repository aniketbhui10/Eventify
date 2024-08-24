const asyncHandler=require('express-async-handler');
const Event=require('../models/eventmodel')
const User=require('../models/usermodel')



//@desc getEvents
//@route GET api/events
//@access private

const getgoals= asyncHandler(async (req,res)=>{

    const events= await Event.find({user:req.user.id});

    res.send(events);

   // if(!req.body.text){
    //  res.status(400)
   //   throw new Error('please add a text file');
  //  }

  //  res.status(200).json({message:"all good whores"})
})



//@desc setEvents
//@route POST api/events
//@access private

const setgoals= asyncHandler(async (req,res)=>{

    const event=await Event.create({
        text: req.body.text,
        user:req.user.id
    })
    res.send(event)
   // res.send('set whores')
})


//@desc putEvents
//@route PUT api/events/:id
//@access private

const putgoals= asyncHandler(async(req,res)=>{
  const event=await User.findById(req.params.id)
  const user=await User.findById(req.user.id) 

  if(!user){
    req.statusCode(401)
    throw new Error('user not found')
  }

  if(event.user.toString()!==user.id){
    req.statusCode(401)
    throw new Error('user not authorized')

  }


    const updatedevent=await Event.findByIdAndUpdate(req.params.id,req.body,{new:true})
   
   
   res.send(updatedevent)
    // res.send(`put goal ${req.params.id}`)
})



//@desc deleteEvents
//@route DELETE api/events/:id
//@access private

const deletegoals=asyncHandler(async(req,res)=>{

    const event=await User.findById(req.params.id)
    const user=await User.findById(req.user.id) 

  if(!user){
    req.statusCode(401)
    throw new Error('user not found')
  }

  if(event.user.toString()!==user.id){
    req.statusCode(401)
    throw new Error('user not authorized')

  }

    await Event.deleteOne()

    res.send({id:req.params.id})
})


module.exports={getgoals,setgoals,putgoals,deletegoals}