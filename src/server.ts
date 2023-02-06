import express, { json } from 'express'
import router from './Routes'
const app=express()

// Middlewares
app.use(json()) // add the body to the Request
app.use('/todos',router)

app.listen(4000, ()=>{
    console.log("App is Running ...");
    
})


