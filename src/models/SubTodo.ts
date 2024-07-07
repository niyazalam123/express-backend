import mongoose,{Schema} from "mongoose";

const subTodoSchema = new Schema({
    content:{
        type:String,
        required:true,
    },
    isCompleted:{type:Boolean,default:false},
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

const subTodo = mongoose.model("subTodo",subTodoSchema);

export default subTodo