const express=require('express')
const router=express.Router()
const {registeruser,loginuser,getuser}=require('../controllers/usercontrollers')
const {protect}=require('../errormiddleware/authmiddleware')

router.route('/').post(registeruser)
router.route('/login').post(loginuser)
router.route('/me').get(protect,getuser)



module.exports=router
