const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const router = require('./routes/index');

const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;

mongoose.connect(config.dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use("/api",router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
