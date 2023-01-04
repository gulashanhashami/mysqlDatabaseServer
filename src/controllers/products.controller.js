
const express=require("express");
const connection=require("../configs/db");
const router=express.Router();

// code for post the data 
router.post("", async(req, res)=>{
    let product=req.body;
    query="insert into product(name, description, price) values(?,?,?)";
    connection.query(query, [product.name, product.description,product.price],(err, results)=>{
        if(!err){
            return res.status(201).json({message:"product added successfully!", product});
        }
        else{
            return res.status(500).json(err);
        }
    })
});

// code for get all the data
router.get("", async(req, res)=>{
    let query="select * from product";
   connection.query(query,(err,results)=>{
    if(!err){
        return res.status(200).json(results);
    }
    else{
        return res.status(500).json(err);
    }
   })
});

// code for get the data by id
router.get("/:id", async(req, res)=>{
    const id=req.params.id;
    let product=req.body;
    let query= "select * from product where id=?";
    connection.query(query, [id], (err, results)=>{
        if(!err){
            if(results.length===0){
                return res.status(404).json({message:"Product id is not found, please check again."});
            }
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

// code for update the table data by id
router.patch("/:id", async(req, res)=>{
     const id= req.params.id;
     let product=req.body;
     var query="update product set name=?, description=?, price=? where id=?";
     connection.query(query, [product.name, product.description,product.price,id], (err, results)=>{
        if(!err){
           if(results.affectedRows===0){
            return res.status(404).json({message:"Product id is not found, please check again."})
           }else
            return res.status(200).json({message:"product updated successfully"});
        }
        else{
            return res.status(500).json(err);
        }
     })
});

// delete the data from table by id
router.delete("/:id", async(req, res)=>{
    const id=req.params.id;
    let query="delete from product where id=?";
    connection.query(query, [id], (err, results)=>{
        if(!err){
            if(results.affectedRows===0){
                return res.status(404).json({message:"Product id is not found, please check again."});
            }
            return res.status(200).json({message:"Product deleted successfully"});
        }
        else{
            res.status(500).json(err);
        }
    })
})

module.exports=router;