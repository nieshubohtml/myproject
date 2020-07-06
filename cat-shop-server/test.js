require('./db')
const { Order, ShopCart, Product } = require('./models')

ShopCart.find({}).select('product quantity')
  .then(res => {
    // console.log(res)
    Product.find({_id: {
      $in: ['5c98804037e89d136c366d9d', '5c94dee52994220dce44b11c']
    }})
    .then(d => {
      console.log(d)
    })
  })


