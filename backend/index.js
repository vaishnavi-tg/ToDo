const express=require("express")
const {createtodo}=require("./types")
const {updatetodo}=require("./types")
const {Todo}=require("./db")
const cors=require("cors")

const app=express()

app.use(express.json())
app.use(cors())
app.post("/todo",async function(req,res){
    const createpaylod=req.body
    console.log(createpaylod);
    
    const parsepayload=createtodo.safeParse(createpaylod)
    if(!parsepayload.success){
        res.json({
            msg:"you have sent the wrong inputs"
        })
        return 
    }
    await Todo.create({
        title:createpaylod.title,
        description:createpaylod.description,
        completed:false
    })
    res.json({
        msg:"Todo created"
    })


})
app.get("/todos",async function(req,res){
    const todos=await Todo.find()
    res.json({
        todos
    })

})
app.put("/completed",async function(req,res){
    const updatepayload=req.body
    const parsepayload=updatetodo.safeParse(updatepayload)
    if(!parsepayload.success){
        res.status({
            msg:"You have sent the wrong inputs"
        })
        return 
    }
    await Todo.update({
        _id : req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })

})


app.listen(3000)
