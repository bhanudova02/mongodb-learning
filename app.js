import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("Server Stated...")
});


app.listen(5500,()=>{
    console.log("Subscription Tracker API http://localhost:5500")
})

export default app;