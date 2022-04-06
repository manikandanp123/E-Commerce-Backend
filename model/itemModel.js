const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const itemSchema=new Schema({
    name:{type:String},
    image:{type:String},
    des:{type:String},
    quantity:{type:Number},
    price:{type:Number}
},{
    timestamps:true
})

const items=mongoose.model("Item",itemSchema);

module.exports=items;