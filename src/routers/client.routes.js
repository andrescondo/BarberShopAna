const express = require('express');
const router = express.Router();

const User = require('../models/user');

//En caso de no verse los cambios en el DOM, reiniciar el server
router.get('/', async (req, res) =>{
  // res.send('');
  const user = await User.find();
  // res.json('recieved')
});

module.exports = router;