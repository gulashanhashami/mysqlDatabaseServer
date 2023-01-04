const express=require('express');
const connection=require("./configs/db");
const app=express();
const cors=require("cors");
const productController=require("./controllers/products.controller");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
const corsOption={
     origin: "*",
     Credential:true,
     optionSuccessStatus:200
}
app.use(cors(corsOption));
app.use("/products", productController);


const port=2345;
app.listen(port, async()=>{

     await connection;
});