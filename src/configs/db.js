const mysql=require("mysql");
var connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gulashan@123',
    database: 'gulshan'
});

connection.connect((err)=>{
    if(!err){
      console.log("Connected successfully!");
    }else{
        console.log("error", err);
    }
});

module.exports=connection;