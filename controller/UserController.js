const User =require("../models/User")

const UserController = {
    index:async(req,res)=>{
            try{ 
                await User.getAll(function(users){
                const result={
                    users:users,
                    status:true,
                    message:"tai du lieu thanh cong"    
                }
                return res.status(200).json(result)
                })
                }catch(error){
                    const result={
                        users:null,
                        status:false,
                        message:error.message,
                    }
                    return res.status(200).json(result)
                }
    }
}

module.exports=UserController;