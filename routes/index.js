const userRouter =require('./UserRouter');

const router =(app)=>{
    app.use('/api/user',userRouter)
}

module.exports=router;