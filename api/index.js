const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    autoIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
    console.log('server is running')
})

console.log(process.env.MONGO_URL)