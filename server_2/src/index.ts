import Express from 'express'
import {GrpcTestController} from "./controller/GrpcTestController";
import {APP_PORT} from "./config/app.config";

/**
 * EXPRESS INSTANCE
 */
const app = Express()
app.get('/sum', GrpcTestController.sum)
app.listen(APP_PORT,()=>{
    console.log(`Application started at port ${APP_PORT}`)
})
