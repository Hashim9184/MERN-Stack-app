const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const router = express.Router();
const cors = require('cors')
const User = require('../model/userSchema')

router.get('/api', (req, res)=>{

User.find({})
    .then((data) => {
        console.log('Data', data);
        res.json(data);
    })
    .catch((err) =>{
        console.log('error: ', dearrortal)
    })

});
router.use(cors())


module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
    })
  );
};

// router.get('[/api/name', (req, res) =>{
//     const data = {
//         username: 'hashim',
//         age: 17
//     };
//     res.json(data);
// })

module.exports = router;