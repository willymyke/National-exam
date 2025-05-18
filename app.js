const mysql = require('mysql')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shop'
})
// connection..........
conn.connect(() => {
    console.log('Database Connected!!!')
})
// middleware.........
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

// registration...........
app.post('/register', (req, res) => {
    const { username, password } = req.body
    const sql = "INSERT INTO `shopkeeper`(`username`, `password`) VALUES (?,?)"
    conn.query(sql, [username, password], (err) => {
        if (err) {
            console.log('internal server err', err)
            res.status(500).json({ error: 'User not registered!!', details: err })
        } else {
            res.json({ result: 'User registered well!!!' })
        }
    })
})
///login..........
app.post('/login', (req, res) => {
    const { username, password } = req.body
    const sql = "SELECT * FROM shopkeeper WHERE username=?"
    conn.query(sql, [username], (err, result) => {
        if (err) { console.log(err) }
        if (result.length === 0) {
            return res.json({ message: 'user not exist', err: true })
        }
        const user = result[0]
        if (user.password === password) {
            return res.json({ message: 'Welcome' + user.username, err: false })
        } else {
            return res.json({ message: 'Wrong username or password', err: true })
        }

    })
})

//insert of product
app.post('/product', (req, res) => {
    const { productCode, productName } = req.body
    const sql = "INSERT INTO product (productcode,productname) VALUES(?,?)"
    conn.query(sql, [productCode, productName], (err, result) => {
        if (err) {
            console.log("Product not inserted", err)
            return res.json({ error: 'Product could not Inserted.' })
        } else {
            console.log("Product inserted!!!")
            return res.json({ message: 'Product inserted!!' })
        }
    })
})
///Insert product In.........
app.post('/productin', (req, res) => {
    const { productCode, Quantity, UniquePrice } = req.body
    const TotalPrice = Quantity * UniquePrice
    const sql = "INSERT INTO `productin`(`ProductCode`, `Date`, `Quantity`, `UniquePrice`, `TotalPrice`) VALUES (?,CURDATE(),?,?,?)"
    conn.query(sql, [productCode, Quantity, UniquePrice, TotalPrice], (err, result) => {
        if (err) {
            console.log("Product Not Added", err)
            return res.json({ error: 'Product Does Not Added ' })
        } else {
            console.log('Product Added Well')
            return res.json({ message: 'Product Added Well' })
        }
    })
})
//Select ProductIn While I'm inserting Product 
app.get('/')



// server.............
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
//::login:::::
app.post('login',(req,res)=>{
    const {username,email,password}=req.body
    const sql="SELECT * FROM users WHERE username=?"
    dn.query(sql,[username],(err,result)=>{
        if (err) {console.log(err)}
        if (result.length==[0]) {
            res.json({message:'user not exist',err:true})
            
        }

    })
})