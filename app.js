const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const indexRouter = require('./routers/index.route'); // Imports routes for the products
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',express.static(path.join(__dirname, 'public'))); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://0.0.0.0:27017/TodoList', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/', indexRouter); // Use index router
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


