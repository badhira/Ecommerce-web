var express = require('express');
var router = express.Router();

/* GET users listing. */
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

res.render('admin/view-products',{admin:true,products})
});
router.get('/add-product',function(req,res){
res.render('admin/add-product');
})
router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image)
})

module.exports = router;
