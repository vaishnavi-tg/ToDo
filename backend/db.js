const dotenv = require("dotenv")
const mongoose=require("mongoose")

dotenv.config()

mongoose.connect(process.env.MONGO_URI)

const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const Todo = mongoose.model("Todo",todoschema)

module.exports={
    Todo:Todo
}