const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
let app = express()

//going to take form post data (urlencoded)and make it available for us on request.body and our route handler
app.use(bodyParser.urlencoded({ extended: false }))

//creating a route
app.post('/formsubmission', (req, res) => {
    console.log(req.body.email)
    console.log(req.body.name)
    res.send(`Thanks ${req.body.name} for your email: ${req.body.email}`)
})

//CREATE MIDDLEWARE USING APP.USE
//CONSOLE LOGS EVERY REQ.URL AND PASSES FLOW TO NEXT FUNCTION
// app.use('/',(req,res,next)=>{
// console.log(req.originalUrl) //the / will show in console
// next();
// })

//will go to this next middleware
// app.get('/',(req, res)=>{
//     res.send('Hello from the web server side')
// })

//use this middleware and serve up any files in the public folder
app.use(express.static(path.join(__dirname, '../public')))


app.listen(3000);
