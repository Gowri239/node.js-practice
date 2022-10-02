const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product',(req,res,next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="product"><input type="number" name="size"><button type="submit">submit</button></form>')
})

app.post('/product',(req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})
app.listen(4000)