import connectionTest from "./mongoose";
const express = require("express");
const morgan = require("morgan");
let jwt = require("jsonwebtoken");
const cors = require("cors");

import { User } from "./models/usermodel";
import { Product } from "./models/productmodel";
import {Cart} from "./models/cartmodel"
let db = require('mongodb')


const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.use(express.json());
app.use(morgan(":method :url :response-time"));
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  next();
});
app.use(cors({ origin: true, credentials: true }));

connectionTest();
// console.log(Product)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();

  //First thing database is going to be full of, is products with image URL's and a title, and a price, description, categories
});

app.get("/", (req, res) => {
  Product.find({}, function (err, products) {
    if (err) {
      res.send(err);
      return;
    }
    // res.send(products.map((product) => (product.id)))
    res.send(products);
  });
});

app.get("/headphones", (req, res) => {
  Product.find({ category: "Headphones" }, function (err, products) {
    if (err) {
      res.send(err);
      return;
    }
    res.send(products);
  });
});
app.get("/computers", (req, res) => {
  Product.find({ category: "Computers" }, function (err, products) {
    if (err) {
      res.send(err);
      return;
    }

    res.send(products);
  });
});
app.post("/signUp", (req, res) => {
  const user = new User({
    // id: req.body.id,
    username: req.body.username,
    password: req.body.password, //req.body
  });
  user.save((err) => {
    res.send(products);
  });
});
app.get("/television", (req, res) => {
  Product.find({ category: "Televisions" }, function (err, products) {
    if (err) {
      res.send(err);
      return;
    }

    res.send(products);
  });
});
app.get("/", (req, res) => {
  User.find({}, function (err, user) {
    if (err) {
      res.send(err);
      return;
    }
    res.send(user);
  });
});

app.post("/signUp", (req, res) => {
  if (req.body.username && req.body.password) {
    const user = new User({
      // id: req.body.id,
      username: req.body.username,
      password: req.body.password, //req.body
    });
    user.save((err) => {
      if (err) {
        return console.log("error:", err);
      } else {
        res.send("User Created");
      }
    });
  } else {
    res.status(404).send("please fill in all missing fields");
  }
});
app.get("/", (req, res) => {
  let userList = user.map((users) => users);
  res.send(userList);
});
app.post("/addProducts", (req, res) => {
  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    imgurl: req.body.imgurl,
    price: req.body.price,
    category: req.body.category,
    description: req.body.description, //req.body
  });
  product.save((err) => {
    if (err) {
      return console.log(err);
    } else {
      res.send("product Created!");
    }
  });
});

// app.use(async (req, res, next) => {
//   try {
//     await connectionTest();
//     next();
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// });

// const products = new Schema({
//   name: String,
//   imgurl: String,
//   price: Number,
//   category: String,
//   id: Number,
//   description: String,
// });

// const users = [
//   {
//     username: "BezosAmazon",
//     password: "QanonCabal",
//   },
//   { username: "MAGA45", password: "maga2024" },
//   { username: "yourMom", password: "motherofyou" },
// ];

// // let cartItem = function(req,res,next){
// //   req.cartItem = products[Math.floor(Math.random()*products.length)];
// //   next();
// // }
// app.post("/users", (req, res) => {
//   const newUser = {
//     username: req.body.username,
//     password: req.body.password,
//   };
//   users.push(newUser);
//   res.send(users);
// });

// app.get("/", (req, res) => {
//   res.send(products);
// });
app.get("/cart", function(req,res){
  Cart.find({}, function(err,cart){

    if(err){
      res.send(err)
      return;
    }
    // res.send(products.map((product) => (product.id)))
  res.send(cart)
  })
})
app.post("/cart", function (req, res) {
 let cart = new Cart ({
  id: req.body.id,
  name: req.body.name,
  imgurl: req.body.imgurl,
  price: req.body.price,
  category: req.body.category,
  description: req.body.description, 

 })
  res.send(cart)
});
app.post("/login", function (req, res) {
  User.find(
    { username: req.body.username, password: req.body.password },
    function (err, user) {
      if (err) {
        res.send(err);
      }
      res.send(user);
    }
  );
});
app.post("/logout", function (req, res) {
  User.find({ _id: "" }, function (err, _id) {
    if (err) {
      res.send(err);
    }
    res.send(_id);
  });
});

// app.delete("/cart", function (req, res) {
//   cart.filter((product) => product.id != req.body.id);
//   res.send(cart);
// });

// app.get(`/phones`, (req, res) => {
//   res.send(products.filter((product) => product.category === "phones"));
// });

// app.get("/entertainment", (req, res) => {
//   res.send(products.filter((product) => product.category === "entertainment"));
// });
// app.get("/appliances", (req, res) => {
//   res.send(
//     products.filter((product) => product.category === "kitchen-appliances")
//   );
// });
// app.get(`/:id`, (req, res) => {
//   Product.find({}, function(err,products){

//     if(err){
//       res.send(err)
//       return;
//     }
// res.send(products.map((product) => (product.id)))
//     products.filter((product) => product.id === Number(req.params.id))
// res.send(products)
//   })

// });
let cart = [];

app.get(`/:id`, (req, res) => {
  Product.find({}, function (err, products) {
    if (err) {
      res.send(err);
      return;
    }
    // res.send(products.map((product) => (product.id)))
    products.filter((product) => product.id === Number(req.params.id));
    res.send(products);
  });
});
app.delete(`/cart`, (req, res) => {
  Cart.find({}, function(err,cart){

    if(err){
      res.send(err)
      return;
    }
    // res.send(products.map((product) => (product.id)))
cart.filter((product) => product.id != req.body.id)
res.send(cart)
  }
  )
  
});

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

app.patch("/purchase", (req, res) => {
  let spent = 0;
  for (let i of cart) {
    spent = spent + i.price;
  }
  cart = [];
  if (balance >= spent) {
    balance = balance - spent;
    res.send(
      `Thanks for purchasing.  Your total is ${spent}.  You have ${balance} left.`
    );
  } else {
    res.send("INSUFFICIENT FUNDS");
  }
});

app.put("/balance", (req, res) => {
  res.json(balance);
});
app.listen(port, function () {
  console.log(`server is running on port ${port}`);
});

export default app;
