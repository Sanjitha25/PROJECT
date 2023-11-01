const expRef = require('express')
const sqlRef = require('mysql2')
const bodyParser = require('body-parser')
const cors = require('cors')
const seed = expRef()

const db = sqlRef.createConnection(
    {
        "host":"localhost",
        "user":"root",
        "password":"@Vishnu25",
        "database":"seed_arrangement"
    }
)

seed.use(bodyParser.urlencoded({extended:true}))
seed.use(bodyParser.json())
seed.use(cors())

db.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Database connected!!!")
    }
})

seed.post('/insert',async(req,res)=>{
    const {seed_id,seed_name,seed_type,seed_recommended_period,seed_recommended_season,seed_price,seed_quantity} = req.body
    const sql = "insert into online_seed_repository values (?,?,?,?,?,?,?)"
    db.query(sql,[seed_id,seed_name,seed_type,seed_recommended_period,seed_recommended_season,seed_price,seed_quantity],(err,result)=>{
        if(err){
            res.status(500).json({"error":err.message})
        }
        res.status(200).json({"message":result.affectedRows})
})
})

seed.get('/listAll',async(req,res)=>{
    const sql = "select * from online_seed_repository"
    db.query(sql,(err,records)=>{
        if(err){
            res.status(500).json({"error":err.message})
        }
        if(records.length==0){
            res.status(201).json({"error":"No records found"})
        }
        res.status(200).json({records})
    })
})

seed.delete('remove/:seed_id',async(req,res)=>{
    const sql="delete form online_seed_repository where seed_id=???????"
    db.query(sql,[req.params.seed_id],(err,result)=>{
        if(err){
            res.status(500).json({"error":err.message})
        }
        res.status(200).json({"message":result.affectedRows})
    })
})

seed.listen(1234,()=>{
    console.log("My Server is Running!!!")
})