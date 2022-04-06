const mongoose=require("mongoose");
const express=require("express");
const bodyParser=require("body-parser");
const router=express.Router();
const orders=require('../model/orderModel');

router.use(bodyParser());

// router.post("/data",(req,res)=>{
//     try{
//         res.json("success")
//     }catch(e){
//         res.json("failed")
//     }
// })

router.post("/cart/add",async(req,res)=>{
    // console.log(req.body);
    const Total=req.body.quantity * req.body.price;
    // console.log(Total);
    const order=await orders.insertMany({
        user:req.user,
        name:req.body.name,
        image:req.body.image,
        price:req.body.price,
        quantity:req.body.quantity,
        total:Total
    });
    return res.status(200).json({
        success:true,
        message:"order stored in cart"
    })
})

router.get("/cart/get",async(req,res)=>{
    const data=await orders.find({user:req.user})
    // console.log(data)
    if(data){
        return res.status(200).json({
            success:true,
            message:"ordered data fetched",
            data
        })
    }else{
        return res.status(404).json({
            success:false,
            message:"not fetched"
        })
    }
})


router.delete("/cart/delete/:id",async(req,res)=>{
    console.log(req.params.id)
    const orderDelete=await orders.deleteOne({_id:req.params.id,user:req.user});
    console.log(orderDelete);
    if(orderDelete.deletedCount===1){
        res.status(200).json({
            success:true,
            message:"deleted successfully"
        })
    }else{
        res.status(404).json({
            success:false,
            message:"not deleted"
        })
    }
})

module.exports=router;
