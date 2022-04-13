global.config = require(process.env.NODE_ENV === 'production'
  ? './config-prod.json'
  : './config-dev.json');
const express = require('express');
const bodyParser = require('body-parser');
const crmController = require('./controllers-layer/crm-controller');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/contacts', crmController);

const PORT = 3003 || process.env.PORT;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
