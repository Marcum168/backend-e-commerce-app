const express = require("express");
const app = express();
const port = 3001;

const products = [
  {
    name: 'Hisense 4.4-cu ft Freestanding Mini Fridge Freezer Compartment (Black Stainless Steel)',
    imgurl: 'https://mobileimages.lowes.com/product/converted/819130/819130027166.jpg?size=pdhi',
    category: 'kitchen-appliances',
    price: 239.00,
    description: 'This energy star 4.4 Cu. Ft. Double door black stainless steel look mini fridge is perfect for college dorms, break rooms, or just extra storage for your home and office space. Separate 1.1 cu. Ft. freezer provides storage room for ice cream and frozen meals. The adjustable legs and reversible door design allow for placement of this mini refrigerator virtually anywhere you need it. The sleek and fashionable design does not compromise its functionality. This model has convenient storage shelves on the refrigerator door for 2-Liter bottles as well as extra space for single-serve yogurt or canned beverages. Removable glass shelves provide storage for larger items to efficiently utilize interior capacity. The sliding crisper drawer makes it easy to store your fresh fruits and vegetables.'
  },
  {
    name: 'Insignia™ - 0.7 Cu. Ft. Compact Microwave - Black',
    imgurl:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6315/6315750_sd.jpg',
    category: 'kitchen-appliances',
    price: 54.99,
    description: 'Cook foods quickly and evenly with this Insignia compact microwave, which features up to 11 power levels for cooking a variety of foods. The weight defrost option eliminates the chance of burning a meal by precisely thawing foods according to their weight. This Insignia compact microwave also includes an internal light, making it easier to judge when cooking is done.'
  },
  {
    name: 'Ninja - Ninja® Coffee 12-Cup Coffee Brewer CE251 - Silver',
    imgurl:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6357/6357659_sd.jpg;maxHeight=640;maxWidth=550',
    category: 'kitchen-appliances',
    price:79.99,
    description: "Enjoy delicious beverages at your convenience with this Ninja coffee brewer. The 12-cup glass carafe is big enough for a whole day's worth of your favorite brew, and the removable water reservoir supports easy filling. This Ninja coffee brewer features programmable settings, letting you make coffee just the way you like it."
  },
  {
    name: 'Toshiba - 32" Class LED HD Smart FireTV Edition TV',
    imgurl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398132_sd.jpg;maxHeight=640;maxWidth=550',
    category: 'entertainment',
    price: 149.99,
    description:"Stay entertained with this 32-inch Toshiba Fire TV Edition smart TV. The Wi-Fi connectivity lets you stream your favorite movies and videos, while the HDMI and USB ports offer simple connections to various devices. This Toshiba Fire TV Edition smart TV has a 720p screen resolution, delivering vibrant picture quality."
  },
  {
    name: 'Nintendo Switch Console with Neon Blue & Red Joy-Con.',
    imgurl:"https://i5.walmartimages.com/asr/afdb71df-4810-4e3e-9c3c-187e88a98619_1.9abc0f91d776fcbf0b8b580e875ed6c0.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    category: 'entertainment',
    price: 367.40,
    description:"It's a Nintendo Switch.  Duh."
  },
  {
    name:'Apple - Preowned iPhone X with 256GB Memory Cell Phone (Unlocked) - Silver',
    imgurl:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6394/6394666_sd.jpg;maxHeight=640;maxWidth=550',
    category: 'phones',
    price:499.99,
    description:"This thing is probaby outdated already.  I hate Apple."
  }
  

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
app.get('/', (req,res)=> {
  res.send(products)
})
app.post('/cart', function(req,res,next){
  req.cartItem = products[Math.floor(Math.random()*products.length)];
  cart.push(req.cartItem)
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


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post('/', (req,res) => {
  res.send('Is this post thing working or not?')
})
// app.patch('/purchase', (req,res) => {
//   let spent = 0
//   for(let i of cart){
//     spent = spent + i.price
//   }
//   if(balance >= spent){
//     balance = balance - spent
//     res.send("Thanks for purchasing")
//   }
//   else{
//     res.send('INSUFFICIENT FUNDS');
//   }
//   cart = [];
// })

