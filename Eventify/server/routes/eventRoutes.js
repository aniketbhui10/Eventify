const express=require("express");
const { getgoals, setgoals,putgoals, deletegoals } = require("../controllers/eventcontrollers");
const router=express.Router();
const {protect}=require('../errormiddleware/authmiddleware')




router.route('/').get(protect,getgoals).post(protect,setgoals);
router.route('/:id').put(protect,putgoals).delete(protect,deletegoals);

//router.get('/',getgoals);
 
// router.post('/',setgoals);

 //router.put('/:id',putgoals);


// router.delete('/:id',deletegoals);





module.exports=router;