const path = require('path');

module.exports = {
  development: {
    sitename: 'Roux Meetups [Development]',
    serviceRegistryUrl: 'http://localhost:3000',
    serviceVersionIdentifier: '1.x.x',
    data: {
      feedback: path.join(__dirname, '../data/feedback.json'),
    },
  },
  production: {
    sitename: 'Roux Meetups',
    serviceRegistryUrl: 'http://localhost:3000',
    serviceVersionIdentifier: '1.x.x',
    data: {
      feedback: path.join(__dirname, '../data/feedback.json'),
    },
  },
};
