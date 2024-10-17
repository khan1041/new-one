




const  express=require('express')
const db=require('./Datalocation/db')
const app=express()
const cors=require('cors')
const port=8000
app.use(express.json())
const coursOption={
origin:"*"
}

const reg=require('./Skima/Peraon')

//const router=require('./router/auth-router')

app.use(cors(coursOption))
//app.use("/app/auth",router)

app.get('/hell', (req, res) => {
    res.send('Hello World!')
  })

app.post('/res',async(req,res)=>{

  try {
    const {name,email,password}=req.body
    const datafind=await reg.findOne({email})

    if(datafind){
      return res.status(200).json("this is hvend")
    }
    
   const usercreate=await reg.create({
    name,email,password
   }) 
   console.log(usercreate)
   res.status(201).json({msg:usercreate})

  } catch (error) {
    console.log(error)
  }


})



db().then(()=>{

  app.listen(port,()=>{

   console.log(`surver is running at port:${port}`)    

  })

})
