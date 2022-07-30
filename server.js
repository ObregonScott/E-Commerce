//Dependencies & Imports
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// Express Port Job Middleware?
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync Sequelize Models to the DataBase

sequelize.sync({ force: false }).then(() => {
    
    //Turn on Server
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  });