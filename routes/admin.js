
const express = require('express')

const router = express.Router()

router.get('/add-product',(req,res,next) => {
    res.send('<form action="product" method="POST"><input type="text" name="product"><input type="number" name="size"><button type="submit">submit</button></form>')
})

router.post('/product',(req,res,next) => {
    console.log(req.body)
    res.redirect('/shop')
})


module.exports = router