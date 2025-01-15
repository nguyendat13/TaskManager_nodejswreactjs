const db =require("../config/db");

   const User={
    getAll:(mycallback)=>{
        const sql=`SELECT * FROM users`
        db.query(sql,function(err,users){
            if(err)
                {mycallback(null)}
            else{
                mycallback(users);
            }
        })
    }
   }
module.exports=User;