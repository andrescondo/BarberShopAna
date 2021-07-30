const mongoose = require('mongoose');
const URI = 'mongodb://localhost/BarberShopAna';

mongoose
  .connect(URI)
  .then((db) => console.log('Db is connected'))
  .catch((error) => console.error(error));

module.exports = mongoose;
