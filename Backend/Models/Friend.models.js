import mongoose from "mongoose"
const FriendSchema = new mongoose.Schema({
    userId1:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    userId2:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{"timestamps":true})

export const Friend=mongoose.model("Friend",FriendSchema)