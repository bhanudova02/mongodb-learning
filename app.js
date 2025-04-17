import express from 'express';

const app = express();

// you can create like routes like this
// you can use method like this --> app.get() --> app.post() --> app.put()
// in this case we will use --> app.get() method

app.get("/",(req,res)=>{
 res.send("Welcome To The Subsription Tracker API!")
});
// ("/") --> path where routes would be reachable
// app.get('/',()=>{}) --> uses callback function
// inside the above arrow function two arguments is required to access the information
// app.get('/',(req,res)=>{})




// you can create your first route this is not enough to access routes
// we have to make the server listen, for request trying to access specific routes
// you can do like this 
app.listen(3000,()=>{
    console.log("Subscription Tracker API is running on http://localhost:3000")
})

// 3000 ---> port 
// () =>{} --> using callback function

//don't forget to export defalut app;

export default app;