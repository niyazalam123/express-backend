import mongoose, { Schema } from "mongoose";

const UserModels =  new Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
    }
},{timestamps:true})

const user = mongoose.model("User",UserModels);
export default user;