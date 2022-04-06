const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const orderSchema=new Schema({
    name:{type:String},
    image:{type:String},
    quantity:{type:Number},
    price:{type:Number},
    total:{type:Number},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
},{
    timestamps:true
})

const orders=mongoose.model("Order",orderSchema);

module.exports=orders;