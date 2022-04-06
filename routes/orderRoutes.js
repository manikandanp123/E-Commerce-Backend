const mongoose=require("mongoose");
const express=require("express")
const router=express.Router();
const items=require("../model/itemModel");

router.get("/products",async(req,res)=>{
    const user=await items.find();
    // console.log(user)
    if(user){
        res.status(200).json({
            success:true,
            message:"products fetched",
            user
        })
    }else{
        res.status(404).json({
            success:false,
            message:"no products there..."
        })
    }
})

router.get("/:name",async(req,res)=>{
    // console.log(req.params.id);
    const data=await items.findOne({"name":req.params.name})
    // console.log(data);
    res.status(200).json({
        success:true,
        message:"one item data fetched",
        data
    })
})
module.exports=router;
