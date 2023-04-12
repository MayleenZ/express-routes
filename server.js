const express = require('express')
const PORT = 3000
const app = express()

//View Engine
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//Middleware
app.use(express.urlencoded({extended:false}))

//Routes

app.get('/', (req,res) => {
    res.render('Home')
})

app.get('/Yes', (req,res)=> {
    res.send("<h1>You say Yes</h1> <a href='/No'>Next</a>");
})

app.get('/No', (req,res) => {
    res.send("<h1>I say No</h1> <a href='/Stop'>Next</a>");
})

app.get('/Stop', (req, res)=> {
    res.send("<h1>You say Stop</h1> <a href='/Go'>Next</a>");
})

app.get("/Go", (req,res) => {
    res.send("<h1>I say Go Go Go</h1> <a href='/Goodbye'>Next</a>");
})

app.get("/Goodbye", (req,res)=> {
    res.send("<h1>I dont know why you say Goodbye</h1> <a href='/Hello'>Next</a>")

})

app.get("/Hello", (req,res)=> {
    res.send("<h1>I say Hello Hello Hello</h1> <a href='/High'>Next</a>")
})

app.get("/High", (req,res)=> {
    res.send("<h1>I say High</h1> <a href='/Low'>Next</a>")
})

app.get("/Low", (req, res)=> {
    res.send("<h1>You say Low</h1> <a href='/Why'>Next</a>")
})


app.get("/Why", (req,res)=> {
    res.send("<h1>You say Why?</h1> <a href='/IDK'>Next</a>")
})

app.get("/IDK", (req,res)=> {
    res.send("<h1>I say I dont know</h1> <a href='/Ending'>Next</a>")
})

app.get("/Ending", (req,res)=> {
    res.render('Ending')
})

//Listening Port
app.listen(3000, ()=>{
    console.log(`server port ${PORT} is running`);
})

