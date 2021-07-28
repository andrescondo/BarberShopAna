const express = require('express');
const router = express.Router();

const Client = require('../models/client');

//En caso de no verse los cambios en el DOM, reiniciar el server
router.get('/', async (req, res) =>{
  // res.send('');
  // const Client = await Client.find();
  res.json('recieved')
});

module.exports = router;