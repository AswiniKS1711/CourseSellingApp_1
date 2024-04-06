const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')



//Middleware for parsing request bodies
app.use(bodyParser.json())
app.use("/admin",adminRouter)
app.use("/user",userRouter)

const PORT = 3000

app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
})