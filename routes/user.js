var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[{
    name:"apple",
    category:"fruits",
    description:"kashmir apple",
    image:"https://tse2.mm.bing.net/th?id=OIP.q_saZ0G0Q4lUXMElm8CAwAHaFj&pid=Api&P=0&w=233&h=174"
  },{
    name:"orange",
    category:"fruits",
    description:"musambi",
    image:"https://tse1.mm.bing.net/th?id=OIP.PKHYlstDYAp3lswvX1o0aAHaE8&pid=Api&P=0&w=250&h=166"
  }]
  res.render('index', { products,admin:false });
});

module.exports = router;
