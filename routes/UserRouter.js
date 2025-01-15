const express= require('express');
const router =express.Router();
const UserController =require("../controller/UserController");

router.get('/index',UserController.index);

module.exports=router;