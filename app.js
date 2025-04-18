import express from 'express';
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRoutes from './routes/subscription.routes.js';

const app = express();

//  api/v1/auth/sign-up     
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter)
app.use('/api/v1/subscription',subscriptionRoutes)

app.get('/',(req,res)=>res.send('Welcome To Subscription Tracker API'))

app.listen(PORT,()=>{
    console.log(`Server Stated: http://localhost:${PORT}`)
})
export default app; 