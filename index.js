
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
let jwt = require('jsonwebtoken')
const {Schema} = mongoose
const mongoURI = 'mongodb://localhost:27017/test'
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('mongoDB connected')).catch(err => console.log(err));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('connected!');
});

const app = express();
const port = 3001;

app.use(express.json())
app.use(morgan(':method :url :response-time') )
const products = new Schema ({
  name: String,
  imgurl: String,
  price: Number,
  category: String,
  id: Number,
  description: String
})

const users = [{
  username: 'BezosAmazon',
  password: 'QanonCabal',
},
{username: 'MAGA45',
password: 'maga2024'},
{username: 'yourMom',
password: 'motherofyou'},
]


let cart = [];
let balance = 2000;
app.use(function(req,res,next){

  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();

  //First thing database is going to be full of, is products with image URL's and a title, and a price, description, categories
})
// let cartItem = function(req,res,next){
//   req.cartItem = products[Math.floor(Math.random()*products.length)];
//   next();
// }
app.post('/users', (req,res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password
  }
  users.push(newUser);
  res.send(users)
})
app.get('/users', (req,res) => {
  res.send(users);
})
app.get('/', (req,res)=> {
  res.send(products)
})
app.post('/cart', function(req,res){
  req.cartItem = products[Math.floor(Math.random()*products.length)];
  cart.push(req.cartItem)
  res.send(cart);
})

app.delete('/cart', function(req, res){
  cart.filter((product) => product.id != req.body.id)
  res.send(cart);
})

app.get(`/phones`, (req,res)=> {
  
  res.send(products.filter((product) => product.category === 'phones'))
})

app.get("/entertainment", (req, res) => {
  res.send(products.filter((product) => product.category === 'entertainment'))
});
app.get("/appliances", (req, res) => {
  res.send(products.filter((product) => product.category === 'kitchen-appliances'))
});
app.get(`/:id`, (req, res) => {
   res.send(products.filter((product) => product.id === Number(req.params.id)))})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post('/', (req,res) => {
  res.send('Is this post thing working or not?')
})
app.patch('/purchase', (req,res) => {
  let spent = 0;
  for(let i of cart){
    spent = spent + i.price
  }
  cart = [];
  if(balance >= spent){
    balance = balance - spent
    res.send(`Thanks for purchasing.  Your total is ${spent}.  You have ${balance} left.`)
  }
  else{
    res.send('INSUFFICIENT FUNDS');
  }
  
})

app.put('/balance', (req,res) => {
  res.json(balance);
})

