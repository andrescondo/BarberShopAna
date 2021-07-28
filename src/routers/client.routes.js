const express = require('express');
const router = express.Router();

const Client = require('../models/client');

//Nota: En caso de no verse los cambios en el DOM, reiniciar el server
router.get('/', async (req, res) =>{
  const client = await Client.find();
  res.json(client);
});

router.post("/", async (req, res) => {
  const {name, email, phone, ci} = req.body;
  const client = new Client({name, email, phone, ci});
  await client.save();
  res.json({status: 'Client Saved'});
})

module.exports = router;