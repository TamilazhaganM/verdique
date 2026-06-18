import express from "express"
import cors from "cors"

const PORT = 5000
const app = express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello world from verdique server")
})
app.post("/client", async(req,res)=>{
    const {name,mail,phone,message} = req.body
    console.log("Client route is hit");
    if(name && mail && phone && message){
        res.status(200).json({message:"All details are collected"})
    }else{
        res.status(400).json({message:"Please fill all the details"})
    }
        
})
app.listen(PORT, ()=>{ console.log( `Server is running on port ${PORT}`)})