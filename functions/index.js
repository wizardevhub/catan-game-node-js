
  const functions = require('firebase-functions');
  const express = require('express');
  const engines = require('consolidate');
  const data = require('./config/dbconn.js');

  const app = express();
  app.engine('hbs', engines.handlebars);
  app.set('views', './views');
  app.set('view engine', 'hbs');

  //data.addToData('facts', {'text':'It s getting better'});

  app.get('/', (request, response) => {
    data.getData('facts').then(facts=>{
      response.render('index', {facts});
    });
  });

  exports.app = functions.https.onRequest(app);
