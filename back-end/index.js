const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
const registerRoutes = require('./routes/register');
const cors = require('cors');

require('dotenv').config();

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGO_SRV)
  .then(() => console.log('Connected to database'));

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());
app.use('/auth/', registerRoutes);

app.listen(PORT, () => {
  console.log('Listening on PORT:' + PORT);
});
