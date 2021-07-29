const express = require('express');
const router = express.Router();

const Client = require('../models/client');

//Nota: En caso de no verse los cambios en el DOM, reiniciar el server
router.get('/', async (req, res) =>{
  const client = await Client.find();
  res.json(client);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const {name, email, phone, ci, date} = req.body;
  const client = new Client({name, email, phone, ci, date});
  await client.save();
  // res.json({status: 'Client Saved'});
})

router.get("/:id", async (req, res) =>{
  const client = await Client.findById(req.params.id);
  res.json(client);
});

router.put("/:id", async (req, res) => {
  const { name, email, ci, date, attented } = req.body;
  await Client.findByIdAndUpdate(req.params.id, {
    name,
    email,
    ci,
    date,
    attented
  })
})

module.exports = router;