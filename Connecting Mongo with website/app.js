let app = require("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
let port = 9090;
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"
app.get("/",(req,res)=>{
    //console.log(__dirname)
    //console.log(__dirname+"/login.html")
    res.sendFile(__dirname+"/index.html");
})
app.get("/addcourse.html",(req,res)=>{
   res.sendFile(__dirname+"/addcourse.html")
})
app.post("/storeDetails",(req,res)=>{
    let cid = req.body.cid
    let cname = req.body.cname
    let cdes = req.body.cdes
    let amount = req.body.amount
    mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
        if(!err1){
                    let db = client.db("meanstack");
            db.collection("CourseDetails").insertOne({_id:cid,cname:cname,cdes:cdes,price:amount},(err2,result)=>{
                    if(!err2){
                        console.log(result.insertedCount);
                    }else {
                        console.log(err2.message);
                   
                    }  
                     
                });
              //  client.close();
            } 
        });
        res.sendFile(__dirname+"/addcourse.html")
})
app.get("/updateCourse.html",(req,res)=>{
    res.sendFile(__dirname+"/updateCourse.html")
})
app.post("/updateCourse",(req,res)=>{
    let cid = req.body.cid
    let amount = req.body.amount
    mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
        if(!err1){
            let db = client.db("meanstack");
            db.collection("CourseDetails").updateOne({_id:cid},{$set:{price:amount}},(err2,result)=> {
                if(!err2){
                      console.log(result.updatedCount)
                } else{
                    console.log(err2.message)
                }
              //  client.close();
            })           
        }
    })
    res.sendFile(__dirname+"/updateCourse.html")
})

app.get("/deleteCourse.html",(req,res)=>{
    res.sendFile(__dirname+"/deleteCourse.html")
})

app.post("/deleteCourse",(req,res)=>{
    let cid=req.body.cid;
    mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
        if(!err1){
            let db = client.db("meanstack");
            db.collection("CourseDetails").deleteOne({_id:cid},(err2,result)=> {
                if(!err2){
                    console.log(result.deletedCount)
                } else{
                    console.log(err2.message)
                }
                      
               
              //client.close();
            })           
        }
    })
    res.sendFile(__dirname+"/deleteCourse.html")
    
})
app.get("/fetchCourse.html",(req,res)=>{
    res.sendFile(__dirname+"/fetchCourse.html")
})
app.post("/retrieveCourse",(req,res)=>{
    mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
        if(!err1){
            let db = client.db("meanstack");
           // let cursor = db.collection("Product").find();
           let cursor = db.collection("CourseDetails").find(); 
            //console.log(cursor);
                cursor.each((err2,doc)=> {
                        if(doc!=null){
                    //console.log(doc);
                    console.log("id is "+ doc._id +" Course Name is "+doc.cname+" Course Description is "+doc.cdes+" Course Price is "+doc.price);
                        }
                   client.close();
                })
           
        }
    })
    res.sendFile(__dirname+"/fetchCourse.html")
})

app.listen(port,()=>console.log(`Server running on port number ${port}`))