const mongoose=require('mongoose')

const eventSchema=mongoose.Schema({

user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'user',
  required:true
},

  text:{

    required:[true,"add a desc"],
    type:String
  },
  date:{

   required:[true,"add a date"],
   type:String

  },
  guests:{

   type:Array

  }
  


},{timestamps:true})

module.exports=mongoose.model('Event',eventSchema)

