const express = require("express");
const app = express();
const port = 3000;

const products = [
  {
    name: 'Hisense 4.4-cu ft Freestanding Mini Fridge Freezer Compartment (Black Stainless Steel)',
    imgurl: 'https://mobileimages.lowes.com/product/converted/819130/819130027166.jpg?size=pdhi',
    category: 'Kitchen Appliances',
    price: 239.00,
    description: 'This energy star 4.4 Cu. Ft. Double door black stainless steel look mini fridge is perfect for college dorms, break rooms, or just extra storage for your home and office space. Separate 1.1 cu. Ft. freezer provides storage room for ice cream and frozen meals. The adjustable legs and reversible door design allow for placement of this mini refrigerator virtually anywhere you need it. The sleek and fashionable design does not compromise its functionality. This model has convenient storage shelves on the refrigerator door for 2-Liter bottles as well as extra space for single-serve yogurt or canned beverages. Removable glass shelves provide storage for larger items to efficiently utilize interior capacity. The sliding crisper drawer makes it easy to store your fresh fruits and vegetables.'
  },
  {
    name: 'Insignia™ - 0.7 Cu. Ft. Compact Microwave - Black',
    imgurl:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6315/6315750_sd.jpg',
    category: '',
    price: '',
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
  }
  {
    name:,
    imgurl:,
    category:,
    price:,
    description:
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

app.get