import mongoose,{Schema} from "mongoose";

const todoSchema =  new Schema({
    content:{
        type:String,
        required:true
    },
    isCompleted:{type:Boolean,default:false},
    subTodo:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"subTodo"
        }
    ],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

const todos = mongoose.model("Todo",todoSchema);
export default todos