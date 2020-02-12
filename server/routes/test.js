const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  	res.status(200).json({message: "Hello world"});
});

router.post('/', (req, res) => {
  console.log(req.body)
  res.status(200).json({message: "todo fino"});
});


module.exports = router;