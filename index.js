const express = require("express");
const app = express();
const port = 3000;

const products = [
  {
    name: 
  }
]
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post('/', (req,res) => {
  res.send('Is this post thing working or not?')
})

app.use(function(req,res,next){

  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();

  //First thing database is going to be full of, is products with image URL's and a title, and a price, description, categories
})